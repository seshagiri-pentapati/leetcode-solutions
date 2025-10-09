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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let bfsArray = [root];
    let averageArray = [];
    while (bfsArray.length > 0) {
        let sum = 0;
        let rootLength = bfsArray.length;
        for (let i = 0; i < rootLength; i++) {
            const currentNode = bfsArray.shift();
            sum += currentNode.val;
            if (currentNode.left) {
                bfsArray.push(currentNode.left)
            }
            if (currentNode.right) {
                bfsArray.push(currentNode.right)
            }
           
        }
         averageArray.push(sum / rootLength)
    }
    return averageArray;
};