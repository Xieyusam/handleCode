// 实现数组的filter方法

Array.prototype._filter = function (fn) {
	if (typeof fn !== 'function') {
		throw Error('参数必须是一个函数');
	}
	const res = [];
	for (let i = 0; i < this.length; i++) {
		fn(this[i]) && res.push(this[i]);
	}
	return res;
};

let arr = [1, 2, 3, 4, 5, 1, 2, 5, 6, 4];

console.log(arr._filter(item => item > 3))