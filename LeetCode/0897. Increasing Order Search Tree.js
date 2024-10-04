
// Easy

// Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

// Example 1: https://assets.leetcode.com/uploads/2020/11/17/ex1.jpg
// Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

// Example 2: https://assets.leetcode.com/uploads/2020/11/17/ex2.jpg
// Input: root = [5,1,7]
// Output: [1,null,5,null,7]
 

// Constraints:
// The number of nodes in the given tree will be in the range [1, 100].
// 0 <= Node.val <= 1000

/*
Brute Force:
Let's simply traverse the tree in a DFS way
stack starts with root in it.
while the stack is not empty, iterate:
    Pop the top
    If it is a "tree node", save right, the node.val and left to the stack array.
    If it is a value, save it to the result.


Linear Time Complexity O(N) - We have to iterate through all the nodes.
Linear Space Complexity O(N) - We are re-creating the tree.
*/


/**
 * Definition for a binary tree node.
*/
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function increasingBST(root) {
    let newRoot
    let newRootPointer
    const stack = [root]
    while (stack.length) {
        const node = stack.pop()
        // Process already visited node
        if (typeof node === "number") {
            const newLeaf = new TreeNode(node)
            if (!newRoot) {
                newRoot = newLeaf
                newRootPointer = newRoot
            }
            else {
                newRootPointer.right = newLeaf
                newRootPointer = newRootPointer.right
            }
        }
        // Continue traversing the tree
        else {
            if (node.right) stack.push(node.right)
            stack.push(node.val)
            if (node.left) stack.push(node.left)
        }
    }

    return newRoot
};

// Runtime 55 ms Beats 52.78%
// Memory 50.22 MB Beats 86.11%
