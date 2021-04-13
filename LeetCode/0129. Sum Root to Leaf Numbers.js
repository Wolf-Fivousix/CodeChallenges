// Medium

// You are given the root of a binary tree containing digits from 0 to 9 only.

// Each root-to-leaf path in the tree represents a number.

// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers.

// A leaf node is a node with no children.

 

// Example 1:
// https://assets.leetcode.com/uploads/2021/02/19/num1tree.jpg

// Input: root = [1,2,3]
// Output: 25
// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.
// Example 2:
// https://assets.leetcode.com/uploads/2021/02/19/num2tree.jpg

// Input: root = [4,9,0,5,1]
// Output: 1026
// Explanation:
// The root-to-leaf path 4->9->5 represents the number 495.
// The root-to-leaf path 4->9->1 represents the number 491.
// The root-to-leaf path 4->0 represents the number 40.
// Therefore, sum = 495 + 491 + 40 = 1026.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// 0 <= Node.val <= 9
// The depth of the tree will not exceed 10.

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

/*
Let's do iteractively Depth First Search

Define an array (stack) with root.
Define an array (result) empty.
Define an array (values) empty.

While stack is NOT empty, iterate
    pop element from stack
    push element.VALUE to result
    
    if a right child, push it to stack
    if a left child, push it to stack

    if no left AND no right, we have a leaf node.
        join result
        convert to number
        push it to values array.
        (backtrack) pop the current value out of VALUES array.
        

return sum of values.


Recursion DFS (result starts as empty array, sum starts as 0)
if no children, push current SUM to result (no element means 0)

add node.VALUE to SUM
    if left child DFS left child, passing result AND sum
    if right child DFS right child, passing result AND sum

return Sum result array (reduce method)

Linear Time Complexity
Linear Space Complexity (as a Binary Tree, we might have a bad configuration that provide almost linear leaves)
*/

function sumNumbers(root) {
    const result = [];
    
    depthFirstSearch(root, result);
    
    return result.reduce((acc, value) => acc + value, 0);
};

function depthFirstSearch(node, result, sum = 0) {
    sum *= 10;
    sum += node.val;
    
    if (node.left) depthFirstSearch(node.left, result, sum);
    if (node.right) depthFirstSearch(node.right, result, sum);
    
    if (!node.left && !node.right) result.push(sum);
}

// Runtime: 80 ms, faster than 69.61% of JavaScript online submissions for Sum Root to Leaf Numbers.
// Memory Usage: 39.3 MB, less than 42.34% of JavaScript online submissions for Sum Root to Leaf Numbers.