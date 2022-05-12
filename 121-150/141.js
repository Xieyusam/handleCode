/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    let map1 = new Map()
    let map2 = new Map()
    let sArr = s.split(' ')
    if(sArr.length != pattern.length){
        return false
    }
    for( let i = 0 ; i < pattern.length ; i++  ){
        if(!map1.has(sArr[i])){
            map1.set(sArr[i],pattern[i])
        }
        if(!map2.has(pattern[i])){
            map2.set(pattern[i],sArr[i])
        }
        if(map1.get(sArr[i]) !== pattern[i] || map2.get(pattern[i]) !== sArr[i]){
            return false
        }
    }
    return true
};