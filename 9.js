// bind 函数的实现步骤：

// 1. 判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
// 2. 保存当前函数的引用，获取其余传入参数值。
// 3. 创建一个函数返回
// 4. 函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的情况，
// 这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传入指定的上下文对象。

Function.prototype.myBind = function (context) {
	if (typeof this !== 'function') {
		console.error('error');
	}
	let args = [...arguments].slice(1)
	let fn = this;
	return function Fn() {
		return fn.apply(this instanceof Fn ? this : context, args.concat(...arguments));
	};
};

let obj = {
	a: 1,
	b: 1,
	add(c, d) {
		return this.a + this.b + c + d;
	}
};
// test
console.log(obj.add(1, 1));
let add  = obj.add.myBind({ a: 2, b: 2 })
console.log(add(2,2))
let newAdd = new add

console.log(newAdd(2,2))

