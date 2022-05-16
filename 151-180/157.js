// 1.递归


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    if(root === null) {//递归终止条件
        return root;
    }
  	//如果root节点大于p并且大于q，说明p和q都在root的左子树
    if(root.val>p.val&&root.val>q.val) {
        let left = lowestCommonAncestor(root.left,p,q);
        return left !== null&&left;
    }
  	//如果root节点小于p并且小于q，说明p和q都在root的右子树
    if(root.val<p.val&&root.val<q.val) {
        let right = lowestCommonAncestor(root.right,p,q);
        return right !== null&&right;
    }
    return root;//如果上述条件都不满足说明root就是公共祖先
};


// 2.迭代

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor2 = function(root, p, q) {
    let node = root
    while(true){
        if(p.val < node.val && q.val < node.val ){
            node = node.left
        } else if(p.val > node.val && q.val > node.val){
            node = node.right
        } else {
            break
        }
    }
    return node
};