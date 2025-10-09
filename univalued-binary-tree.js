var isUnivalTree = function (root) {
    if (!root) return true
    let rootVal = root.val

    function dfs(node) {
        if (!node) return true
        if (node.val !== rootVal) return false
        return dfs(node.left) && dfs(node.right)
    }

    return dfs(root)
};
