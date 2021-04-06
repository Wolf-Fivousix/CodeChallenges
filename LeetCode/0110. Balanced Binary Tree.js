// Easy

// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

// Example 1:
// https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg

// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:
// https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

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
 * @return {boolean}
 */

/*
This is not the most optimal, but it is easy to understand:
The root is balanced if the height of left and right subtree are not greater than one.
AND if both left and right substree's are also balanced.
So that's exactly what we do. Count the height, and then repeat the process for every node.

Checking the height is a Linear process, we have to traverse the whole tree.
We do that for EVERY node, meaning we will traverse the right and left subtree multiple times.

And then, we will also check for balancing, which will repeat ALL of these processes again.

This gives us
Polynomial Time Complexity O (N ^ 2)
Constant Space Complexity

There is a way to make this iteractive rather than recursive, but the addded complexity and multiple variables is not worth the gains.
*/
function isBalanced(root) {
    if (!root) return true;
    
    const left = depth(root.left);
    const right = depth(root.right);
    
    if(left === right || left - 1 === right || left + 1 === right) return isBalanced(root.left) && isBalanced(root.right);
    return false;
};

function depth(root) {
    if (!root) return 0;
    
    return 1 + Math.max(depth(root.left), depth(root.right));
}

// Runtime: 92 ms, faster than 76.62% of JavaScript online submissions for Balanced Binary Tree.
// Memory Usage: 43.1 MB, less than 65.69% of JavaScript online submissions for Balanced Binary Tree.