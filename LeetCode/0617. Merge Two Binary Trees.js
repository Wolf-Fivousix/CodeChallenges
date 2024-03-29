// Easy
// https://leetcode.com/problems/merge-two-binary-trees/

// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

// Return the merged tree.

// Note: The merging process must start from the root nodes of both trees.


// Example 1:
// https://assets.leetcode.com/uploads/2021/02/05/merge.jpg

// Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]
// Example 2:

// Input: root1 = [1], root2 = [1,2]
// Output: [2,2]
 

// Constraints:

// The number of nodes in both trees is in the range [0, 2000].
// -104 <= Node.val <= 104

/*
Since we want to build a new tree, we have to use a "Tree building" traversal, in other words, pre-order traversal.
    Pre-Order traversal is Node -> Left -> Right.
The catch is that whenever a node of EITHER three is null, we don't need to traverse it at all! There's no computation to be done!
The problem also doesn't explicitly says that we NEED TO create a complete new tree.

So using that to our advantage, we will do a simple variation of the Pre-Order traversal:
Check if the left tree node is null. If it is, return the right tree node.
Check if the right tree node is null. If it is, return the left tree node.
Now we know both nodes exists, so we can create a new node and add their value up!

And here's another catch: When we create the node we recursively call the same method for the left and the right nodes!


Worst case scenario every single node overlaps. Which means we will traverse the whole tree AND create new nodes for each one.
Linear O(N) for both Time and Space complexities.
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
function mergeTrees(root1, root2) {
    if (!root1) return root2;
    if (!root2) return root1;

    return new TreeNode(
        root1.val + root2.val,
        mergeTrees(root1.left, root2.left),
        mergeTrees(root1.right, root2.right)
    );
}

// Runtime
// 111 ms
// Beats
// 10.78%
// Memory
// 50.2 MB
// Beats
// 53.53%