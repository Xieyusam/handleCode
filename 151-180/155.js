/**
 * @param {number[]} arr
 * @return {number}
 */
 var findLucky = function(arr) {
    let map = new Map()
    for(let ch of arr){
        map.set(ch,(map.get(ch)||0)+1)
    }
    let max = -1
    for( let [key,value] of map.entries() ){
        if(key == value){
            max = Math.max(max,value)
        }
    }
    return max
};