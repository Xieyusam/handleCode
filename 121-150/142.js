/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLHS = function(nums) {
    let map = new Map()
    let res = 0

    for( let i = 0 ; i <nums.length ; i++ ) {
        map.set(nums[i],(map.get(nums[i])||0)+1)
    }
    for( let key of map.keys()){
        if(map.has(key+1)){
            res = Math.max(res,map.get(key) + map.get(key+1))
        }
    }
    return res
};