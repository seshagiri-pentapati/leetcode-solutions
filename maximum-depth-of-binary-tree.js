var maxDepth = function (root) {

    let max_depth = 0

    function dfs(node, depth) {
        if (node === null) return

        // node is there
        if (
            (node.left === null) &&
            (node.right === null)
        ) {
            // leaf node
            if (depth > max_depth) {
                max_depth = depth
            }
            return
        }

        // node.val
        dfs(node.left, depth + 1)
        dfs(node.right, depth + 1)
    }

    dfs(root, 1)

    return max_depth
};
