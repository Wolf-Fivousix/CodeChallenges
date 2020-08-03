// Easy

// Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// For example:
// Given BST [1,null,2,2],

//    1
//     \
//      2
//     /
//    2
 

// return [2].

// Note: If a tree has more than one mode, you can return them in any order.

// Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

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
function findMode(root) {
    const counter = countValues(root);
    
    return mode(counter);
}

function countValues(root) {
    const counter = {};
    const queue = [root];
    
    while (queue.length) {
        const node = queue.shift();
        if (!node) continue;
        
        if (counter[node.val]) ++counter[node.val];
        else counter[node.val] = 1;
        
        queue.push(node.left, node.right);
    }
    
    return counter;
}

function mode(hash) {
    let modes = [];
    let counter = 0;
    const keys = Object.keys(hash);
    
    for (let i = 0; i < keys.length; ++i) {
        const value = keys[i];
        const frequency = hash[value];
        
        if (frequency > counter) {
            modes = [value];
            counter = frequency
        }
        else if (frequency === counter) modes.push(value);
    }
    
    return modes;    
}

// Linear Time and Space Complexity.
// Runtime: 104 ms, faster than 43.98% of JavaScript online submissions for Find Mode in Binary Search Tree.
// Memory Usage: 45.2 MB, less than 37.50% of JavaScript online submissions for Find Mode in Binary Search Tree.

// Solution by claytonjwong
// Attention to how he keeps track of the max count during the hash construction.
// Then he uses that value to filter the result array.

// Preorder traversal of the tree, tracking the count of each value and the maximum count max. Return the answer as all node values with maximum count max.

let findMode = function(root, m = new Map(), max = 0) {
    let go = root => {
        if (!root)
            return;
        m.set(root.val, 1 + (m.get(root.val) || 0));
        max = Math.max(max, m.get(root.val));
        go(root.left);
        go(root.right);
    };
    go(root);
    return [...m.entries()].filter(e => e[1] == max).map(e => e[0]);
};