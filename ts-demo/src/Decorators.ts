// 8 TypeScript 装饰器
// 装饰器是一种特殊类型的声明，它能够被附加到类声明、方法、属性或参数上，可以修改类的行为
// 常见的装饰器有类装饰器、属性装饰器、方法装饰器和参数装饰器
// 装饰器的写法分为普通装饰器和装饰器工厂
// 使用@装饰器的写法需要把 tsconfig.json 的 experimentalDecorators 字段设置为 true




// 8.1 类装饰器
// 类装饰器在类声明之前声明，用来监视、修改或替换类定义


namespace a {
    //当装饰器作为修饰类的时候，会把构造器传递进去
    function addNameEat(constructor: Function) {
      constructor.prototype.name = "hello";
      constructor.prototype.eat = function () {
        console.log("eat");
      };
    }
    @addNameEat
    class Person {
      name!: string;
      eat!: Function;
      constructor() {}
    }
    let p: Person = new Person();
    console.log(p.name);
    p.eat();
  }
  
  namespace b {
    //还可以使用装饰器工厂 这样可以传递额外参数
    function addNameEatFactory(name: string) {
      return function (constructor: Function) {
        constructor.prototype.name = name;
        constructor.prototype.eat = function () {
          console.log("eat");
        };
      };
    }
    @addNameEatFactory("hello")
    class Person {
      name!: string;
      eat!: Function;
      constructor() {}
    }
    let p: Person = new Person();
    console.log(p.name);
    p.eat();
  }
  
  namespace c {
    //还可以替换类,不过替换的类要与原类结构相同
    function enhancer(constructor: Function) {
      return class {
        name: string = "jiagou";
        eat() {
          console.log("吃饭饭");
        }
      };
    }
    @enhancer
    class Person {
      name!: string;
      eat!: Function;
      constructor() {}
    }
    let p: Person = new Person();
    console.log(p.name);
    p.eat();
  }




//   8.2 属性装饰器
//   属性装饰器表达式会在运行时当作函数被调用，
//   传入 2 个参数 第一个参数对于静态成员来说是类的构造函数，对于实例成员是类的原型对象 第二个参数是属性的名称


//修饰实例属性
function upperCase(target: any, propertyKey: string) {
    let value = target[propertyKey];
    const getter = function () {
      return value;
    };
    // 用来替换的setter
    const setter = function (newVal: string) {
      value = newVal.toUpperCase();
    };
    // 替换属性，先删除原先的属性，再重新定义属性
    if (delete target[propertyKey]) {
      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
      });
    }
  }
  
  class Person {
    @upperCase
    name!: string;
  }
  let p: Person = new Person();
  p.name = "world";
  console.log(p.name);



//   8.3 方法装饰器
// 方法装饰器顾名思义，用来装饰类的方法。它接收三个参数：
// target: Object - 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
// propertyKey: string | symbol - 方法名
// descriptor: TypePropertyDescript - 属性描述符

//修饰实例方法
function noEnumerable(
    target: any,
    property: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("target.getName", target.getName);
    console.log("target.getAge", target.getAge);
    descriptor.enumerable = false;
  }
  //重写方法
  function toNumber(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    let oldMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      args = args.map((item) => parseFloat(item));
      return oldMethod.apply(this, args);
    };
  }
  class Person {
    name: string = "hello";
    public static age: number = 10;
    constructor() {}
    @noEnumerable
    getName() {
      console.log(this.name);
    }
    @toNumber
    sum(...args: any[]) {
      return args.reduce((accu: number, item: number) => accu + item, 0);
    }
  }
  let p: Person = new Person();
  for (let attr in p) {
    console.log("attr=", attr);
  }
  p.getName();
  console.log(p.sum("1", "2", "3"));

  

//   8.4 参数装饰器
//   参数装饰器顾名思义，是用来装饰函数参数，它接收三个参数：

// target: Object - 被装饰的类 propertyKey: string | symbol - 方法名 parameterIndex: number - 方法中参数的索引值


function Log(target: Function, key: string, parameterIndex: number) {
    let functionLogged = key || target.prototype.constructor.name;
    console.log(`The parameter in position ${parameterIndex} at ${functionLogged} has
      been decorated`);
  }
  
  class Greeter {
    greeting: string;
    constructor(@Log phrase: string) {
      this.greeting = phrase;
    }
  }

//   以上代码成功运行后，控制台会输出以下结果： "The parameter in position 0 at Greeter has been decorated"


// 8.5 装饰器执行顺序


// 有多个参数装饰器时：从最后一个参数依次向前执行
// 方法和方法参数中参数装饰器先执行。 方法和属性装饰器，谁在前面谁先执行。因为参数属于方法一部分，所以参数会一直紧紧挨着方法执行
// 类装饰器总是最后执行


function Class1Decorator() {
    return function (target: any) {
      console.log("类1装饰器");
    };
  }
  function Class2Decorator() {
    return function (target: any) {
      console.log("类2装饰器");
    };
  }
  function MethodDecorator() {
    return function (
      target: any,
      methodName: string,
      descriptor: PropertyDescriptor
    ) {
      console.log("方法装饰器");
    };
  }
  function Param1Decorator() {
    return function (target: any, methodName: string, paramIndex: number) {
      console.log("参数1装饰器");
    };
  }
  function Param2Decorator() {
    return function (target: any, methodName: string, paramIndex: number) {
      console.log("参数2装饰器");
    };
  }
  function PropertyDecorator(name: string) {
    return function (target: any, propertyName: string) {
      console.log(name + "属性装饰器");
    };
  }
  
  @Class1Decorator()
  @Class2Decorator()
  class Person {
    @PropertyDecorator("name")
    name: string = "hello";
    @PropertyDecorator("age")
    age: number = 10;
    @MethodDecorator()
    greet(@Param1Decorator() p1: string, @Param2Decorator() p2: string) {}
  }
  
  /**
  name属性装饰器
  age属性装饰器
  参数2装饰器
  参数1装饰器
  方法装饰器
  类2装饰器
  类1装饰器
   */
  

