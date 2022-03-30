// 实现数组的push方法

let arr = [];
Array.prototype.MyPush = function () {
	for (let i = 0; i < arguments.length; i++) {
		this[this.length] = arguments[i];
	}
	return this.length;
};


arr.MyPush(1,23,4,5)

console.log(arr)