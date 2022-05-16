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
 var diameterOfBinaryTree = function(root) {
    let ans = 1
    function depth(node) {
        if (node == null) {
            return 0;
        }
        let L = depth(node.left)
        let R = depth(node.right)
        ans = Math.max(ans, L+R+1)
        return Math.max(L, R) + 1
    }
    depth(root);
    return ans - 1;
};