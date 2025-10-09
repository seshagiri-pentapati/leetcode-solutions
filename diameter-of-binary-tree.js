var diameterOfBinaryTree = function (root) {
    let maxDiameter = 0

    function dfs(node) {
        if (!node) return 0

        let leftDepth = dfs(node.left)
        let rightDepth = dfs(node.right)

        let diameter = leftDepth + rightDepth
        maxDiameter = Math.max(maxDiameter, diameter)

        return 1 + Math.max(leftDepth, rightDepth)
    }

    dfs(root)
    return maxDiameter
};
