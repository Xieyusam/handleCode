// _全排列
// 本题考点：回溯、递归

// 根据题目要求，返回字符串参数的所有可能的排列组合，核心步骤有：

// 创建返回的结果数组
// 通过字符串参数创建等长的"被使用"数组用于递归过程中记录字符顺序
// 创建回溯函数，通过该函数内部递归调用
// 在回溯函数中，当临时数组的长度等于字符串参数长度时可以返回本次循环结果
// 进入字符串参数长度的循环体中，将该次字符保存在临时数组中
// 将该次字符的"被使用"数组位修改为true，表示该字符在本次之前的递归过程中已被记录使用，跳过即可
// 递归调用回溯函数
// 退栈时设置该字符"被使用"数组为false，删除临时数组最后一位
// 返回结果

const _permute = string => {
	const res = [];
	const backtrace = path => {
		if (path.length === string.length) {
			res.push(path);
		}
		for (const item of string) {
			if (path.includes(item)) continue;
			backtrace(path + item);
		}
	};
	backtrace('');
	return res;
};

console.log(_permute('abc'));
