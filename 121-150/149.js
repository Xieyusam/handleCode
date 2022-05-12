/**
 * @param {number[]} nums
 * @return {number}
 */
 var repeatedNTimes = function(nums) {
    let n = nums.length / 2

    let map = new Map()
    for(let i = 0 ; i < nums.length ; i++){
        map.set(nums[i],(map.get(nums[i])||0)+1)
    }
    for( let key of map.keys()){
        if(map.get(key)==n){
            return key
        }
    }
};