// 二叉树后序
// 后续就是左子树 ---> 右子树 ---> 根结点

let root = {
	val: 1,
	left: {
		val: 2,
		left: {
			val: 8,
			left: {
				val: 7,
				left: null,
				right: null
			},
			right: null
		},
		right: {
			val: 5,
			left: null,
			right: null
		}
	},
	right: {
		val: 3,
		left: {
			val: 4,
			left: null,
			right: null
		},
		right: {
			val: 6,
			left: null,
			right: null
		}
	}
};

const Posttraversal = root => {
	if (!root) return;
	Posttraversal(root.left);
	Posttraversal(root.right);
	console.log(root.val);
};

Posttraversal(root);

// 双栈
console.log('双栈');
const Posttraversal2 = root => {
	const result = [];
	const stack = [];

	while (stack.length || root) {
		while (root) {
			// postorder
			result.unshift(root.val);
			stack.push(root);
			root = root.right;
		}

		root = stack.pop();
		// inorder
		// result.unshift(root.val);
		root = root.left;
	}

	return result;
};

console.log(Posttraversal2(root));
