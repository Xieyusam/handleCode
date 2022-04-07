// 冒泡排序--时间复杂度 n^2
// （未优化）
function bubbleSort(arr) {
	// 缓存数组长度
	let len = arr.length;
	// 外层循环用于控制从头到尾的比较+交换到底有多少轮
	for (let i = 0; i < len - 1; i++) {
		// 内层循环用于完成每一轮遍历过程中的重复比较+交换
		for (let j = 0; j < len - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}

	return arr;
}
console.time('改进前冒泡排序耗时');
console.log(bubbleSort([6, 5, 4, 3, 2, 1]));
console.timeEnd('改进前冒泡排序耗时');

// （优化后）

function bubbleSort2(arr) {
	// 缓存数组长度
	let len = arr.length;
	// 外层循环用于控制从头到尾的比较+交换到底有多少轮
	for (let i = 0; i < len - 1; i++) {
		let hasChange = false; // 提前退出冒泡循环的标志位
		// 内层循环用于完成每一轮遍历过程中的重复比较+交换
		for (let j = 0; j < len - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				hasChange = true; // 表示有数据交换
			}
		}
		if (!hasChange) break; // 如果 false 说明所有元素已经到位，没有数据交换，提前退出
	}

	return arr;
}
console.time('改进后冒泡排序耗时');
console.log(bubbleSort2([6, 5, 4, 3, 2, 1]));
console.timeEnd('改进后冒泡排序耗时');
