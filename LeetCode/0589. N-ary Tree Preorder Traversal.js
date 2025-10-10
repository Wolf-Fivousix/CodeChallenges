// Easy

// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)
 

// Example 1:
// https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,3,5,6,2,4]

// Example 2:
// https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png
// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
 
// Constraints:
// The number of nodes in the tree is in the range [0, 104].
// 0 <= Node.val <= 104
// The height of the n-ary tree is less than or equal to 1000.
 

// Follow up: Recursive solution is trivial, could you do it iteratively?

/*

*/

/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
function preorder(root, result = []) {
    if (root === null) return []

    result.push(root.val)

    for (const child of root.children) {
        preorder(child, result)
    }

    return result
};
// Runtime 48 ms Beats 99.50%
// Memory 60.33 MB Beats 41.79%

// Iteratively
function preorder(root) {
    const stack = [root]
    const result = []

    while (stack.length > 0) {
        const currentNode = stack.pop()
        if (currentNode === null) continue
        // console.log(`looking at node= ${currentNode.val}`)

        result.push(currentNode.val)
        const tempStack = []
        for (const child of currentNode.children) {
            tempStack.push(child)
        }
        stack.push(...tempStack.reverse())
        // stack.push(currentNode.children.reverse())
        // stack.push([...currentNode.children].reverse())
    }

    return result
};

// Runtime 69 ms Beats 31.34%
// Memory 62.43 MB Beats 7.96%