Array.prototype.myReduce = function (callback, initialValue) {
	if (this == undefined) {
		throw new TypeError('this is null or not defined');
	}
	if (typeof callback !== 'function') {
		throw new TypeError(callbackfn + ' is not a function');
	}
	const o = Object(this);
	let k = 0;
	let len = this.length >>> 0;
	let accumulator = initialValue;
	if (accumulator === undefined) {
		while (k < len && !(k in o)) {
			k++;
		}
		// 如果超出数组界限还没有找到累加器的初始值，则TypeError
		if (k >= len) {
			throw new TypeError('Reduce of empty array with no initial value');
		}
		accumulator = o[k++];
	}
	while (k < len) {
		if (k in o) {
			accumulator = callback.call(undefined, accumulator, o[k], k, o);
		}
		k++;
	}
	return accumulator;
};

// test

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].myReduce((a, b) => {
	return a + b;
}, 0);
let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].myReduce((a, b) => {
	return a + b;
});

console.log(num);
console.log(num2);
