// 快排--时间复杂度 nlogn~ n^2 之间

/**
 * 1.选择一个基准值（假设是最后一个）
 * 2.根据大小比较，分成left，和right两个数组
 * 3.递归调用quickSort
 * [...quickSort(left), cur, ...quickSort(right)]
 *
 */

function quickSort(arr) {
	let len = arr.length;
	if (len < 2) {
		return arr;
	}
	const cur = arr[arr.length - 1];
	// const left = arr.filter((v, i) => v <= cur && i !== arr.length - 1);
	// const right = arr.filter(v => v > cur);
	let left = [];
	let right = [];
	for (i = 0; i < len - 1; i++) {
		if (arr[i] > cur) {
			right.push(arr[i]);
		} else {
			left.push(arr[i]);
		}
	}
	return [...quickSort(left), cur, ...quickSort(right)];
}

console.time('排序耗时');
console.log(quickSort([6, 5, 4, 3, 2, 1]));
console.timeEnd('排序耗时');
