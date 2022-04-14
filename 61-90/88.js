// 判断是否是电话号码

function isPhone(tel) {
	let reg = /^1[34578]\d{9}$/;
	return reg.test(tel);
}

let test = '13143101301'

console.log(isPhone(test))