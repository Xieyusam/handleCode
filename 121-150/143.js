/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    let queue = [root]
    let map = new Map()
    while(queue.length){
        let node = queue.pop()
        if(map.has(k - node.val)){
            return true
        }
        if(!map.has(node.val)){
            map.set(node.val,k-node.val)
        }

        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
        
    }
    return false
};