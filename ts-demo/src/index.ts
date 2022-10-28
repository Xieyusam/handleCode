// TS 类型
// 普通类型
const flag1: boolean = true;
const flag2: number = 1;
const flag3: string = 'hello';

// Enum 类型
// 使用枚举我们可以很好的描述一些特定的业务场景，比如一年中的春、夏、秋、冬，还有每周的周一到周天，还有各种颜色，以及可以用它来描述一些状态信息，比如错误码等
// 普通枚举 初始值默认为 0 其余的成员会会按顺序自动增长 可以理解为数组下标
enum Color {
	RED,
	PINK,
	BLUE
}
const pink: Color = Color.PINK;
console.log(pink); // 1

// 设置初始值
enum Color2 {
    RED = 10,
    PINK,
    BLUE,
  }
  const pink2: Color2 = Color2.PINK;
  console.log(pink2); // 11


  // 字符串枚举 每个都需要声明
enum Color3 {
    RED = "红色",
    PINK = "粉色",
    BLUE = "蓝色",
  }
  
  const pink3: Color3 = Color3.PINK;
  console.log(pink3); // 粉色


  // 常量枚举 它是使用 const 关键字修饰的枚举，常量枚举与普通枚举的区别是，整个枚举会在编译阶段被删除 我们可以看下编译之后的效果

const enum Color4{
    RED,
    PINK,
    BLUE,
  }
  
  const colorEnum: Color4[] = [Color4.RED, Color4.PINK, Color4.BLUE];
  
  //编译之后的js如下：
//   var color = [0 /* RED */, 1 /* PINK */, 2 /* BLUE */];
  // 可以看到我们的枚举并没有被编译成js代码 只是把color这个数组变量编译出来了

 