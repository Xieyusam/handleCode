// 将js对象转化为树形结构

// 转换前：
let source = [
	{
		id: 1,
		pid: 0,
		name: 'body'
	},
	{
		id: 2,
		pid: 1,
		name: 'title'
	},
	{
		id: 3,
		pid: 2,
		name: 'div'
	}
];
// 转换为:
let tree = [
	{
		id: 1,
		pid: 0,
		name: 'body',
		children: [
			{
				id: 2,
				pid: 1,
				name: 'title',
				children: [
					{
						id: 3,
						pid: 2,
						name: 'div'
					}
				]
			}
		]
	}
];

function jsonToTree(data) {
	let resTree = [];
	if (!Array.isArray(data)) {
		return resTree;
	}

	let map = {};
	data.forEach(item => {
		map[item.id] = item;
	});

	data.forEach(item => {
		let parent = map[item.pid];
		if (parent) {
			(parent.children || (parent.children = [])).push(item);
		} else {
			resTree.push(item);
		}
	});

	return resTree;
}

console.log(JSON.stringify(jsonToTree(source)));

// let aaa = [{ id: 1, pid: 0, name: 'body', children: [{ id: 2, pid: 1, name: 'title', children: [{ id: 3, pid: 2, name: 'div' }] }] }];
