// You need to find the largest value in each row of a binary tree.

// Example:
// Input: 

//           1
//          / \
//         3   2
//        / \   \  
//       5   3   9 

// Output: [1, 3, 9]


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
function largestValues(root) {
    const result = [];
    let currentMax = Number.NEGATIVE_INFINITY;
    const row = true;
    const queue = [root, row];
    
    while (queue.length > 1) {
        const currentNode = queue.shift();
        
        switch (currentNode) {
            case null:
                continue;
                
            case true:
                result.push(currentMax);
                currentMax = Number.NEGATIVE_INFINITY;
                queue.push(row);
                break;
                
            default:
                currentMax = Math.max(currentMax, currentNode.val);
                queue.push(currentNode.left, currentNode.right);
        }
    }
    
    return result;
};

// Runtime: 80 ms, faster than 50.28% of JavaScript online submissions for Find Largest Value in Each Tree Row.
// Memory Usage: 41.2 MB, less than 6.64% of JavaScript online submissions for Find Largest Value in Each Tree Row.