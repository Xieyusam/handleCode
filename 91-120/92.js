// 如何实现数组的随机排序？

let arr = [2,3,454,34,324,32]

console.log(arr.sort(randomSort)) 
function randomSort(a, b) {
  return Math.random() > 0.5 ? -1 : 1;
}