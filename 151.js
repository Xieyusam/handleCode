/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
    let map  = new Map()
    for(let i =0 ; i < arr1.length ; i++){
        map.set(arr1[i],(map.get(arr1[i])||0)+1)
    }
    let res1 = []
    for(let i =0 ; i < arr2.length ; i++){
        res1 = res1.concat(Array(map.get(arr2[i])).fill(arr2[i]))
        map.delete(arr2[i])
    }
    let res2 = []
    for( let key of map.keys()){
        res2 = res2.concat(Array(map.get(key)).fill(key))
    }
    return res1.concat(res2.sort((a,b)=>a-b))
};