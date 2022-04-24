/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    let map = new Map()
    for( let i = 0 ; i<list1.length ; i++){
        map.set(list1[i],i)
    }
    let res = []
    let num = Number.MAX_VALUE
    for( let i = 0 ; i<list2.length ; i++ ){
        if(map.has(list2[i])){
            let sum = i + map.get(list2[i])
            if(sum < num){
                num = sum
                res = []
                res.push(list2[i])
            }else if( sum === num ){
                res.push(list2[i])
            }

        }

    }
    return res
};