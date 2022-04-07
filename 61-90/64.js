// 二分查找--时间复杂度 log2(n)

function search(arr, target, start, end) {
	let targetIndex = -1;
	let mid = Math.floor((end + start) / 2);
	if (arr[mid] === target) {
		return mid;
	}
	if (start >= end) {
		return targetIndex;
	}
	if (arr[mid] > target) {
		targetIndex = search(arr, target, start, mid - 1);
	} else {
		targetIndex = search(arr, target, mid + 1, end);
	}
	return targetIndex;
}

//   test
const dataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const position = search(dataArr, 6, 0, dataArr.length - 1);
if (position !== -1) {
	console.log(`目标元素在数组中的位置:${position}`);
} else {
	console.log('目标元素不在数组中');
}
