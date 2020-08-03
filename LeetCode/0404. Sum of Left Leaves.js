// Easy

// Find the sum of all left leaves in a given binary tree.

// Example:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

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
function sumOfLeftLeaves(root) {
    let sum = 0;
    const queue = [root];
    
    while (queue.length) {
        const node = queue.shift();
        if (!node) continue;
        
        // Left leaf.
        if (node.left && (!node.left.left && !node.left.right)) sum += node.left.val;
        queue.push(node.left, node.right);
    }
    
    return sum;
}

// BFS adding any left leaf we find.
// Linear Time and Space Complexity. As we traverse the whole tree and could hold up to N / 2 nodes in the array.

// Runtime: 68 ms, faster than 94.31% of JavaScript online submissions for Sum of Left Leaves.
// Memory Usage: 38.5 MB, less than 11.54% of JavaScript online submissions for Sum of Left Leaves.