var invertTree2222 = function (root) {
    if (!root) return null

    function dfs(node) {
        if (!node) return null

        let leftCopyRef = node.left
        let rightCopyRef = node.right
        node.right = dfs(leftCopyRef)
        node.left = dfs(rightCopyRef)


        return node
    }

    return dfs(root)
};
//////////////////////////////////////////////////////////
function invertTree(root) {
    if (!root) return null;
    const right = root.right;
    root.right = invertTree(root.left);
    root.left = invertTree(right);
    return root;
}