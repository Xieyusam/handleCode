// ###  函数柯里化的实现
//  函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

// es6 实现
function curryES6(fn, ...args) {
	return fn.length <= args.length ? fn(...args) : curryES6.bind(null, fn, ...args);
}

// test

function add(a, b, c, d) {
	return a + b + c + d;
}

let curryAdd = curryES6(add,1,2)
curryAdd = curryAdd(3)

console.log(curryAdd(3,4))
