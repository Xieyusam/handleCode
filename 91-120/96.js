// 228. 汇总区间

/**
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
    let res = []
    let len = nums.length
    let pevIndex = 0
    for( let i = 0 ; i<len ; i++ ){
        let Diff = nums[i+1] - nums[i]
        if(Diff !== 1){
            if((i - pevIndex) > 0){
                res.push(nums[pevIndex]+'->'+nums[i])
            } else{
                res.push(nums[pevIndex]+'')
            }
            pevIndex = i + 1
        }
    }
    return res
};


console.log(summaryRanges([0,1,2,4,5,7]))
console.log(summaryRanges([0,1,2,3,6,7,8,10,12]))
