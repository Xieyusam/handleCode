class NumberAdapter {
	constructor(value) {
		this.value = value;
	}
	toArray() {
		let length = 10 - this.value.toString().length
		let res = new Array(length).fill(0)
		let res2 = this.value.toString().split('').map(num => parseInt(num))
		return res.concat(res2)
	}
}
// 利用闭包

let obj = new NumberAdapter(11)
console.log(obj.toArray())

// [
// 	0, 0, 0, 0, 0,
// 	0, 0, 0, 1, 1
//   ]
