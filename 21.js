// 实现数组的map方法

Array.prototype._map = function (fn) {
	if (typeof fn !== "function") {
        throw Error('参数必须是一个函数');
    }
	let res = [];
	for (let i = 0; i < this.length; i++) {
		res.push(fn(this[i], i, this));
	}
	return res;
};

let test = [1, 2, 3, 45, 6543]._map((item, index, self) => {
	console.log(item, index, self);
	return item * item;
});

console.log(test);
