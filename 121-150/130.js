// 我的
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let ans = ''
    let i = a.length  - 1
    let j = b.length  - 1
    let k = 0
    while(j >=0 || i >=0){
        let c1 = i >= 0 ? a[i].charCodeAt() - '0'.charCodeAt() : 0
        let c2 = j >= 0 ? b[j].charCodeAt() - '0'.charCodeAt() : 0
        let count = c1 + c2 + k
        let add  = count >= 2 ? count - 2 :  count
        k = count >= 2 ? 1 :  0
        ans = add + ans
        j--
        i--
    }
    if(k > 0){
        ans = k +ans
    }
    return ans
};