var mergeTrees333 = function (root1, root2) {

    function dfs(p, q) {
        if (!p && !q) return null

        return new TreeNode(
            (p?.val ?? 0) + (q?.val ?? 0), // sum
            dfs(p?.left, q?.left),
            dfs(p?.right, q?.right)
        )
    }

    return dfs(root1, root2)
};

var mergeTrees222 = function (root1, root2) {

    function dfs(p, q) {
        if (!p && !q) return null
        if (p && !q) return p
        if (!p && q) return q

        return new TreeNode(
            (p.val) + (q.val), // sum
            dfs(p.left, q.left),
            dfs(p.right, q.right)
        )
    }

    return dfs(root1, root2)
};

///////////////////////////////////////////
const mergeTrees = (root1, root2) => {
    if(!root1 || !root2){
        return root1 || root2;
    }  
    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    return root1;
};
