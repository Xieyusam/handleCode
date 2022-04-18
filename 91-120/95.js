/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let map = new Map();
	let len = nums.length;
	for (let i = 0; i < len; i++) {
		let curr = nums[i];
		let need = target - curr;
		if (map.has(need)) {
			return [i, map.get(need)];
		}
		map.set(curr, i);
	}

	return res;
};

console.log(twoSum([2, 7, 11, 15], 9));
