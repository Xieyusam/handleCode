// 实现斐波那契数列
// 0 1 1 2 3 5

// 递归
function fn(n) {
	if (n == 0) return 0;
	if (n == 1) return 1;
	return fn(n - 2) + fn(n - 1);
}
console.log(fn(5));

// 优化
function fibonacci2(n) {
	const arr = [1, 1, 2];
	const arrLen = arr.length;

	if (n <= arrLen) {
		return arr[n];
	}

	for (let i = arrLen; i < n; i++) {
		arr.push(arr[i - 1] + arr[i - 2]);
	}

	return arr[arr.length - 1];
}

console.log(fn(5));

// 非递归
function fn2(n) {
	let pre1 = 1;
	let pre2 = 1;

	if (n <= 2) {
		return n;
	}

	for (let i = 3; i <= n; i++) {
		const sum = pre1 + pre2;
		pre1 = pre2;
		pre2 = sum;
	}

	return pre2;
}

console.log(fn2(5));
