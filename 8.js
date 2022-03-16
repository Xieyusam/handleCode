// ### 手写 apply 函数

// apply 函数的实现步骤：

// 1. 判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
// 2. 判断传入上下文对象是否存在，如果不存在，则设置为 window 。
// 3. 将函数作为上下文对象的一个属性。
// 4. 判断参数值是否传入
// 5. 使用上下文对象来调用这个方法，并保存返回结果。
// 6. 删除刚才新增的属性
// 7. 返回结果

Function.prototype.myApply = function (context, args) {
	if (typeof this !== 'function') {
		console.error('error');
	}
	context = context || window;
	context.fn = this;
	let result;
	if (args) {
		result = context.fn(...args);
	} else {
		result = context.fn();
	}
	delete context.fn;
	return result;
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
console.log(obj.add.myApply({ a: 2, b: 2 }, [2, 2]));
