// Medium

// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where each path's sum equals targetSum.

// A leaf is a node with no children.

 

// Example 1:
// https://assets.leetcode.com/uploads/2021/01/18/pathsumii1.jpg

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: [[5,4,11,2],[5,8,4,5]]
// Example 2:
// https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg

// Input: root = [1,2,3], targetSum = 5
// Output: []
// Example 3:

// Input: root = [1,2], targetSum = 0
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

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
 * @param {number} targetSum
 * @return {number[][]}
 */

/*
I think the code speaks for itself, but a quick description:
There are two points to this algorithm: Keep track of the path AND if we find a leaf that sums to target, record such path.

This is basically a "improved" version of 0112 Path Sum.
The only difference is that we are keeping track of the path and passing a reference to the results array.
Because we want to NOT have a reference to the path, we are working with a copy. So that incur on some ineficiency.

Polynomial Time Complexity O(N^2) - worse case scenario, we will copy the whole tree (like a linked list) before even returning a result.
Linear Space Complexity
*/
 function pathSum(root, targetSum) {
    if (!root) return [];
    const result = [];
    
    pathToLeafSum(root, targetSum, result);
    
    return result;
};

function pathToLeafSum(root, targetSum, result, path = []) {
    if (!root) return;
    targetSum -= root.val;
    path.push(root.val);
    
    if (!root.left && !root.right && targetSum === 0) {
        result.push(path);
        return;
    }
    
    pathToLeafSum(root.left, targetSum, result, path.slice(0));
    pathToLeafSum(root.right, targetSum, result, path.slice(0));
}
// Runtime: 92 ms, faster than 86.71% of JavaScript online submissions for Path Sum II.
// Memory Usage: 49 MB, less than 48.25% of JavaScript online submissions for Path Sum II.