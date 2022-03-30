// 实现类数组转化为数组

// 类数组转换为数组的方法有这样几种：



let arrayLike = {
    0:'0',
    1:'1',
    2:'2',
    3:'3',
    length:4
}
console.log(Array.isArray(arrayLike)) 


// 通过 call 调用数组的 slice 方法来实现转换

// console.log(Array.prototype.slice.call(arrayLike))

// 通过 call 调用数组的 splice 方法来实现转换(有副作用)
// console.log(Array.prototype.splice.call(arrayLike,0))

// 通过 apply 调用数组的 concat 方法来实现转换
// console.log(Array.prototype.concat.apply([], arrayLike))

// 通过 Array.from 方法来实现转换
// console.log(Array.from(arrayLike))