// 二叉树层序遍历
// 队列实现

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

const sequence = (root) =>{
    if(!root) {
        return []
    }
    let queue = [root]
    let res = []
    while(queue.length){
        let node = queue.shift()
        res.push(node.val)
        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
    }
    return res
}

console.log(sequence(root))
