// ### 6. 实现数组去重

// 给定某无序数组，要求去除数组中的重复数字并且返回新的无重复数组。



// ES6方法（使用数据结构集合）：

const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

function uniqueArray(arr){
    return  Array.from(new Set(arr))
}

console.log(uniqueArray(array))


function uniqueArray2(arr){
    let map = {}
    let result = []
    for( let i = 0 ; i<arr.length ; i++ ){
        if(!map.hasOwnProperty(arr[i])){
            map[arr[i]] = 1
            result.push(arr[i])
        }
    }
    return result
}

console.log(uniqueArray2(array))
