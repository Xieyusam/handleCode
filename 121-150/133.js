// 我的

/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    let res = 0
    let l = 1
    for(let i = columnTitle.length -1 ; i>= 0 ; i --){
        let value = columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1
        res = value * l + res
        l = l * 26  
    }
    return res
};

// 官方
var titleToNumber = function(columnTitle) {
    let number = 0;
    let multiple = 1;
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        const k = columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1;
        number += k * multiple;
        multiple *= 26;
    }
    return number;
};
