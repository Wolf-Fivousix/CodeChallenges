// Easy

// Given the root of a complete binary tree, return the number of the nodes in the tree.

// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

// Design an algorithm that runs in less than O(n) time complexity.

 

// Example 1:
// https://assets.leetcode.com/uploads/2021/01/14/complete.jpg

// Input: root = [1,2,3,4,5,6]
// Output: 6
// Example 2:

// Input: root = []
// Output: 0
// Example 3:

// Input: root = [1]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5 * 104].
// 0 <= Node.val <= 5 * 104
// The tree is guaranteed to be complete.

/*
A "complete" binary tree is a binary tree that has all it's levels filled (except the last one), and with the last level having all nodes to the left.

Brute Force:
If all we want is to count the nodes, a simple traversal would sufice. No matter what kind, pre-order, in-order, post-order.
This doesn't meet the challenge requirement of being better than O(n) (Linear Time Complexity), but in a real world scenario would most likely be enough.

Optimizing:
Since this is a binary tree, let's use the power of division!
We can easily find how many levels are in the tree by going "left" all the time and counting the "hoops".
Once we know the height of the tree, we know how many nodes are filled in Height - 1, through a formula. No problem here.
    Formula is: From 0 to X, raise 2 to the power of the level, so Level 0 = 2^0 = 1.  3 = 2^3 = 8. Etc...
Only thing left is figuring how many nodes in the last level are filled. And for that, we gonna use the power of binary!
We go down the middle and see if there is a node there. If there is, we repeat on the right half. If there is not, we repeat on the left half.
And we do this until we find exactly the "right most" node in the tree => This portion still foggy, we'll get to it.
Once we know that, we just "back fill" with the formula of how big this level is.
Sum to the previous calculation and done!

2 points to be figured out:
1) Logic to find the "right most" node
    Knowing the height, we start with 1 right and X lefts (X is height - 2)
    Every time we FIND a node, we go 1 more to the right.
    Ever time we DONT find a node, we got -1 on the right. If 0 rights, then invert the formula (1 left, X rights)
2) Formula to "back fill" the last level.
    Everytime we take "one right" we have HALF of the last level. So If 4 levels, 1 right = 2^4 (16) / 2 = 8 (which is the exact opposite of the formula for calculating the filled levels)
    Every next "right" will halft that amount.
    Every next "left" we count 0 and decrase the counter as if we had divided by 2.
    Once we reach the last node, we add +1 to the count (representing the last node, where the tree "ends")

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
 * @return {number}
 */
function countNodes(root) {
    
};