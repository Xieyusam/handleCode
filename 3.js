// 手写 new 操作符

// （1）首先创建了一个新的空对象

// （2）设置原型，将对象的原型设置为函数的 prototype 对象。

// （3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）

// （4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

function myNew() {
	let newObj = null;
	let constructor = Array.prototype.shift.call(arguments);
	let result = null;
	// 判断参数是否是一个函数
	if (typeof constructor !== 'function') {
		console.error('type error');
		return;
	}
	newObj = Object.create(constructor.prototype);
	result = constructor.apply(newObj, arguments);
	// 判断返回对象
	let flag = result && (typeof result === 'object' || typeof result === 'function');
	// 判断返回结果
	return flag ? result : newObj;
}

function fn1(a){
    this.a = a
}

let obj1 =  myNew(fn1,2)
console.log(obj1)
