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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    let res = []
    dfsTree(root,[],res)
    return res
};

var dfsTree = function(root,arr,res){
    if(root.left){
        dfsTree(root.left,[...arr,root.val],res)
    }
    if(root.right){
        dfsTree(root.right,[...arr,root.val],res)
    }
    if(!root.left && !root.right) {
        res.push([...arr,root.val].join('->'))
    }
}