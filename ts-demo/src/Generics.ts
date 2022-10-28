// 6 泛型
// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性

// 为了更好的了解泛型的作用 我们可以看下面的一个例子

// function createArray(length: number, value: any): any[] {
//     let result = [];
//     for (let i = 0; i < length; i++) {
//       result[i] = value;
//     }
//     return result;
//   }

//   createArray(3, "x"); // ['x', 'x', 'x']

//   上述这段代码用来生成一个长度为 length 值为 value 的数组
// 但是我们其实可以发现一个问题 不管我们传入什么类型的 value 返回值的数组永远是 any 类型 如果我们想要的效果是
//  我们预先不知道会传入什么类型 但是我们希望不管我们传入什么类型 我们的返回的数组的指里面的类型应该和参数保持一致
//  那么这时候 泛型就登场了
// 使用泛型改造

function createArray<T>(length: number, value: T): Array<T> {
	let result: T[] = [];
	for (let i = 0; i < length; i++) {
		result[i] = value;
	}
	return result;
}

createArray<string>(3, 'x'); // ['x', 'x', 'x']

//   6.1 多个类型参数

function swap<T, U>(tuple: [T, U]): [U, T] {
	return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]

//   6.2 泛型约束

function loggingIdentity<T>(arg: T): T {
	console.log(arg.length);
	return arg;
}

// index.ts(2,19): error TS2339: Property 'length' does not exist on type 'T'.

//   上例中，泛型 T 不一定包含属性 length，所以编译的时候报错了。

// 这时，我们可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量。这就是泛型约束

interface Lengthwise {
	length: number;
}

function loggingIdentity222<T extends Lengthwise>(arg: T): T {
	console.log(arg.length);
	return arg;
}

//   注意：我们在泛型里面使用extends关键字代表的是泛型约束 需要和类的继承区分开

// 6.3 泛型接口

// 定义接口的时候也可以指定泛型

interface Cart<T> {
	list: T[];
}
let cart: Cart<{ name: string; price: number }> = {
	list: [{ name: 'hello', price: 10 }]
};
console.log(cart.list[0].name, cart.list[0].price);

//   我们定义了接口传入的类型 T 之后返回的对象数组里面 T 就是当时传入的参数类型

// 6.4 泛型类

class MyArray<T> {
	private list: T[] = [];
	add(value: T) {
		this.list.push(value);
	}
	getMax(): T {
		let result = this.list[0];
		for (let i = 0; i < this.list.length; i++) {
			if (this.list[i] > result) {
				result = this.list[i];
			}
		}
		return result;
	}
}
let arr = new MyArray();
arr.add(1);
arr.add(2);
arr.add(3);
let ret = arr.getMax();
console.log(ret);


// 上诉例子我们实现了一个在数组里面添加数字并且获取最大值的泛型类


// 6.5 泛型类型别名

type Cart<T> = { list: T[] } | T[];
let c1: Cart<string> = { list: ["1"] };
let c2: Cart<number> = [1];


// 6.6 泛型参数的默认类型
// 我们可以为泛型中的类型参数指定默认类型。当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用

function createArray444<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
      result[i] = value;
    }
    return result;
  }
