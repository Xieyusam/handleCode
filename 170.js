// 二叉树中序
// 有了前序的经验，我们就很好利用递归实现中序遍历。中序遍历的规则是：
// 左子树---> 根结点 ---> 右子树。所以我们访问节点的顺序需要变。

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


const Mtraversal = (root) =>{
    if(!root) return ;
    Mtraversal(root.left)
    console.log(root.val)
    Mtraversal(root.right)    
}

Mtraversal(root)

// 栈实现
console.log('栈实现')


const Mtraversal2 = (root) =>{
    const stack = []
    let p = root
    while(p || stack.length){
        while(p){
            stack.push(p)
            p = p.left
        }
        const node = stack.pop()
        console.log(node.val)
        p = node.right;
    }
}

Mtraversal2(root)