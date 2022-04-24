// 111. leecode 697. 数组的度

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
	let map = new Map();
	for (let [i, num] of Object.entries(nums)) {
		if (map.has(num)) {
			let [count, mix, max] = map.get(num);
			map.set(num, [++count, mix, i]);
		} else {
			map.set(num, [1, i, i]);
		}
	}
	let maxCount = 0;
	let minLen = Number.MAX_VALUE;
	for ([key, [count, mix, max]] of map) {
		if (count > maxCount) {
			maxCount = count;
			minLen = max - mix + 1;
		}
		if (count === maxCount) {
			minLen = Math.min(minLen, max - mix + 1);
		}
	}
	return minLen;
};
