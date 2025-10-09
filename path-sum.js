var hasPathSum222 = function (root, targetSum) {
    if (root === null) return false

    let found = false

    function dfs(node, sum) {
        if (node === null) return
        if (found === true) return

        sum += node.val

        if (
            (node.left === null) &&
            (node.right === null)
        ) {
            // leaf node
            if (sum === targetSum) {
                found = true
            }
            return
        }

        dfs(node.left, sum)
        dfs(node.right, sum)
    }

    dfs(root, 0)

    return found
};

///////////////////////////////////////////////
var hasPathSum = function (root, targetSum) {
    return dfs(root, targetSum);
};

const dfs = (root, target) => {
    if (!root) {
        return false;
    }
    if (!root.left && !root.right) {
        return target - root.val === 0;
    }
    return dfs(root.left, target - root.val) ||
        dfs(root.right, target - root.val);
}
