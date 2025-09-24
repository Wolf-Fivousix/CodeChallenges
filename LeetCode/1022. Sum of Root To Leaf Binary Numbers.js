// Easy

// You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.

// For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.

// The test cases are generated so that the answer fits in a 32-bits integer.

// Example 1:
// https://assets.leetcode.com/uploads/2019/04/04/sum-of-root-to-leaf-binary-numbers.png
// Input: root = [1,0,1,0,1,0,1]
// Output: 22
// Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

// Example 2:
// Input: root = [0]
// Output: 0
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// Node.val is 0 or 1.

/*
Two different things here:
1) Finding the path to leaf nodes.
2) Converting the path from binary into Number and then summing it up.

We can use ParseInt, which takes a string of a binary representation ("101010") and converts it into a number.


We are going to do a DFS and anytime we find a leaf we'll process it. THIS is also our base case.
DETAIL: Our base case CANNOT be an invalid node, because that would make every leaf node return 2 results (once for each branch)
We are guaranteed a valid root, so we don't need to check for that.

1) Leaf nodes
Create our stack to keep track of traversal
Add the root (with empty path)
while we have a stack with elements
    pop the first one
    IF there are NO LEFT and NO RIGHT
        compute the result and continue
    add right to stack if exists
    add left to stack if exists

we don't return anything on this stage (computation to come)
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
 * @return {number}
 */
function sumRootToLeaf(root) {
    const traversalNodes = [{ node: root, path: "" }]
    let sum = 0

    while (traversalNodes.length) {
        const current = traversalNodes.pop()
        const currentNode = current.node
        const currentPath = current.path + String(currentNode.val)

        // Leaf node found, process it.
        if (currentNode.left === null && currentNode.right === null) {
            const value = parseInt(currentPath, 2)
            sum += value
            continue
        }

        if (currentNode.right) traversalNodes.push({ node: currentNode.right, path: currentPath })
        if (currentNode.left) traversalNodes.push({ node: currentNode.left, path: currentPath })    
    }

    return sum
};

// Runtime 1 ms Beats 65.05%
// Memory 58.46 MB Beats 12.62%