// ###  实现 add(1)(2)(3)

// 函数柯里化概念： 柯里化（Currying）是把接受多个参数的函数转变为接受一个单一参数的函数，
// 并且返回接受余下的参数且返回结果的新函数的技术。











// 1）粗暴版

// function add(a) {
// 	return function (b) {
// 		return function (c) {
// 			return a + b + c;
// 		};
// 	};
// }
// console.log(add(1)(2)(3)); // 6











// 2）柯里化解决方案

// - 参数长度固定

// var add = function (m) {
// 	var temp = function (n) {
// 		return add(m + n);
// 	};
// 	temp.toString = function () {
// 		return m;
// 	};
// 	return temp;
// };
// console.log(add(3)(4)(5).toString()); // 12
// console.log(add(3)(6)(9)(25).toString()); // 43

// function argsSum(args) {
// 	return args.reduce((pre, cur) => {
// 		return pre + cur;
// 	});
// }
// function add(...args1) {
// 	let sum1 = argsSum(args1);
// 	let fn = function (...args2) {
// 		let sum2 = argsSum(args2);
// 		return add(sum1 + sum2);
// 	};
// 	fn.toString = function () {
// 		return sum1;
// 	};
// 	return fn;
// }









// 参数长度不固定

function add (...args) {
    //求和
    return args.reduce((a, b) => a + b)
}
function currying (fn) {
    let args = []
    return function temp (...newArgs){
        if(newArgs.length){
            args = [...args,...newArgs]
            return temp
        }else{
            let val = fn.apply(this, args)
            args = [] //保证再次调用时清空
            return val
        }
    }
}
let addCurry = currying(add)

console.log(addCurry(1)(2)(3)(4, 5)())  //15
console.log(addCurry(1)(2)(3, 4, 5)())  //15
console.log(addCurry(1)(2, 3, 4, 5)())  //15
