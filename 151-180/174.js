/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    // 最差解
    return nums.map(item => item * item).sort((a, b) => a - b)
};