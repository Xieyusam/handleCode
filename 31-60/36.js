// 实现prototype继承
// 所谓的原型链继承就是让新实例的原型等于父类的实例：


function Father(flag){
    this.flag1 = flag
}

function Child(flag){
    this.flag2 = flag
}

Child.prototype = new Father(true)

let childInstance = new Child(false)

console.log(childInstance.flag1);   // true
console.log(childInstance.flag2);   // false