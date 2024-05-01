// Easy

// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

 

// Example 1:
// https://assets.leetcode.com/uploads/2021/02/05/bst1.jpg

// Input: root = [4,2,6,1,3]
// Output: 1
// Example 2:
// https://assets.leetcode.com/uploads/2021/02/05/bst2.jpg

// Input: root = [1,0,48,null,null,12,49]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [2, 104].
// 0 <= Node.val <= 105
 

// Note: This question is the same as 783. Minimum Distance Between BST Nodes

/*

Brute Force:
Traverse the tree whoever you want (pre-order, in-order, post-order) and save it to an array.
Sort the array
Traverse the array (start on index 1) and compare each element to the previous (there is ALWAYS at least 2 nodes in the tree).
    Keeping track of the delta between them.
    Whenever a lower delta is found, comparison is over.
Return the lowest delta found

BETTER YET - It's a Binary Tree! Traverse in-order and you get the SORTED array!
    So we can get rid of the sorting and come down to Linear time complexity! Pretty good! (Can't be better than this, because we HAVE to see every node at least once!)

Time Complexity: Linear - O(N)
    N for transcribing the tree
    N for traversing the array

Space Complexity: Linear - O(N)
    From trascribing the tree into an array.
    (2N if you consider we are keeping 2 arrays in memory when sorting)

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
function getMinimumDifference(root) {
    const elements = inOrderTraversal(root)
    let lowestDelta = Number.POSITIVE_INFINITY

    for (let i = 1; i < elements.length; ++i) {
        const delta = Math.abs(elements[i] - elements[i - 1])
        if (delta < lowestDelta) lowestDelta = delta
    };

    return lowestDelta
}

function inOrderTraversal(root) {
    if (!root) return []

    const stack = [root]
    const elements = []

    while (stack.length) {
        const current = stack.pop()
        if (typeof current === "number") {
            elements.push(current)
            continue
        }
        if (current.right) stack.push(current.right)
        stack.push(current.val)
        if (current.left) stack.push(current.left)
    }

    return elements
}

// Runtime 70ms Beats 45.43% of users with JavaScript
// Memory 54.74MB Beats 67.85% of users with JavaScript