// 数组类型(array)
var Arrayflag1 = [1, 2, 3];
var Arrayflag2 = [1, 2, 3];
// 元组类型(tuple)
var tupleflag = ['hello', 1];
// Symbol
// 我们在使用 Symbol 的时候，必须添加 es6 的编译辅助库 需要在 tsconfig.json 的 libs 字段加上ES2015 Symbol 的值是唯一不变的
var sym1 = Symbol('hello');
var sym2 = Symbol('hello');
console.log(Symbol('hello') === Symbol('hello'));
