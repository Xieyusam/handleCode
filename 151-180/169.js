// 二叉树前序遍历
// 前序的规则就是根结点 ---> 左子树 ---> 右子树.我们在调用递归前进行节点操作。
// 对于前序，就是先访问(输出)该节点。而递归左，递归右侧，会优先递归左侧。直到没有左节点。才会停止。


// 递归实现

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

const Ptraversal = (root) =>{
    if(!root) return ;
    console.log(root.val)
    Ptraversal(root.left)
    Ptraversal(root.right)    
}

Ptraversal(root)

// 栈实现
console.log('栈实现')

const Ptraversal2 = (root) =>{
    if(!root) return ;
    let stack = [root]
    while(stack.length){
        let node = stack.pop()
        console.log(node.val)
        if(node.right){
            stack.push(node.right)
        }
        if(node.left){
            stack.push(node.left)
        }
    }
}

Ptraversal2(root)
