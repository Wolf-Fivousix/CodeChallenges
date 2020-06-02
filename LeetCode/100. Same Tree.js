// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

// Example 1:

// Input:     1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// Output: true
// Example 2:

// Input:     1         1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// Output: false
// Example 3:

// Input:     1         1
//           / \       / \
//          2   1     1   2

//         [1,2,1],   [1,1,2]

// Output: false


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
    const queue1 = [p];
    const queue2 = [q];
    
    while (queue1.length && queue2.length) {
        const tree1 = queue1.shift();
        const tree2 = queue2.shift();
        
        if (!tree1 && !tree2) continue;
        if (!tree1 && tree2) return false;
        if (tree1 && !tree2) return false;
        
        if (tree1.val !== tree2.val) return false;
        else {
            queue1.push(tree1.left, tree1.right);
            queue2.push(tree2.left, tree2.right);
        }
    }
    
    return queue1.length === queue2.length;
};

// Runtime: 76 ms, faster than 14.77% of JavaScript online submissions for Same Tree.
// Memory Usage: 33.8 MB, less than 80.00% of JavaScript online submissions for Same Tree.

// We're taking a simultaneus Breath approach.