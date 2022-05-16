/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function(root) {
    let res = 1
    if(!root){
        return 0
    }
    if(!root.children){
        return res
    }else{
        for(let i = 0 ; i < root.children.length;i++){
            res = Math.max(res,maxDepth(root.children[i])+1)
        }
    }   
    return res
};