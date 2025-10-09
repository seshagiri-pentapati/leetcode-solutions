var minDepth = function (root) {
    if (root === null) return 0

    let q = [[root, 1]]
    while (q.length > 0) {
        let [node, depth] = q.shift()
        if (node === null) continue

        if (
            (node.left === null) &&
            (node.right === null)
        ) {
            // leaf node
            return depth
        }

        q.push([node.left, depth + 1])
        q.push([node.right, depth + 1])
    }

    ////////////
}

var minDepth2222222222222 = function (root) {

    if (root === null) return 0

    let min_depth = Infinity

    function dfs(node, depth) {
        if (node === null) return

        // node is there
        if (
            (node.left === null) &&
            (node.right === null)
        ) {
            // leaf node
            if (depth < min_depth) {
                min_depth = depth
            }
            return
        }

        // node.val
        dfs(node.left, depth + 1)
        dfs(node.right, depth + 1)
    }

    dfs(root, 1)
    return min_depth
};
