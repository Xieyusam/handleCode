// 实现模板字符串解析功能

function render(template, data) {
	let computed = template.replace(/\{\{(\w+)\}\}/g, function (match, key) {
		return data[key];
	});
	return computed;
}

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
	name: '姓名',
	age: 18
};
render(template, data); // 我是姓名，年龄18，性别undefined
console.log(render(template, data));

// replace知识点
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// \w
// 匹配字母、数字、下划线。等价于'[A-Za-z0-9_]'。
