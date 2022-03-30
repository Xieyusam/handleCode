// 手写promise.reject

/**
 * 对resolve()、reject() 进行改造增强 针对resolve()和reject()中不同值情况 进行处理
 * @param  {promise} promise2 promise1.then方法返回的新的promise对象
 * @param  {[type]} x         promise1中onFulfilled或onRejected的返回值
 * @param  {[type]} resolve   promise2的resolve方法
 * @param  {[type]} reject    promise2的reject方法
 */
function resolvePromise(promise2, x, resolve, reject) {
	// 如果从onFulfilled或onRejected中返回的 x 就是promise2，会导致循环引用报错
	if (x === promise2) {
		return reject(new TypeError('Chaining cycle detected for promise'));
	}
	// 2.3.2 如果 x 为 Promise ，则使 promise2 接受 x 的状态
	if (x instanceof myPromise) {
		if (x.PromiseState === myPromise.PENDING) {
			/**
			 * 2.3.2.1 如果 x 处于等待态， promise 需保持为等待态直至 x 被执行或拒绝
			 *         注意"直至 x 被执行或拒绝"这句话，
			 *         这句话的意思是：x 被执行x，如果执行的时候拿到一个y，还要继续解析y
			 */
			x.then(y => {
				resolvePromise(promise2, y, resolve, reject);
			}, reject);
		} else if (x.PromiseState === myPromise.FULFILLED) {
			// 2.3.2.2 如果 x 处于执行态，用相同的值执行 promise
			resolve(x.PromiseResult);
		} else if (x.PromiseState === myPromise.REJECTED) {
			// 2.3.2.3 如果 x 处于拒绝态，用相同的据因拒绝 promise
			reject(x.PromiseResult);
		}
	} else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
		// 2.3.3 如果 x 为对象或函数
		try {
			// 2.3.3.1 把 x.then 赋值给 then
			var then = x.then;
		} catch (e) {
			// 2.3.3.2 如果取 x.then 的值时抛出错误 e ，则以 e 为据因拒绝 promise
			return reject(e);
		}

		/**
		 * 2.3.3.3
		 * 如果 then 是函数，将 x 作为函数的作用域 this 调用之。
		 * 传递两个回调函数作为参数，
		 * 第一个参数叫做 `resolvePromise` ，第二个参数叫做 `rejectPromise`
		 */
		if (typeof then === 'function') {
			// 2.3.3.3.3 如果 resolvePromise 和 rejectPromise 均被调用，或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
			let called = false; // 避免多次调用
			try {
				then.call(
					x,
					// 2.3.3.3.1 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
					y => {
						if (called) return;
						called = true;
						resolvePromise(promise2, y, resolve, reject);
					},
					// 2.3.3.3.2 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
					r => {
						if (called) return;
						called = true;
						reject(r);
					}
				);
			} catch (e) {
				/**
				 * 2.3.3.3.4 如果调用 then 方法抛出了异常 e
				 * 2.3.3.3.4.1 如果 resolvePromise 或 rejectPromise 已经被调用，则忽略之
				 */
				if (called) return;
				called = true;

				/**
				 * 2.3.3.3.4.2 否则以 e 为据因拒绝 promise
				 */
				reject(e);
			}
		} else {
			// 2.3.3.4 如果 then 不是函数，以 x 为参数执行 promise
			resolve(x);
		}
	} else {
		// 2.3.4 如果 x 不为对象或者函数，以 x 为参数执行 promise
		return resolve(x);
	}
}

class myPromise {
	static PENDING = 'pending';
	static FULFILLED = 'fulfilled';
	static REJECTED = 'rejected';

	constructor(func) {
		// 设置初始化状态
		this.PromiseState = myPromise.PENDING;
		// 初始化结果
		this.PromiseResult = null;
		// 保存成功回调
		this.onFulfilledCallbacks = [];
		// 保存失败回调
		this.onRejectedCallbacks = [];
		// 传入的执行函数（注意绑定this指向）
		try {
			func(this.resolve.bind(this), this.reject.bind(this));
		} catch (error) {
			this.reject(error);
		}
	}
	//
	resolve(result) {
		// 切换状态
		setTimeout(() => {
			if (this.PromiseState === myPromise.PENDING) {
				this.PromiseState = myPromise.FULFILLED;
				// 传入的结果赋值
				this.PromiseResult = result;
				this.onFulfilledCallbacks.forEach(callback => {
					callback(result);
				});
			}
		});
	}
	//
	reject(reason) {
		// 切换状态
		if (this.PromiseState === myPromise.PENDING) {
			setTimeout(() => {
				this.PromiseState = myPromise.REJECTED;
				// 传入的结果赋值
				this.PromiseResult = reason;
				this.onRejectedCallbacks.forEach(callback => {
					callback(reason);
				});
			});
		}
	}
	//
	then(onFulfilled, onRejected) {
		// 判断是否是函数，否则设置一个默认函数
		onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
		onRejected =
			typeof onRejected === 'function'
				? onRejected
				: reason => {
						throw reason;
				  };
		const promise2 = new myPromise((resolve, reject) => {
			//不同状态执行不同的函数
			if (this.PromiseState === myPromise.FULFILLED) {
				setTimeout(() => {
					try {
						let x = onFulfilled(this.PromiseResult);
						resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e); // 捕获前面onFulfilled中抛出的异常
					}
				});
			} else if (this.PromiseState === myPromise.REJECTED) {
				setTimeout(() => {
					try {
						let x = onRejected(this.PromiseResult);
						resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e);
					}
				});
			}
			// 定义Pending的时候做的操作
			else if (this.PromiseState === myPromise.PENDING) {
				this.onFulfilledCallbacks.push(() => {
					try {
						let x = onFulfilled(this.PromiseResult);
						resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e);
					}
				});
				this.onRejectedCallbacks.push(() => {
					try {
						let x = onRejected(this.PromiseResult);
						resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e);
					}
				});
			}
		});

		return promise2;
	}
	//
	/**
	 * Promise.resolve()
	 * @param {[type]} value 要解析为 Promise 对象的值
	 */
	static resolve(value) {
		// 如果这个值是一个 promise ，那么将返回这个 promise
		if (value instanceof myPromise) {
			return value;
		} else if (value instanceof Object && 'then' in value) {
			// 如果这个值是thenable（即带有`"then" `方法），返回的promise会“跟随”这个thenable的对象，采用它的最终状态；
			return new myPromise((resolve, reject) => {
				value.then(resolve, reject);
			});
		}
		// 否则返回的promise将以此值完成，即以此值执行`resolve()`方法 (状态为fulfilled)
		return new myPromise(resolve => {
			resolve(value);
		});
	}
	/**
	 * myPromise.reject
	 * @param {*} reason 表示Promise被拒绝的原因
	 * @returns
	 */
	static reject(reason) {
		return new myPromise((resolve, reject) => {
			reject(reason);
		});
	}
}

// 测试代码

myPromise.reject(new Error('fail')).then(function () {
    // not called
}, function (error) {
    console.error(error); // Error: fail
});

