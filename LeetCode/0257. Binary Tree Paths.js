// Easy

// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

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
 * @return {string[]}
 */
function binaryTreePaths(root, path = [], result = []) {
    if (!root) return [];
    
    path.push(root.val);
    // console.log(root.val, " - ", path);
    binaryTreePaths(root.left, path.slice(), result);
    binaryTreePaths(root.right, path.slice(), result);
    
    if (!root.left && !root.right) result.push(path);
    
    return result.map(subArray => subArray.join("->"));
}

// Brute force approach.
// Linear Time Complexity.
// Polynomial Space Complexity, as we are making multiple copies of the array as we traverse the tree.

// Runtime: 120 ms, faster than 5.61% of JavaScript online submissions for Binary Tree Paths.
// Memory Usage: 38.2 MB, less than 5.94% of JavaScript online submissions for Binary Tree Paths.