// 5 接口
// 接口既可以在面向对象编程中表示为行为的抽象，也可以用来描述对象的形状

// 我们用 interface 关键字来定义接口 在接口中可以用分号或者逗号分割每一项，也可以什么都不加

// 5.1 对象的形状

//接口可以用来描述`对象的形状`
//接口可以用来描述`对象的形状`
interface Speakable {
	speak(): void;
	readonly lng: string; //readonly表示只读属性 后续不可以更改
	name?: string; //？表示可选属性
}

let speakman: Speakable = {
	//   speak() {}, //少属性会报错
	name: 'hello',
	lng: 'en',
	age: 111 //多属性也会报错
};

//   5.2 行为的抽象

// 接口可以把一些类中共有的属性和方法抽象出来,可以用来约束实现此接口的类

// 一个类可以实现多个接口，一个接口也可以被多个类实现

// 我们用 implements关键字来代表 实现

//接口可以在面向对象编程中表示为行为的抽象
interface Speakable22 {
	speak(): void;
}
interface Eatable33 {
	eat(): void;
}
//一个类可以实现多个接口
class Person222 implements Speakable22, Eatable33 {
	speak() {
		console.log('Person说话');
	}
	eat() {} //需要实现的接口包含eat方法 不实现会报错
}

//   5.3 定义任意属性

// 如果我们在定义接口的时候无法预先知道有哪些属性的时候,可以使用 [propName:string]:any,propName 名字是任意的

interface Person66 {
	id: number;
	name: string;
	[propName: string]: any;
}

let per1: Person66 = {
	id: 1,
	name: 'hello',
	age: 10
};

//   5.4 接口的继承
// 我们除了类可以继承 接口也可以继承 同样的使用 extends关键字

interface Speakable111 {
	speak(): void;
}
interface Speakable111222 extends Speakable111 {
	speakChinese(): void;
}
class Person2222 implements Speakable111222 {
	speak() {
		console.log('Person');
	}
	speakChinese() {
		console.log('speakChinese');
	}
}

//   5.5 函数类型接口
// 可以用接口来定义函数类型

interface discount {
	(price: number): number;
}
let cost: discount = function (price: number): number {
	return price * 0.8;
};

//   5.6 构造函数的类型接口
// 使用特殊的 new()关键字来描述类的构造函数类型
class Animal333 {
	constructor(public name: string) {}
}
//不加new是修饰函数的,加new是修饰类的
interface WithNameClass {
	new (name: string): Animal333;
}
function createAnimal(clazz: WithNameClass, name: string) {
	return new clazz(name);
}
let a4444 = createAnimal(Animal333, 'hello');
console.log(a4444.name);

//   其实这样的用法一般出现在 当我们需要把一个类作为参数的时候 我们需要对传入的类的构造函数类型进行约束 所以需要使用 new 关键字代表是类的构造函数类型 用以和普通函数进行区分

// 思考：接口和类型别名的区别 这个题目是经典的 ts 面试题

// 实际上，在大多数的情况下使用接口类型和类型别名的效果等价，但是在某些特定的场景下这两者还是存在很大区别。

// 1.基础数据类型 与接口不同，类型别名还可以用于其他类型，如基本类型（原始值）、联合类型、元组

// primitive
type Name = string;

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple
type Data = [number, string];

// dom
let div = document.createElement('div');
type B = typeof div;

// 2.重复定义

// 接口可以定义多次 会被自动合并为单个接口 类型别名不可以重复定义

interface Point {
	x: number;
}
interface Point {
	y: number;
}
const point: Point = { x: 1, y: 2 };

//   3.扩展 接口可以扩展类型别名，同理，类型别名也可以扩展接口。但是两者实现扩展的方式不同

// 接口的扩展就是继承，通过 extends 来实现。类型别名的扩展就是交叉类型，通过 & 来实现。

// 接口扩展接口
interface PointXX {
	x: number;
}

interface PointXXX extends PointXX {
	y: number;
}
// ----
// 类型别名扩展类型别名
type PointX1 = {
	x: number;
};

type Point2 = PointX1 & {
	y: number;
};
// ----
// 接口扩展类型别名
type PointX3 = {
	x: number;
};
interface Point4 extends PointX3 {
	y: number;
}
// ----
// 类型别名扩展接口
interface PointX5 {
	x: number;
}
type PointX6 = PointX5 & {
	y: number;
};


// 4.实现 这里有一个特殊情况 类无法实现定义了联合类型的类型别名

type PartialPoint666 = { x: number } | { y: number };

// A class can only implement an object type or
// intersection of object types with statically known members.
class SomePartialPoint implements PartialPoint666 {
  // Error
  x = 1;
  y = 2;
}

