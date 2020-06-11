// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
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
function zigzagLevelOrder(root) {
    const result = [];
    const queue = [root, false];
    let buffer = [];
    
    while (queue.length > 1) {
        const currentNode = queue.shift();
        
        switch (currentNode) {
            case null:
                continue;
                break;
                
            case true:
                result.push(buffer.reverse());
                buffer = [];
                queue.push(false);
                break;
                
            case false:
                result.push(buffer);
                buffer = [];
                queue.push(true);
                break;
                
            default:
                buffer.push(currentNode.val);
                queue.push(currentNode.left, currentNode.right);
        }
    }
    
    return result;
};

// This was the question I got in my Google Interview back in 2016. =)

// Runtime: 68 ms, faster than 42.57% of JavaScript online submissions for Binary Tree Zigzag Level Order Traversal.
// Memory Usage: 36.2 MB, less than 5.09% of JavaScript online submissions for Binary Tree Zigzag Level Order Traversal.