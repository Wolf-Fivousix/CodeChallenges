// Easy

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg

// Example 1:


// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 

// Follow up: Recursive solution is trivial, could you do it iteratively?

/*
Pre order is NODE > LEFT > RIGHT

Recursive:
when node is null, return
Print the node
Traverse left
Traverse right

CATCH is: We don't want to just PRINT the nodes, we want to RETURN them in an array.
We can pass an optional array to the recursive method, more efficient.
Or we can return arrays as the response, which matches what is expected of the result of the method. Let's go with this version.


Iteractive:

*/

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
function preorderTraversalRecursive(root) {
    if (!root) return [];

    return [root.val].concat(preorderTraversalRecursive(root.left)).concat(preorderTraversalRecursive(root.right))
};

// Runtime - 51ms Beats 62.43% of users with JavaScript
// Memory - 48.86MB Beats 66.50% of users with JavaScript

function preorderTraversal(root) {
    const result = []
    const nodeQueue = [root]
    while (nodeQueue.length > 0) {
        const currentNode = nodeQueue.shift()
        if (!currentNode) continue

        result.push(currentNode.val)
        nodeQueue.unshift(currentNode.right)
        nodeQueue.unshift(currentNode.left)
    }

    return result
};

// Runtime - 43ms Beats 93.32% of users with JavaScript
// Memory - 48.92MB Beats 55.37% of users with JavaScript