/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    let map = new Map()
    let res = 0
    for(let i = 0 ; i < s.length ; i++){
        let ch = s[i]
        if(map.get(ch) > 0){
            res += 2
            map.set(ch,map.get(ch)-1)
        } else {
            map.set(ch,1)
        }
    }
    return res === s.length ? res : res + 1
};