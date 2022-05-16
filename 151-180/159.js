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
 * @return {number}
 */
 var sumOfLeftLeaves = function(root) {
    let queue = [root]
    let res = 0
    while(queue.length){
        let node = queue.shift()
        if(node.left){
            if(!node.left.left && !node.left.right ){
                res += node.left.val
            }
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
    }
    return res
};