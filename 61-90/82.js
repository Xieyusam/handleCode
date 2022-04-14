// class 实现继承

class Animal {
    constructor(name) {
        this.name = name
    } 
    getName() {
        return this.name
    }
}
class Dog extends Animal {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}


let dog1 = new Dog('dog', 1);
console.log(dog1.getName());

console.log(Dog.prototype.__proto__ === Animal.prototype)  // true
console.log(Dog.prototype)

console.log(Function.prototype.__proto__ === Object.prototype)



