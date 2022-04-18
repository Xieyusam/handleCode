/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
	const n = nums.length;
	this.sums = new Array(n + 1).fill(0);
	for (let i = 0; i < n; i++) {
		this.sums[i + 1] = this.sums[i] + nums[i];
	}
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
	return this.sums[right + 1] - this.sums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

 let numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
 numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
 numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1)) 
 numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))

