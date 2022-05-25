// 二叉搜索树有个性质为二叉搜索树中序遍历得到的值序列是递增有序的，
// 因此我们只要得到中序遍历后的值序列即能用上文提及的方法来解决。

var minDiffInBST = function(root) {
    let ans = Number.MAX_SAFE_INTEGER, pre = -1;
    const dfs = (root) => {
        if (root === null) {
            return;
        }
        dfs(root.left);
        if (pre == -1) {
            pre = root.val;
        } else {
            ans = Math.min(ans, root.val - pre);
            pre = root.val;
        }
        dfs(root.right);
    }
    dfs(root);
    return ans;
};
