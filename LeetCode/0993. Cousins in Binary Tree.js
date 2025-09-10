// Easy

// Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y, return true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise.

// Two nodes of a binary tree are cousins if they have the same depth with different parents.

// Note that in a binary tree, the root node is at the depth 0, and children of each depth k node are at the depth k + 1.

 

// Example 1:
// https://assets.leetcode.com/uploads/2019/02/12/q1248-01.png
// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false

// Example 2:
// https://assets.leetcode.com/uploads/2019/02/12/q1248-02.png
// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
// Output: true

// Example 3:
// https://assets.leetcode.com/uploads/2019/02/13/q1248-03.png
// Input: root = [1,2,3,null,4], x = 2, y = 3
// Output: false
 

// Constraints:

// The number of nodes in the tree is in the range [2, 100].
// 1 <= Node.val <= 100
// Each node has a unique value.
// x != y
// x and y are exist in the tree.

/*
"BRUTE FORCE"
The key of the problem is right at the description of what a COUSIN is:
1- Same Depth
2- Different Parent node

This is exacly what we want. Search the binary tree for a specific element and return (if found):
1- It's parent
2- Depth

We search both elements
Then compare the results

Great! So now the only thing left is implementation. Which is an amalgamation of 3 different binary tree searches:
1) the element we're looking for.
2) the parent of the element we're looking for.
3) node depth.
Recursion makes this easier, but we don't usually go for recursion.
But let's do the recursive approach first and then implement the iterative one.

Recursion version:
Finding the node:
- If no node, return null
- If the node is the target, return true
return left child || right child (Since this is NOT an ORDERED/SORTED Binary Tree (Binary Search Tree) we can't binary search through it)

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
function isCousins(root, x, y) {
    const xNode = searchTree(root, x)
    const yNode = searchTree(root, y)
    console.log(JSON.stringify(xNode), JSON.stringify(yNode))
    return !!xNode && !!yNode && xNode.parent !== yNode.parent && xNode.depth === yNode.depth
};

function searchTree_Recursion(root, target, depth = 0) {
    // By definition we are looking for TWO values.
    // So even if one of them IS the root, we would never find it, since we never look at the val of the very first node.
    // Which is fine, because the ROOT of the tree has no cousins, which also means the overall result should be FALSE.
    if (!root) return null
    if (root.left?.val === target || root.right?.val === target) {
        return {
            depth: depth + 1,
            parent: root.val
        }
    }

    return searchTree(root.left, target, depth + 1) || searchTree(root.right, target, depth + 1)
}
// Another way to represent this through a "normal search" would be for each node to also have a reference to it's parent.
// This way we don't have to analyse it's children.

// Runtime 0 ms Beats 100.00%
// Memory 55.68 MB Beats 76.64%

// Well... the test cases are too simple and the whole thing runs in 0ms even with recursion.
// Regardless, let's do the iterative version.

function searchTree(root, target) {
    const queue = [root, null]
    let depth = 0
    while (queue.length > 1) {
        const currentNode = queue.shift()
        if (currentNode === null) {
            ++depth
            queue.push(null)
            continue
        }

        if (currentNode.left?.val === target || currentNode.right?.val === target) {
            return {
                depth: depth + 1, // We actually don't care about the depth of the child, so we don't need the +1, but whatever.
                parent: currentNode.val
            }
        }
        if (currentNode.left) queue.push(currentNode.left)
        if (currentNode.right) queue.push(currentNode.right)
    }

    return null
}

// Runtime 0 ms Beats 100.00%
// Memory 55.97 MB Beats 66.42%

// We couldn't see any improvements in speed, as it's already at 0ms.
// And the memory usage went up! The problems are too simple to require that much memory.
// But with a big enough tree, this could be the difference between crashing with out of heap memory, and executing.