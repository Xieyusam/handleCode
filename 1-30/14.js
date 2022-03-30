// 交换a,b的值，不能用临时变量

let a = 1
let b = 3

    a = a + b
    b = a - b
    a = a - b
console.log(a,b)
