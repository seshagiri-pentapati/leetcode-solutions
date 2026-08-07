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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    BST = (node, val) => {
        if (node === null) return null;
        if (node.val === val) {
            if (node.right === null && node.left === null) {
                return null;
            } else if (node.right === null && node.left != null) {
                return node.left;
            } else if (node.right != null && node.left === null) {
                return node.right;
            } else {
                let successor = node.right;
                while (successor.left !== null) {
                    successor = successor.left;
                }
                node.val = successor.val
                node.right = BST(node.right, successor.val);
            }
        }
        if (node.val > val) {
            node.left =  BST(node.left, val);
        }
        else {
            node.right = BST(node.right, val);
        }
        return node;
    }
    root = BST(root, key);
    return root;
};