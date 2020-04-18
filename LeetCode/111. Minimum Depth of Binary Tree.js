// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its minimum depth = 2.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth(root) {
    if (!root) return 0;
    
    let queue = [root];
    let depth = 1;
    
    while (queue.length) {
        let children = [];
        for (let node of queue) {
            if (node.left) children.push(node.left);
            if (node.right) children.push(node.right);
        }
        if (children.length) ++depth;
        else return depth;
        
        queue = children;
    }
};

// Something here makes no sense. Supposedly the Depth is the number of nodes between the root and the closest leaf node.
// For some reason, though, the test cases are not passing.