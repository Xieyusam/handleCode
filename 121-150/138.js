/**
 * 我的
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern = function(s) {
    let len = s.length
    let len2 = Math.floor(s.length / 2)
    for( let i = 1 ; i <= len2 ; i++ ) {
        let str1 = s.slice(0,i)
        let match = true
        if(len % i !== 0){
            continue
        } else {
            for(let j = i ; j < len ; j += i ){
                let str2 = s.slice(j,j+i)
                console.log(str1,str2)
                if(str2 !== str1){
                    match = false
                    break
                }
            }
        }
        if(match){
            return true
        }
    }
    return false
};





/**
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern2 = function(s) {
    let n = s.length
    for (let i = 1; i * 2 <= n; ++i) {
        if (n % i == 0) {
            let match = true;
            for (let j = i; j < n; ++j) {
                if (s[j] != s[j - i]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return true;
            }
        }
    }
    return false;

};