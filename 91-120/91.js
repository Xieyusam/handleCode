// 输入:
let a = [
	{ a: 1, b: 2, c: 3 },
	{ b: 2, c: 3, a: 1 },
	{ d: 2, c: 2 }
];
// 输出:
// [{a:1,b:2,c:3},{d:2,c:2}]
console.log(unique(a));

// 首先写一个函数把对象中的key排序，然后再转成字符串
// 遍历数组利用Set将转为字符串后的对象去重

function objSort(obj) {
	let newObj = {};
	//遍历对象，并将key进行排序
	Object.keys(obj)
		.sort()
		.map(key => {
			newObj[key] = obj[key];
		});
	//将排序好的数组转成字符串
	return JSON.stringify(newObj);
}

function unique(arr) {
	let set = new Set();
	for (let i = 0; i < arr.length; i++) {
		let str = objSort(arr[i]);
		set.add(str);
	}
	//将数组中的字符串转回对象
	arr = [...set].map(item => {
		return JSON.parse(item);
	});
	return arr;
}
