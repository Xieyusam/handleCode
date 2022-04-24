/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let res = 0
    let cur = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1){
            cur++
        } else {
            res = Math.max(res,cur)
            cur = 0
        }
    }
    res = Math.max(res,cur)
    return res
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))