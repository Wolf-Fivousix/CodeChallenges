// Medium

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

// Example 1:
// https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

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
 * @return {number[][]}
 */

/*
BFS
With a flag to know when we should "copy" our queue to the result array.

when no root, return an empty array (otherwise we would return an empty array inside the empty array).
Define the queue with a FLAG and the root.
Define levelTraversal as an empty array.
while the queue length is greater than 1, iterate
    currentNode shift from queue
    If currentNode is the flag
        levelTraversal push an empty array to queue.
        queue pushes the flag
    else
        levelTraversal [last element] (legnth - 1) pushes currentNode value
        if left exists, queue pushes left node
        if right exists, queue pushes right node
return levelTraversal

Linear Time Complexity O(N) where N is the size of the tree.
Linear Space Complexity O(N) where N is the size of the tree (we are basically making a copy of all the values in the tree).
*/
function levelOrder(root) {
    if (!root) return [];
    const FLAG = "endOfLevel";
    const queue = [FLAG, root];
    const levelTraversal = [];
    
    while (queue.length > 1) {
        const currentNode = queue.shift();
        
        if (currentNode === FLAG) {
            levelTraversal.push([]);
            queue.push(FLAG);
        }
        else {
            levelTraversal[levelTraversal.length - 1].push(currentNode.val);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
    }
    
    return levelTraversal;
};
// Runtime: 84 ms, faster than 65.29% of JavaScript online submissions for Binary Tree Level Order Traversal.
// Memory Usage: 40.3 MB, less than 32.46% of JavaScript online submissions for Binary Tree Level Order Traversal.