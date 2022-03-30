// 主要的实现思路就是：

// 方法一

// - 取出数组的第一个元素，随机产生一个索引值，将该第一个元素和这个索引对应的元素进行交换。
// - 第二次取出数据数组第二个元素，随机产生一个除了索引为1的之外的索引值，并将第二个元素与该索引值对应的元素进行交换
// - 按照上面的规律执行，直到遍历完成

let test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < test.length ; i++) {
// 	const randomIndex = Math.round(Math.random() * (test.length - 1 - i)) + i;
// 	[test[i], test[randomIndex]] = [test[randomIndex], test[i]];
// }

// 方法一
// 倒序

let randomIndex = 0;
let length = test.length;
let temp;

// while (length) {
// 	randomIndex = Math.round(Math.random() * length--);
// 	temp = test[length];
// 	test[length] = test[randomIndex];
// 	test[randomIndex] = temp;
// }

console.log(test);
