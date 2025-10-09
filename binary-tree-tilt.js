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
var findTilt = function (root) {
    if (!root) return 0
    let totalTilt = 0;
    function dfs(root) {
        if (!root) return null;
        let left = dfs(root.left)
        let right = dfs(root.right)
        let tilt = Math.abs(left - right);
        totalTilt += tilt;
        return root.val + left + right;
    }
    dfs(root);
    return totalTilt;
};