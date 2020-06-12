// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

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
function levelOrderBottom(root) {
    let endLevel = true;
    const queue = [root, endLevel];
    const result = [];
    let level = [];
    
    while (queue.length > 1) {
        const node = queue.shift();
        
        switch (node) {
            case null:
                continue;
            
            case endLevel:
                result.unshift(level);
                level = [];
                queue.push(endLevel);    
                break;
                
            default:
                queue.push(node.left, node.right);
                level.push(node.val);
        }
    }
    
    return result;
};

// Runtime: 80 ms, faster than 17.29% of JavaScript online submissions for Binary Tree Level Order Traversal II.
// Memory Usage: 37.1 MB, less than 6.94% of JavaScript online submissions for Binary Tree Level Order Traversal II.

// Very similar to another exercise. Basically just traverse the tree making sure you are saving each level,
// in a different array.