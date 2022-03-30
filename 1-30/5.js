// 手写节流函数

function throttle(fn, delay) {
	let past = Date.now();

	return function () {
		let context = this;
		let args = arguments;
		let now = Date.now();

		if (now - past >= delay) {
			past = Date.now;
			fn.apply(context, args);
		}
	};
}
