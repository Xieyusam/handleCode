// 实现call

// 注意两点：

// call 改变了 this 的指向，指向到 foo
// bar 函数执行了
// 那我们来看看 这个call自己能怎么模拟出来吧～

// 思路：

// 将函数设为对象的属性
// 执行该函数
// 删除该函数

Function.prototype.myCall = function (context, ...args) {
	let ctx = context || globalThis;
	const fn = this;
	if (typeof fn !== 'function') {
		throw new Error('this is not a function');
	}
	let key = Symbol();
	ctx[key] = fn;
	const res = ctx[key](...args);
	delete ctx[key];
	return res;
};
function foo() {
	console.log(this.name);
}
const obj = {
	name: 'xys'
};
foo.myCall(obj); 
var name = 'xys2';
foo.myCall();