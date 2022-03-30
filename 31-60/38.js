// 38. 实现双向数据绑定

let obj = {text:1}
let newObej = {}
// 数据劫持
Object.defineProperty(newObej, 'text', {
  configurable: true,
  enumerable: true,
  get() {
    console.log('获取数据了')
    return obj.text
  },
  set(newVal) {
    console.log('数据更新了,视图更新')
    obj.text = newVal
  }
})


console.log(newObej.text)

newObej.text = 3

console.log(newObej.text)
