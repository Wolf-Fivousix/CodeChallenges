// Easy

// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Traverse the original tree in order (display elements as we go) - let’s go with BFS
// 	For each element, we are going to input them into a new tree.
//     This new tree will have a special “inverted” rule for inserting element. That means instead of 
//     lower elements going to the left, they’ll go the right. And vice versa.


/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
	if (!root) return null;
	const newRoot = new TreeNode(root.val);
	const queue = [root.left, root.right];
	
	while (queue.length) {
        // console.log(queue);
		const node = queue.shift();
		if (!node) continue;

		insertElement(newRoot, node.val);

		if (node.left) queue.push(node.left);
		if (node.right) queue.push(node.right);
    }
    
    return newRoot;
}

function insertElement(root, value) {
    if (root.val <= value) {
        if (root.left) insertElement(root.left, value)
        else root.left = new TreeNode(value);
    }
    else {
        if (root.right) insertElement(root.right, value);
        else root.right = new TreeNode(value);
    }
}

// This solution works for regular Binary Trees, but it does not work when they are already inverted.
// Like [1,2, null]. In this case the higher values are already on the left side of the tree.

// For each node in the tree, we are going to invert their left and rights.

function invertTree(root) {
	if (!root) return root;

    const leftBranch = root.left;
    root.left = root.right;
    root.right = leftBranch;
    invertTree(root.left);
    invertTree(root.right);

    return root;
}

// Runtime: 96 ms, faster than 6.00% of JavaScript online submissions for Invert Binary Tree.
// Memory Usage: 33.4 MB, less than 97.75% of JavaScript online submissions for Invert Binary Tree.

// Linear Time Complexity.
// Constant Space Complexity. (as we modify the original tree)

function invertTree(root) {
    const queue = [root];
    
    while (queue.length) {
        const node = queue.shift();
        if (!node) continue;

        const leftBranch = node.left;
        node.left = node.right;
        node.right = leftBranch;    

        queue.push(node.left);
        queue.push(node.right);
    }
    
    return root;
}

// This is the non-recursive method. Time and Space complexities are the same.

// Runtime: 104 ms, faster than 6.00% of JavaScript online submissions for Invert Binary Tree.
// Memory Usage: 33.5 MB, less than 93.17% of JavaScript online submissions for Invert Binary Tree.