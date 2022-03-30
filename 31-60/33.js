// 实现每隔一秒打印 1,2,3,4

// 使用闭包实现
// for (var i = 0; i < 5; i++) {
// 	(function (i) {
// 		setTimeout(() => {
// 			console.log(i);
// 		}, i * 1000);
// 	})(i);
// }
// 使用 let 块级作用域
for (let i = 0; i < 5; i++) {
	setTimeout(() => {
		console.log(i);
	}, i * 1000);
}
