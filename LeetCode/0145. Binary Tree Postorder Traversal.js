// Easy

// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// https://assets.leetcode.com/uploads/2020/08/28/pre1.jpg 

// Example 1:


// Input: root = [1,null,2,3]
// Output: [3,2,1]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
 

// Constraints:

// The number of the nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 

// Follow up: Recursive solution is trivial, could you do it iteratively?

/*
This is going to be exactly the same as 0144!
To make things different, I'll do the alternative version of recursive, passing the result array into it.

The iterative method I'll change by using a stack instead of a queue. Although they are exactly the same, "unshifting" an array could mean "relocating" the array in memory.
I didn't find any documentation on this, and would need millions of values to even make a dent in the processing speed of my CPU to test this.
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
function postorderTraversalRecursive(root, result = []) {
    if (!root) return result

    postorderTraversalRecursive(root.left, result)
    postorderTraversalRecursive(root.right, result)
    result.push(root.val)

    return result
};

// Runtime - 53ms Beats 49.53% of users with JavaScript
// Memory - 48.96MB Beats 53.07% of users with JavaScript

function postorderTraversal(root) {
    const result = []
    const stack = [root] // node AND value stack

    while (stack.length > 0) {
        const currentNodeOrValue = stack.pop()
        if (!currentNodeOrValue) continue
        if (typeof currentNodeOrValue === "number") result.push(currentNodeOrValue)
        else {
            stack.push(currentNodeOrValue.val)
            stack.push(currentNodeOrValue.right)
            stack.push(currentNodeOrValue.left)
        }
    }

    return result
};

// Runtime - 60ms Beats 13.36% of users with JavaScript
// Memory - 49.19MB Beats 28.88% of users with JavaScript

