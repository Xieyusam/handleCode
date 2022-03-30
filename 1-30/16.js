// 16. 实现数组元素求和
// arr=[1,2,3,4,5,6,7,8,9,10]，求和

// let arr=[1,2,3,4,5,6,7,8,9,10]

// let sum = arr.reduce((total,i)=>{
//     return total + i
// },0)

// console.log(sum)

// arr = [1, 2, 3, [[4, 5], 6], 7, 8, 9];

// let sum = arr
// 	.toString()
// 	.split(',')
// 	.reduce((total, i) => {
// 		return total + Number(i);
// 	}, 0);

// console.log(sum);

// 递归实现：

let arr = [1, 2, 3, 4, 5, 6] 

function add(arr) {
   if(arr.length === 1) return arr[0];
   return arr[0] + add(arr.slice(1))
}
console.log(add(arr)) // 21
