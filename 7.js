// 手写 call 函数

// call 函数的实现步骤：

// 1. 判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
// 2. 判断传入上下文对象是否存在，如果不存在，则设置为 window 。
// 3. 处理传入的参数，截取第一个参数后的所有参数。
// 4. 将函数作为上下文对象的一个属性。
// 5. 使用上下文对象来调用这个方法，并保存返回结果。
// 6. 删除刚才新增的属性。
// 7. 返回结果。

Function.prototype.myCall = function (context) {
	if (typeof this !== 'function') {
		console.error('error');
	}
	// 获取参数
	let args = [...arguments].slice(1);
	// 设置上下文
	context = context || window;
	context.fn = this;
	let result = context.fn(...args);
	delete context.fn;
	return result;
};

let obj = {
	a: 1,
	b: 1,
	add(c,d) {
		return this.a + this.b + c + d;
	}
};
// test
console.log(obj.add(1,1));
console.log(obj.add.myCall({a:2,b:2},2,2));
