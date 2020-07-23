// Easy

// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]


 

// Example 1:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
 

// Constraints:

// All of the nodes' values will be unique.
// p and q are different and both values will exist in the BST.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    if (!root) return root;
    
    if (p.val > q.val) [p, q] = [q, p];
    if (root === p || root === q) return root;
    if (p.val <= root.val && root.val <= q.val) return root;

    if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
    return lowestCommonAncestor(root.right, p ,q);
}

// Runtime: 100 ms, faster than 38.68% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
// Memory Usage: 46.2 MB, less than 15.34% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.

// Logaritimic Time Complexity. As we might have to traverse a branch all the way to the before-last node.
// Constant Space Complexity.