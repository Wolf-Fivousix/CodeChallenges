// Medium

// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

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
function isValidBST(root) {
    const inOrder = inOrderTraversal(root);
    
    for (let i = 1; i < inOrder.length; ++i) {
        if (inOrder[i] <= inOrder[i - 1]) return false;
    }
    
    return true;
}

function inOrderTraversal(root) {
    if (!root) return [];
    
    const left = inOrderTraversal(root.left);
    left.push(root.val, ...inOrderTraversal(root.right));
    
    return left;
}

// Runtime: 76 ms, faster than 89.37% of JavaScript online submissions for Validate Binary Search Tree.
// Memory Usage: 42.1 MB, less than 5.11% of JavaScript online submissions for Validate Binary Search Tree.

// Brute Force solution:
// Traversing a Binary Search Tree IN ORDER should give us the elements in a sorted order.
// Let's leverage that and converte from Tree into Array. Then check to see if it is sorted.

// Linear Time and Space Complexity. We traverse the "tree" twice and add every element to an array.

// The Final proposed solution is very similar to what I accomplished, except they do it iteractively.
// Unfortunately, there is no improvement in the Space Complexity, because worse case cenariou would be
// A unbalanced Binary Search Tree that is valid. Given, actual Complexity is better.
// Take a look at the images as well.
// https://leetcode.com/problems/validate-binary-search-tree/solution/

// And here is the Java code to do a DFS In Order traversal (add all "left" nodes to stack first):
// class Solution {
//     public boolean isValidBST(TreeNode root) {
//       Stack<TreeNode> stack = new Stack();
//       double inorder = - Double.MAX_VALUE;
  
//       while (!stack.isEmpty() || root != null) {
//         while (root != null) {
//           stack.push(root);
//           root = root.left;
//         }
//         root = stack.pop();
//         // If next element in inorder traversal
//         // is smaller than the previous one
//         // that's not BST.
//         if (root.val <= inorder) return false;
//         inorder = root.val;
//         root = root.right;
//       }
//       return true;
//     }
// }