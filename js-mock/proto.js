function Person(name) {
	this.name = name;
}
// 修改原型
Person.prototype.getName = function () {};
var p = new Person('hello');
console.log(p.__proto__ === Person.prototype); // true
console.log(p.__proto__ === p.constructor.prototype); // true
// 重写原型
Person.prototype = {
	getName: function () {}
};
var p = new Person('hello');
console.log(p.__proto__ === Person.prototype); // true
console.log(p.__proto__ === p.constructor.prototype); // false

Person.prototype = {
	getName: function () {}
};
var p = new Person('hello');
p.constructor = Person;
console.log(p.__proto__ === Person.prototype); // true
console.log(p.__proto__ === p.constructor.prototype); // true

console.log(p.__proto__); // Person.prototype
console.log(Person.prototype.__proto__); // Object.prototype
console.log(p.__proto__.__proto__); //Object.prototype
console.log(p.__proto__.constructor.prototype.__proto__); // Object.prototype
console.log(Person.prototype.constructor.prototype.__proto__); // Object.prototype
console.log(p.__proto__.constructor); // Person
console.log(Person.prototype.constructor); // Person
