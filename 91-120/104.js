
// 愚蠢写法

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
    let arr = [].concat(flowerbed)
    let sum = n
    for(let i = 0 ; i< arr.length ; i++){
        if( (i === 0 && arr[i] === 0 && arr[i+1] === 0) ||(arr[i] === 0 && arr.length ===1)  ){
            sum-- 
            arr[i] = 1
        }
        if( i === arr.length -1 && arr[i] === 0 && arr[i-1] === 0 ){
            sum-- 
            arr[i] = 1
        }
        if ( arr[i] === 0 && arr[i-1] === 0 &&  arr[i+1] === 0 ){
            sum--
            arr[i] = 1
        }
    }
    return sum <= 0 
};