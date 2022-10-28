// 函数的定义
// 可以指定参数的类型和返回值的类型

function helloFn(name: string): void {
	console.log('hello', name);
}
helloFn('hahaha');



// 3.2 函数表达式
// 定义函数类型
type SumFunc = (x: number, y: number) => number;

let countNumber: SumFunc = function (a, b) {
  return a + b;
};




// 3.3 可选参数
// 在 TS 中函数的形参和实参必须一样，不一样就要配置可选参数,而且必须是最后一个参数



function print(name: string, age?: number): void {
    console.log(name, age);
  }
  print("hahaha");




//   3.4 默认参数


function ajax(url: string, method: string = "GET") {
    console.log(url, method);
  }
  ajax("/users");


//   3.5 剩余参数

function sum(...numbers: number[]) {
    return numbers.reduce((val, item) => (val += item), 0);
  }
  console.log(sum(1, 2, 3));


//   3.6 函数重载
// 函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。 在 TypeScript 中，表现为给同一个函数提供多个函数类型定义
let obj: any = {};
function attr(val: string): void;
function attr(val: number): void;
function attr(val: any): void {
  if (typeof val === "string") {
    obj.name = val;
  } else {
    obj.age = val;
  }
}
attr("hahaha");
attr(9);
attr(true);
console.log(obj);
