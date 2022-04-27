/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(!needle || !haystack) return 0

    let n = haystack.length
    let m = needle.length
    for( i = 0 ; i + m <= n  ; i++ ){
        let str = haystack.slice(i,i+m)
        if(str === needle){
            return i
        }
    }
    return -1
};