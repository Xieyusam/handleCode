// 数组类型(array)
const Arrayflag1: number[] = [1, 2, 3];
const Arrayflag2: Array<number> = [1, 2, 3];

// 元组类型(tuple)
const tupleflag: [string, number] = ['hello', 1];

// Symbol
// 我们在使用 Symbol 的时候，必须添加 es6 的编译辅助库 需要在 tsconfig.json 的 libs 字段加上ES2015 Symbol 的值是唯一不变的

// const sym1 = Symbol('hello');
// const sym2 = Symbol('hello');
// console.log(Symbol('hello') === Symbol('hello'));

// 任意类型(any)
// 任何类型都可以被归为 any 类型 这让 any 类型成为了类型系统的 顶级类型 (也被称作 全局超级类型)
// TypeScript 允许我们对 any 类型的值执行任何操作 而无需事先执行任何形式的检查
// 一般使用场景：
// 第三方库没有提供类型文件时可以使用 any
// 类型转换遇到困难或者数据结构太复杂难以定义
// 不过不要太依赖 any 否则就失去了 ts 的意义了

const documentflag: any = document.getElementById('root');

// null 和 undefined

// undefined 和 null 两者有各自的类型分别为 undefined 和 null

let u: undefined = undefined;
let n: null = null;

// Unknown 类型

// unknown 和 any 的主要区别是 unknown 类型会更加严格 在对 unknown 类型的值执行大多数操作之前 我们必须进行某种形式的检查 而在对 any 类型的值执行操作之前 我们不必进行任何检查
// 所有类型都可以被归为 unknown 但unknown类型只能被赋值给 any 类型和 unknown 类型本身 而 any 啥都能分配和被分配

let value: unknown;

value = true; // OK
value = 42; // OK
value = 'Hello World'; // OK
value = []; // OK
value = {}; // OK

// let value1: unknown = value; // OK
// let value2: any = value; // OK
// let value3: boolean = value; // Error
// let value4: number = value; // Error
// let value5: string = value; // Error
// let value6: object = value; // Error

// void 类型
// void 表示没有任何类型 当一个函数没有返回值时 TS 会认为它的返回值是 void 类型。
function hello(name: string): void {}

// never 类型
// never 一般表示用户无法达到的类型 例如never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
// function neverReach(): never {
//     throw new Error("an error");
// }

// BigInt 大数类型

// 使用 BigInt 可以安全地存储和操作大整数
// 我们在使用 BigInt 的时候 必须添加 ESNext 的编译辅助库 需要在 tsconfig.json 的 libs 字段加上ESNext
// 要使用1n需要 "target": "ESNext"
// number 和 BigInt 类型不一样 不兼容

// const max1 = Number.MAX_SAFE_INTEGER; // 2**53-1
// console.log(max1 + 1 === max1 + 2); //true

// const max2 = BigInt(Number.MAX_SAFE_INTEGER);
// console.log(max2 + 1n === max2 + 2n); //false

// let foo: number;
// let bar: bigint;
// foo = bar; //error
// bar = foo; //error

// object, Object 和 {} 类型
// object 类型用于表示非原始类型

let objectCase: object;
// objectCase = 1; // error
// objectCase = "a"; // error
// objectCase = true; // error
// objectCase = null; // error
// objectCase = undefined; // error
objectCase = {}; // ok

// 大 Object 代表所有拥有 toString、hasOwnProperty 方法的类型 所以所有原始类型、非原始类型都可以赋给 Object(严格模式下 null 和 undefined 不可以)
// {} 空对象类型和大 Object 一样 也是表示原始类型和非原始类型的集合
// let ObjectCase2: Object;
let ObjectCase2: {};

ObjectCase2 = 1; // ok
ObjectCase2 = 'a'; // ok
ObjectCase2 = true; // ok
// ObjectCase2 = null; // error
// ObjectCase2 = undefined; // error
ObjectCase2 = {}; // ok

// 类型推论
// 指编程语言中能够自动推导出值的类型的能力 它是一些强静态类型语言中出现的特性 定义时未赋值就会推论成 any 类型 如果定义的时候就赋值就能利用到类型推论

let flagany; //推断为any
let count123 = 123; //为number类型
let hello2 = 'hello'; //为string类型

// 联合类型

// 联合类型（Union Types）表示取值可以为多种类型中的一种 未赋值时联合类型上只能访问两个类型共有的属性和方法

// let nameUnion: string | number;
// console.log(nameUnion.toString());
// nameUnion = 1;
// console.log(nameUnion.toFixed(2));
// nameUnion = "hello";
// console.log(nameUnion.length);

// 类型断言
// 有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。
// 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
// 其实就是你需要手动告诉 ts 就按照你断言的那个类型通过编译
// （这一招很关键 有时候可以帮助你解决很多编译报错）

// 类型断言有两种形式：
// 尖括号 语法
let someValue1: any = 'this is a string';
let strLength1: number = (<string>someValue1).length;

// as 语法
let someValue2: any = 'this is a string';
let strLength2: number = (someValue2 as string).length;
// 以上两种方式虽然没有任何区别，但是尖括号格式会与 react 中 JSX 产生语法冲突，因此我们更推荐使用 as 语法。

// 非空断言
// 在上下文中当类型检查器无法断定类型时 一个新的后缀表达式操作符 ! 可以用于断言操作对象是非 null 和非 undefined 类型

// let flag: null | undefined | string;
// flag!.toString(); // ok
// flag.toString(); // error

// 字面量类型
// 在 TypeScript 中，字面量不仅可以表示值，还可以表示类型，即所谓的字面量类型。
// 目前，TypeScript 支持 3 种字面量类型：字符串字面量类型、数字字面量类型、布尔字面量类型，对应的字符串字面量、
// 数字字面量、布尔字面量分别拥有与其值一样的字面量类型，具体示例如下：
let flag11: 'hello' = 'hello';
let flag22: 1 = 1;
let flag33: true = true;

// 类型别名
type flag = string | number;

function helloflag(value: flag) {}

// 交叉类型
// 交叉类型是将多个类型合并为一个类型。通过 & 运算符可以将现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性

type Flag1 = { x: number };
type Flag2 = Flag1 & { y: string };

let flag34: Flag2 = {
	x: 1,
	y: 'hello'
};

// 类型保护
// 类型保护就是一些表达式，他们在编译的时候就能通过类型信息确保某个作用域内变量的类型 其主要思想是尝试检测属性、方法或原型，以确定如何处理值

function double(input: string | number | boolean) {
	if (typeof input === 'string') {
		return input + input;
	} else {
		if (typeof input === 'number') {
			return input * 2;
		} else {
			return !input;
		}
	}
}

//   in 关键字
interface Bird {
	fly: number;
}

interface Dog {
	leg: number;
}

function getNumber(value: Bird | Dog) {
	if ('fly' in value) {
		return value.fly;
	}
	return value.leg;
}


// instanceof 类型保护

class Animal {
    name!: string;
  }
  class Bird extends Animal {
    fly!: number;
  }
  function getName(animal: Animal) {
    if (animal instanceof Bird) {
      console.log(animal.fly);
    } else {
      console.log(animal.name);
    }
  }





//   自定义类型保护
// 过 type is xxx这样的类型谓词来进行类型保护

// 例如下面的例子 value is object就会认为如果函数返回 true 那么定义的 value 就是 object 类型
function isObject(value: unknown): value is object {
  return typeof value === "object" && value !== null;
}

function fn(x: string | object) {
  if (isObject(x)) {
    // ....
  } else {
    // .....
  }
}

