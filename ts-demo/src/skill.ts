// 7 实用技巧

// 7.1 typeof 关键词
// typeof 关键词除了做类型保护 还可以从实现推出类型，

//先定义变量，再定义类型
let p1 = {
	name: 'hello',
	age: 10,
	gender: 'male'
};
type People = typeof p1;
function getName(p: People): string {
	return p.name;
}
getName(p1);


// 7.2 keyof 关键词
// keyof 可以用来取得一个对象接口的所有 key 值

interface Person {
    name: string;
    age: number;
    gender: "male" | "female";
  }
  //type PersonKey = 'name'|'age'|'gender';
  type PersonKey = keyof Person;
  
  function getValueByKey(p: Person, key: PersonKey) {
    return p[key];
  }
  let val = getValueByKey({ name: "hello", age: 10, gender: "male" }, "name");
  console.log(val);


//   7.3 索引访问操作符
// 使用 [] 操作符可以进行索引访问
interface Person {
    name: string;
    age: number;
  }
  
  type x = Person["name"]; // x is string


//   7.4 映射类型 in
// 在定义的时候用 in 操作符去批量定义类型中的属性


interface Person {
    name: string;
    age: number;
    gender: "male" | "female";
  }
  //批量把一个接口中的属性都变成可选的
  type PartPerson = {
    [Key in keyof Person]?: Person[Key];
  };
  
  let p1: PartPerson = {};


//   7.5 infer 关键字
// 在条件类型语句中，可以用 infer 声明一个类型变量并且对它进行使用。

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// 以上代码中 infer R 就是声明一个变量来承载传入函数签名的返回值类型，简单说就是用它取到函数返回值的类型方便之后使用。


// 7.6 内置工具类型
// Exclude<T,U> 从 T 可分配给的类型中排除 U

type Exclude<T, U> = T extends U ? never : T;

type E = Exclude<string | number, string>;
let e: E = 10;


// Extract<T,U> 从 T 可分配给的类型中提取 U

type Extract<T, U> = T extends U ? T : never;

type E = Extract<string | number, string>;
let e: E = "1";


// NonNullable 从 T 中排除 null 和 undefined

type NonNullable<T> = T extends null | undefined ? never : T;

type E = NonNullable<string | number | null | undefined>;
let e: E = null;


// ReturnType infer 最早出现在此 PR 中，表示在 extends 条件语句中待推断的类型变量

type ReturnType<T extends (...args: any[]) => any> = T extends (
    ...args: any[]
  ) => infer R
    ? R
    : any;
  function getUserInfo() {
    return { name: "hello", age: 10 };
  }
  
  // 通过 ReturnType 将 getUserInfo 的返回值类型赋给了 UserInfo
  type UserInfo = ReturnType<typeof getUserInfo>;
  
  const userA: UserInfo = {
    name: "hello",
    age: 10,
  };
  
//   可见 该工具类型主要是获取函数类型的返回类型


// Parameters 该工具类型主要是获取函数类型的参数类型

type Parameters<T> = T extends (...args: infer R) => any ? R : any;

type T0 = Parameters<() => string>; // []
type T1 = Parameters<(s: string) => void>; // [string]
type T2 = Parameters<<T>(arg: T) => T>; // [unknown]


// Partial Partial 可以将传入的属性由非可选变为可选

type Partial<T> = { [P in keyof T]?: T[P] };
interface A {
  a1: string;
  a2: number;
  a3: boolean;
}
type aPartial = Partial<A>;
const a: aPartial = {}; // 不会报错

// Required Required 可以将传入的属性中的可选项变为必选项，这里用了 -? 修饰符来实现。

interface Person {
    name: string;
    age: number;
    gender?: "male" | "female";
  }
  /**
   * type Required<T> = { [P in keyof T]-?: T[P] };
   */
  let p: Required<Person> = {
    name: "hello",
    age: 10,
    gender: "male",
  };


//   Readonly Readonly 通过为传入的属性每一项都加上 readonly 修饰符来实现。

interface Person {
    name: string;
    age: number;
    gender?: "male" | "female";
  }
  //type Readonly<T> = { readonly [P in keyof T]: T[P] };
  let p: Readonly<Person> = {
    name: "hello",
    age: 10,
    gender: "male",
  };
  p.age = 11; //error


//   Pick<T,K> Pick 能够帮助我们从传入的属性中摘取某些返回

interface Todo {
    title: string;
    description: string;
    done: boolean;
  }
  /**
   * From T pick a set of properties K
   * type Pick<T, K extends keyof T> = { [P in K]: T[P] };
   */
  type TodoBase = Pick<Todo, "title" | "done">;
  
  // =
  type TodoBase = {
    title: string;
    done: boolean;
  };


//   Record<K,T>
// 构造一个类型，该类型具有一组属性 K，每个属性的类型为 T。可用于将一个类型的属性映射为另一个类型。Record 后面的泛型就是对象键和值的类型。

// 简单理解：K 对应对应的 key，T 对应对象的 value，返回的就是一个声明好的对象
// 但是 K 对应的泛型约束是keyof any 也就意味着只能传入 string|number|symbol


// type Record<K extends keyof any, T> = {
// [P in K]: T;
// };
type Point = "x" | "y";
type PointList = Record<Point, { value: number }>;
const cars: PointList = {
  x: { value: 10 },
  y: { value: 20 },
};


// Omit<K,T> 基于已经声明的类型进行属性剔除获得新类型

// type Omit=Pick<T,Exclude<keyof T,K>>
type User = {
    id: string;
    name: string;
    email: string;
    };
    type UserWithoutEmail = Omit<User, "email">;// UserWithoutEmail ={id: string;name: string;}
    };
    




 
