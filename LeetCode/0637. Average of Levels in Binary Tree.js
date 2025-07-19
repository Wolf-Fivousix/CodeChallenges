// Easy

// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 

// Example 1:
// https://assets.leetcode.com/uploads/2021/03/09/avg1-tree.jpg


// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].


// Example 2:
// https://assets.leetcode.com/uploads/2021/03/09/avg2-tree.jpg


// Input: root = [3,9,20,15,7]
// Output: [3.00000,14.50000,11.00000]
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1


/*
BRUTE FORCE:
Doing a Depth for Search we will iterate through the three level by level
Anytime we have a null child, we WILL NOT add it to the queue, since we'll use "null" as a "level flag"
Define level average at 0
Define nodeCount at 0
Define response array as empty []
Start queue (array) with root + null
Iterate through until queue lenght is 1
    shift the first value
    if node is null
        push null to the end of the queue
        divide average by node count and push to response array
        reset average
        reset nodeCount
    else
        add node value to average
        increse nodeCount by 1
        push left and right to the end of the queue (as long as they are not null)

return result array

O(n) Linear Time Complexity
O(log n) Logarithimc Space Complexity

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
function averageOfLevels(root) {
    let sum = 0
    let nodeCount = 0
    const responseArray = []
    const nodeQueue = [root, null]

    // When queue is [null] we have reached and computed all the nodes in the last level
    while (nodeQueue.length > 1) {
        const node = nodeQueue.shift()
        
        if (node === null) {
            nodeQueue.push(null)
            const average = sum / nodeCount
            responseArray.push(average)
            sum = 0
            nodeCount = 0
        }
        else {
            sum += node.val
            ++nodeCount
            if (node.left) nodeQueue.push(node.left)
            if (node.right) nodeQueue.push(node.right)
        }
    }

    const average = sum / nodeCount
    responseArray.push(average)

    return responseArray
};

// Runtime 7 ms Beats 19.22%
// Memory 60.54 MB Beats 56.09%
