// TS 类型
// 普通类型
var flag1 = true;
var flag2 = 1;
var flag3 = 'hello';
// Enum 类型
// 使用枚举我们可以很好的描述一些特定的业务场景，比如一年中的春、夏、秋、冬，还有每周的周一到周天，还有各种颜色，以及可以用它来描述一些状态信息，比如错误码等
// 普通枚举 初始值默认为 0 其余的成员会会按顺序自动增长 可以理解为数组下标
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["PINK"] = 1] = "PINK";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var pink = Color.PINK;
console.log(pink); // 1
// 设置初始值
var Color2;
(function (Color2) {
    Color2[Color2["RED"] = 10] = "RED";
    Color2[Color2["PINK"] = 11] = "PINK";
    Color2[Color2["BLUE"] = 12] = "BLUE";
})(Color2 || (Color2 = {}));
var pink2 = Color2.PINK;
console.log(pink2); // 11
// 字符串枚举 每个都需要声明
var Color3;
(function (Color3) {
    Color3["RED"] = "\u7EA2\u8272";
    Color3["PINK"] = "\u7C89\u8272";
    Color3["BLUE"] = "\u84DD\u8272";
})(Color3 || (Color3 = {}));
var pink3 = Color3.PINK;
console.log(pink3); // 粉色
var colorEnum = [0 /* RED */, 1 /* PINK */, 2 /* BLUE */];
//编译之后的js如下：
//   var color = [0 /* RED */, 1 /* PINK */, 2 /* BLUE */];
// 可以看到我们的枚举并没有被编译成js代码 只是把color这个数组变量编译出来了
