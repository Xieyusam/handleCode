// 选择排序--时间复杂度 n^2

function selectSort(arr) {
	let len = arr.length;
	let minIndex = 0;
	for (let i = 0; i < len; i++) {
        minIndex = i;
		for (let j = i; j < len; j++) {
			if (arr[minIndex] > arr[j]) {
				minIndex = j;
			}
		}
		if (minIndex !== i) {
			[arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
		}
	}
    return arr
}
console.log(selectSort([3, 6, 2, 4, 1]));
