// 4 类

// 4.1 类的定义

// 在 TypeScript 中，我们可以通过 Class 关键字来定义一个类

class Person {
	name!: string; //如果初始属性没赋值就需要加上!
	constructor(_name: string) {
		this.name = _name;
	}
	getName(): void {
		console.log(this.name);
	}
}
let p1 = new Person('hello');
p1.getName();

// 当然 如果我们图省事 我们也可以把属性定义直接写到构造函数的参数里面去(不过一般不建议这样写 因为会让代码增加阅读难度)

class Person2 {
	constructor(public name: string) {}
	getName(): void {
		console.log(this.name);
	}
}
let p12 = new Person2('hello');
p12.getName();

// 注意：当我们定义一个类的时候,会得到 2 个类型 一个是构造函数类型的函数类型(当做普通构造函数的类型) 另一个是类的实例类型（代表实例）

class Component {
	static myName: string = '静态名称属性';
	myName: string = '实例名称属性';
}
//ts 一个类型 一个叫值
//放在=后面的是值
let com = Component; //这里是代表构造函数
//冒号后面的是类型
let c: Component = new Component(); //这里是代表实例类型
let f: typeof Component = com;

// 4.2 存取器

// 在 TypeScript 中，我们可以通过存取器来改变一个类中属性的读取和赋值行为

class User {
	myname: string;
	constructor(myname: string) {
		this.myname = myname;
	}
	get name() {
		return this.myname;
	}
	set name(value) {
		this.myname = value;
	}
}

let user = new User('hello');
user.name = 'world';
console.log(user.name);


// 4.3 readonly 只读属性

// readonly 修饰的变量只能在构造函数中初始化 TypeScript 的类型系统同样也允许将 interface、type、 class 上的属性标识为 readonly readonly 实际上只是在编译阶段进行代码检查。

class Animal2 {
    public readonly name: string;
    constructor(name: string) {
      this.name = name;
    }
    changeName(name: string) {
      this.name = name; //这个ts是报错的
    }
  }
  
  let a = new Animal2("hello");






//   4.4 继承

// 子类继承父类后子类的实例就拥有了父类中的属性和方法，可以增强代码的可复用性
// 将子类公用的方法抽象出来放在父类中，自己的特殊逻辑放在子类中重写父类的逻辑
// super 可以调用父类上的方法和属性
// 在 TypeScript 中，我们可以通过 extends 关键字来实现继承

class Person22 {
    name: string; //定义实例的属性，默认省略public修饰符
    age: number;
    constructor(name: string, age: number) {
      //构造函数
      this.name = name;
      this.age = age;
    }
    getName(): string {
      return this.name;
    }
    setName(name: string): void {
      this.name = name;
    }
  }
  class Student extends Person22 {
    no: number;
    constructor(name: string, age: number, no: number) {
      super(name, age);
      this.no = no;
    }
    getNo(): number {
      return this.no;
    }
  }
  let s1 = new Student("hello", 10, 1);
  console.log(s1);



//   4.5 类里面的修饰符

// public 类里面 子类 其它任何地方外边都可以访问 protected 类里面 子类 都可以访问,其它任何地方不能访问 private 类里面可以访问，子类和其它任何地方都不可以访问


class Parent {
    public name: string;
    protected age: number;
    private car: number;
    constructor(name: string, age: number, car: number) {
      //构造函数
      this.name = name;
      this.age = age;
      this.car = car;
    }
    getName(): string {
      return this.name;
    }
    setName(name: string): void {
      this.name = name;
    }
  }
  class Child extends Parent {
    constructor(name: string, age: number, car: number) {
      super(name, age, car);
    }
    desc() {
      console.log(`${this.name} ${this.age} ${this.car}`); //car访问不到 会报错
    }
  }
  
  let child = new Child("hello", 10, 1000);
  console.log(child.name);
  console.log(child.age); //age访问不到 会报错
  console.log(child.car); //car访问不到 会报错





//   4.6 静态属性 静态方法
// 类的静态属性和方法是直接定义在类本身上面的 所以也只能通过直接调用类的方法和属性来访问
class Parent33 {
    static mainName = "Parent";
    static getmainName() {
      console.log(this); //注意静态方法里面的this指向的是类本身 而不是类的实例对象 所以静态方法里面只能访问类的静态属性和方法
      return this.mainName;
    }
    public name: string;
    constructor(name: string) {
      //构造函数
      this.name = name;
    }
  }
  console.log(Parent33.mainName);
  console.log(Parent33.getmainName());


//   4.7 抽象类和抽象方法

// 抽象类，无法被实例化，只能被继承并且无法创建抽象类的实例
// 子类可以对抽象类进行不同的实现
// 抽象方法只能出现在抽象类中并且抽象方法不能在抽象类中被具体实现，只能在抽象类的子类中实现（必须要实现）
// 使用场景：
// 我们一般用抽象类和抽象方法抽离出事物的共性 以后所有继承的子类必须按照规范去实现自己的具体逻辑 这样可以增加代码的可维护性和复用性
// 使用 abstract 关键字来定义抽象类和抽象方法


abstract class Animal33 {
    name!: string;
    abstract speak(): void;
  }
  class Cat extends Animal33 {
    speak() {
      console.log("喵喵喵");
    }
  }
  let animal = new Animal33(); //直接报错 无法创建抽象类的实例
  let cat = new Cat();
  cat.speak();



//   思考 1:重写(override)和重载(overload)的区别


// 重写
// 是指子类重写继承自父类中的方法 重载是指为同一个函数提供多个类型定义

class Animal44 {
    speak(word: string): string {
      return "动物:" + word;
    }
  }
  class Cat44 extends Animal {
    speak(word: string): string {
      return "猫:" + word;
    }
  }
  let cat444 = new Cat44();
  console.log(cat444.speak("hello"));
  // 上面是重写
  //--------------------------------------------
  // 下面是重载
  function double(val: number): number;
  function double(val: string): string;
  function double(val: any): any {
    if (typeof val == "number") {
      return val * 2;
    }
    return val + val;
  }
  
  let r = double(1);
  console.log(r);




//   思考 2:什么是多态

// 多态

// 在父类中定义一个方法，在子类中有多个实现，在程序运行的时候，根据不同的对象执行不同的操作，实现运行时的绑定。

abstract class Animal55 {
    // 声明抽象的方法，让子类去实现
    abstract sleep(): void;
  }
  class Dog extends Animal55 {
    sleep() {
      console.log("dog sleep");
    }
  }
  let dog = new Dog();
  class Cat66 extends Animal55 {
    sleep() {
      console.log("cat sleep");
    }
  }
  let catCat66 = new Cat66();
  let animals: Animal55[] = [dog, catCat66];
  animals.forEach((i) => {
    i.sleep();
  });
  

