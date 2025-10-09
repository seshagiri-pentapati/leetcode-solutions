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
 * @return {boolean}
 */
var isBalanced = function(root) {
    function Height(node) {
        if (node === null) return 0;
        return Math.max( Height(node.left), Height(node.right) ) + 1;
    }
    
    if (root === null) return true;
    return isBalanced(root.left) && isBalanced(root.right) && 
        Math.abs( Height(root.left) - Height(root.right) ) < 2;
};