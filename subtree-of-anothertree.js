function isSameTree(p, q) {
    if (!p && !q) return true;
    if (p && !q) return false;
    if (!p && q) return false;
    if (p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

var isSubtree = function (root, subRoot) {
    let subRoots_inRoot = []

    function dfs(node) {
        if (!node) return
        if (node.val === subRoot.val) {
            subRoots_inRoot.push(node)
        }
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)

    for (let node of subRoots_inRoot) {
        if (isSameTree(node, subRoot)) {
            return true
        }
    }
    return false
};
