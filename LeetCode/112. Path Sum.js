// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

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
 * @param {number} sum
 * @return {boolean}
 */
function hasPathSum(root, targetSum, currentSum = 0) {
    if (!root) return false;    
    currentSum += root.val;
    
    if (!root.left && !root.right && currentSum === targetSum) return true;
    
    if (root.left && hasPathSum(root.left, targetSum, currentSum)) return true;
    if (root.right && hasPathSum(root.right, targetSum, currentSum)) return true;
    
    return false;
};

// Runtime: 80 ms, faster than 27.49% of JavaScript online submissions for Path Sum.
// Memory Usage: 38.3 MB, less than 11.11% of JavaScript online submissions for Path Sum.