// Medium

// Given a binary tree, return the sum of values of its deepest leaves.
 

// Example 1:



// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15
 

// Constraints:

// The number of nodes in the tree is between 1 and 10^4.
// The value of nodes is between 1 and 100.

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
function deepestLeavesSum(root) {
    let sum = 0;
        const flag = true;
        const queue = [root, flag];

        while (queue.length > 1) {
            // console.log(printQ(queue), sum);
            const currentNode = queue.shift();

            if (!currentNode) continue;

            if (currentNode.val) {
                sum += currentNode.val;
                if (currentNode.left) queue.push(currentNode.left);
                if (currentNode.right) queue.push(currentNode.right);
            }
            else {
                sum = 0;
                queue.push(flag);
            }
        }

    return sum;

};

function printQ(queue) {
    const result = [];
    for (let i = 0; i < queue.length; ++i) {
        result.push(queue[i].val);
    }
    return result;
}

// Runtime: 92 ms, faster than 83.01% of JavaScript online submissions for Deepest Leaves Sum.
// Memory Usage: 45.6 MB, less than 39.80% of JavaScript online submissions for Deepest Leaves Sum.

// Linear Time Complexity, as we need to traverse all nodes to make sure we did not miss any leaves.
// Linear Space Complexity, as we could have all nodes at the same time in the queue.