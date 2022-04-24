// 674. 最长连续递增序列

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
    let res = 1
    let cur = 1
    for(let i = 1 ; i < nums.length ; i++){
        if(nums[i-1] < nums[i]){
            cur++
            res = Math.max(res,cur)
        }else {
            cur = 1
        }
    }
    return res
};