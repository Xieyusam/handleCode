// 将虚拟 Dom 转化为真实 Dom

// 题目描述:JSON 格式的虚拟 Dom 怎么转换成真实 Dom
// {
//   tag: 'DIV',
//   attrs:{
//   id:'app'
//   },
//   children: [
//     {
//       tag: 'SPAN',
//       children: [
//         { tag: 'A', children: [] }
//       ]
//     },
//     {
//       tag: 'SPAN',
//       children: [
//         { tag: 'A', children: [] },
//         { tag: 'A', children: [] }
//       ]
//     }
//   ]
// }
// 把上诉虚拟Dom转化成下方真实Dom
// <div id="app">
//   <span>
//     <a></a>
//   </span>
//   <span>
//     <a></a>
//     <a></a>
//   </span>
// </div>

// 真正的渲染函数
function _render(vnode) {
	// 如果是数字类型转化为字符串
	if (typeof vnode === 'number') {
		vnode = String(vnode);
	}
	// 字符串类型直接就是文本节点
	if (typeof vnode === 'string') {
		return document.createTextNode(vnode);
	}
	// 普通节点
	let dom = document.createElement(vnode.tag);
	if (vnode.attrs) {
		Object.keys(vnode.attrs).forEach(key => {
			let value = vnode.attrs[key];
			dom.setAttribute(key, value);
		});
	}
	// 子数组进行递归操作
	vnode.children.forEach(child => dom.appendChild(_render(child)));
	return dom;
}
