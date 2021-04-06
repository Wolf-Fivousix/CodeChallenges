// Easy

// A binary tree is univalued if every node in the tree has the same value.

// Return true if and only if the given tree is univalued.

 

// Example 1:
// https://assets.leetcode.com/uploads/2018/12/28/unival_bst_1.png

// Input: [1,1,1,1,1,null,1]
// Output: true
// Example 2:
// https://assets.leetcode.com/uploads/2018/12/28/unival_bst_2.png

// Input: [2,2,2,5,2]
// Output: false
 

// Note:

// The number of nodes in the given tree will be in the range [1, 100].
// Each node's value will be an integer in the range [0, 99].

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
Get the value of root.
BFS and compare every node value with root.
    If anything is different, return false
return true
*/
function isUnivalTree(root) {
    if (!root) return true;
    
    const queue = [root];
    const rootValue = root.val;
    
    while (queue.length) {
        const node = queue.shift();
        if (rootValue !== node.val) return false;
        
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    
    return true;
};

// Runtime: 80 ms, faster than 64.10% of JavaScript online submissions for Univalued Binary Tree.
// Memory Usage: 38.9 MB, less than 81.73% of JavaScript online submissions for Univalued Binary Tree.