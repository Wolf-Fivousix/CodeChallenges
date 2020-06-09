// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
 

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3
 

// Follow up: Solve it both recursively and iteratively.

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
 * @return {boolean}
 */
function isSymmetric(root) {
    if (!root) return true;
    
    const leftBranch = getLeftBranch(root.left);
    const rightBranch = getRightBranch(root.right);
    
    for (let i = 0; i < leftBranch.length && i < rightBranch.length; ++i) {
        if (leftBranch[i] !== rightBranch[i]) return false
    }
    
    return true;
};

function getLeftBranch(root) {
    const queue = [root];
    const result = [];
    
    while (queue.length) {
        const node = queue.shift();
        
        if (node) {
            result.push(node.val);
            queue.push(node.left, node.right);
        }
        else result.push(null);
    }
    
    return result;
}

function getRightBranch(root) {
    const queue = [root];
    const result = [];
    
    while (queue.length) {
        const node = queue.shift();
        
        if (node) {
            result.push(node.val);
            queue.push(node.right, node.left);
        }
        else result.push(null);
    }
    
    return result;
}

// Runtime: 80 ms, faster than 29.80% of JavaScript online submissions for Symmetric Tree.
// Memory Usage: 37.6 MB, less than 15.33% of JavaScript online submissions for Symmetric Tree.

// Simple approach, that works. We traverse both tree branches in a BFS way.
// For the left we read nodes left to right.
// For the right we read nodes right to left.
// The two functions could even be merged into one by using a flag in which direction we want to move.

// These are the proposed solutions (in Java):
// Recursive
// public boolean isSymmetric(TreeNode root) {
//     return isMirror(root, root);
// }

// public boolean isMirror(TreeNode t1, TreeNode t2) {
//     if (t1 == null && t2 == null) return true;
//     if (t1 == null || t2 == null) return false;
//     return (t1.val == t2.val)
//         && isMirror(t1.right, t2.left)
//         && isMirror(t1.left, t2.right);
// }

// Iterative
// public boolean isSymmetric(TreeNode root) {
//     Queue<TreeNode> q = new LinkedList<>();
//     q.add(root);
//     q.add(root);
//     while (!q.isEmpty()) {
//         TreeNode t1 = q.poll();
//         TreeNode t2 = q.poll();
//         if (t1 == null && t2 == null) continue;
//         if (t1 == null || t2 == null) return false;
//         if (t1.val != t2.val) return false;
//         q.add(t1.left);
//         q.add(t2.right);
//         q.add(t1.right);
//         q.add(t2.left);
//     }
//     return true;
// }