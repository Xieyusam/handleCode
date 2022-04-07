// 归并排序--时间复杂度 nlog(n)

/**
 * 1. 根据中间下标将数组分成两个数组队列
 * 2. 递归排序这两个数组
 * 3. 根据队头大小比较，输出
 *
 */

function mergeSort(arr) {
	let len = arr.length;
	if (len === 1) {
		return arr;
	}
	//中间值
	let res = [];
	let mid = Math.floor(len / 2);
	let left = arr.slice(0, mid);
	let right = arr.slice(mid, len);
	let orderLeft = mergeSort(left);
	let orderRight = mergeSort(right);
	while (orderLeft.length || orderRight.length) {
		if (orderLeft.length && orderRight.length) {
			res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift());
		} else if (orderLeft.length) {
			res.push(orderLeft.shift());
		} else if (orderRight.length)  {
			res.push(orderRight.shift());
		}
	}
	return res
}

console.time('排序耗时');
console.log(mergeSort([6, 5, 4, 3, 2, 1]));
console.timeEnd('排序耗时');
