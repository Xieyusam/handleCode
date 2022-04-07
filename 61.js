// 插入排序
const insertionSort = array => {
	const len = array.length;
	if (len <= 1) {
		return;
	}
	let preIndex, current;
	for (let i = 1; i < len; i++) {
		preIndex = i - 1;
		current = array[i];
		while (preIndex >= 0 && array[preIndex] > current) {
			array[preIndex + 1] = array[preIndex];
			preIndex--;
		}
		if (preIndex + 1 != i) {
			array[preIndex + 1] = current;
		}
	}
	return array;
};

// 测试
const array = [5, 4, 3, 2, 1];

console.log(insertionSort(array));
