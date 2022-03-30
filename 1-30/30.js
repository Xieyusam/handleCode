// 使用ES5和ES6求函数参数的和

// ES5：

function sum() {
    let sum = 0
    Array.prototype.forEach.call(arguments,function(item){
        sum += item * 1
    })
    return sum
}

console.log(sum(1,2,3,4,5,6,7,8,9))

// ES6：


function sum2(...nums) {
    let sum = 0
    nums.forEach(function(item) {
        sum += item * 1
    })
    return sum
}