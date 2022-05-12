/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
    let sArr = (s1 +' '+ s2).split(' ')
    let map = new Map()
    for(let i = 0 ; i < sArr.length ; i++){
        map.set(sArr[i],(map.get(sArr[i])||0) + 1)
    }
    let res = []
    for( let key of map.keys() ){
        if(map.get(key) === 1){
            res.push(key)
        }
    }
    return res

};