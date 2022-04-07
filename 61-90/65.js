// 实现一个LazyMan，可以按照以下方式调用:

class _LazyMan {
	constructor(name) {
		this.task = [];
		const newTask = () => {
			console.log(` Hi! This is ${name}!`);
			this.next();
		};
		this.task.push(newTask);
		setTimeout(() => {
			this.next();
		}, 0);
	}
	next() {
		let task = this.task.shift();
		task && task();
	}
	sleep(timeout) {
		this._sleepWrapper(timeout, false);
		return this; // 链式调用
	}
	sleepFirst(timeout) {
		this._sleepWrapper(timeout, true);
		return this;
	}
	_sleepWrapper(timeout, first) {
		const newTask = () => {
			setTimeout(() => {
				console.log(` Wake up after ${timeout}`);
				this.next();
			}, timeout*1000);
		};
		if (first) {
			this.task.unshift(newTask);
		} else {
			this.task.push(newTask);
		}
	}
	eat(value) {
		const newTask = () => {
			console.log(` Eat ${value}~`);
			this.next();
		};
		this.task.push(newTask);
		return this;
	}
}

function LazyMan(name) {
	return new _LazyMan(name);
}

LazyMan('Hank');
// 输出:

// Hi! This is Hank!

LazyMan('Hank').sleep(10).eat('dinner');
// 输出:

// Hi! This is Hank!
//等待10秒..
// Wake up after 10
// Eat dinner~

LazyMan('Hank').eat('dinner').eat('supper');

// 输出:

// Hi This is Hank!
// Eat dinner~
// Eat supper~

LazyMan('Hank').eat('supper').sleepFirst(5);

// 输出:

//等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
