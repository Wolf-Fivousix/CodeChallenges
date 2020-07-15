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
        console.log(queue);
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