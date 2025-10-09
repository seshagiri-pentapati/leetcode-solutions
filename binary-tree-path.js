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
var binaryTreePaths = function (root) {
    if (!root) return [];
    const result = [];

    function dfs(node, path) {

        if (!node)
            return;

        if (!node.left && !node.right) {
            result.push(`${path}${node.val}`);
            console.log('level-result', result);
            return;
        }

        dfs(node.left, `${path}${node.val}->`);
        console.log('level-left', `${path}${node.val}->`);
        dfs(node.right, `${path}${node.val}->`);
        console.log('level-right', `${path}${node.val}->`);

    }

    dfs(root, "");

    return result;
};