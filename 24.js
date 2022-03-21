// 将数字每千分位用逗号隔开

// **数字有小数版本：**

let format = n => {
	let num = n.toString();
	let decimals = '';
	// 判断是否有小数
	num.indexOf('.') > -1 ? (decimals = num.split('.')[1]) : decimals;
	let len = num.length;
	if (len < 3) {
		return num;
	} else {
		let temp = '';
		let remainder = len % 3;
		decimals ? (temp = '.' + decimals) : temp;
		if (remainder > 0) {
			return num.slice(0, remainder) + num.slice(remainder, len).match(/\d{3}/g).join(',') + temp;
		} else {
			return num.slice(0, len).match(/\d{3}/g).join(',') + temp;
		}
	}
};

console.log(format(12323.33)); // '12,323.33'
