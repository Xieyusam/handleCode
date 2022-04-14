// JavaScript中如何让(a== 1 && a ==2 && a==3)返回true

// 1.Symbol.toPrimitive递增

// const a = {
// 	i: 1,
// 	[Symbol.toPrimitive]() {
// 		return this.i++;
// 	}
// };
// // 每次进行a == xxx时都会先经过Symbol.toPrimitive函数，自然也就可以实现a依次递增的效果
// console.log(a == 1 && a == 2 && a == 3);

// 2.valueOf vs toString

// let a = {
//     i: 1,
//     // valueOf替换成toString效果是一样的
//     // toString
//     valueOf() {
//       return this.i++
//     }
//   }

// console.log(a == 1 && a == 2 && a == 3);

// 3.Array && join
// 数组对象在进行隐式转换时，同样符合规则3，只是在toString时还会调用join方法。所以也可以从这里下手
// let a = [1, 2, 3]

// a.join = a.shift

// console.log(a == 1 && a == 2 && a == 3);

// 4.Object.defineProperty
// let _a = 1
// Object.defineProperty(window, 'a', {
//   get() {
//     return _a++
//   }
// })

// console.log(a == 1 && a == 2 && a == 3);

// 5.Proxy

let a = new Proxy(
	{ i: 1 },
	{
		get(target) {
			return () => target.i++;
		}
	}
);
console.log(a == 1 && a == 2 && a == 3);
