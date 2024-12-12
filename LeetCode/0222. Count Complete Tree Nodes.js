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

// I did not like any of the community solutions. Yeah yeah yeah, we can do recursion here, but what if I DONT WANT TO?
// Also.... Their solutions are all O(log n ^ 2) ... WHY!? Can't we make this Log N!?
// Well.... Let's try again!


/*

BRUTE FORCE:
Just do a tree traversal (be it pre-order, in-order or post-order) and count the nodes.
But this DOES NOT satisfy the "less than O(n)" constraint.

Better:
Can we use Binary search here?
Let's think about this... 
- If I go all the way to the left branch, I can tell how many levels are in the tree.
- With that I can calculate how many nodes are in each level.
- I just need to know where is the last node at the last level! How ???
- Let's try to binary search it!
The VALUE inside the node is not important to us, we just want to count the nodes themselves. So we not going to take the values into consideration.
What we want is to know what is the PATH we are taking to that node, so that we can calculate how many nodes are in the last level.
To do that we start at the root and arbitrarilly will start going to the RIGHT node.
Anytime there is "no direction" in the array, we take left all the way until the end.
If we FIND a node, then we'll add a "RIGHT" to the direction array and repeat the process.
If we DONT FIND a node, then we POP the last direction and will push a "LEFT" AND "RIGHT".
    Why 2 pushes? Because we ALREADY did the left tree path before, so we don't want to waste time revising the left most branch of that tree.
This loop ends when our direction array IS complete. And to BE complete, we need to end in a node.

At the end we'll have our direction array and we can calculate how many nodes in the last level based on 2^n formula
Every "RIGHT" path uses half the last level counter.
    For example, if the tree has 4 levels (potentialy 8 nodes in the last one).
    At index 0, we take a right, that's going to be 4 nodes added to the count (8 / 2), because array lenght is 3, -0 from the index, and 2^3 = 8. Divided by 2, 4!
    At index 1, we take another right, that's going to be 2 nodes added to the count, because array length is 3, -1 from the index, and 2^2 = 4. Divided by 2, 2!
    At index 2, we take another right, that's going to be 1 node added to the count, because array length is 3, -2 from the index, and 2^1 = 2. Divided by 2, 1!
    Had we taken a LEFT at index 2, we would add NOTHING. We never add anything when we take a left, because taking a left doesn't mean we are adding any nodes to the count!
    Then we add +1 node at the very end, since that's were we ended up at, so we HAVE that 1 node.


*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const RIGHT = "right";
const LEFT = "left";
/**
 * @param {TreeNode} root
 * @return {number}
 */
function countNodes(root) {
    if (!root) return 0
    if (!root.left && !root.right) return 1

    const treeDepth = findTreeDepth(root)
    const lastNodePath = []

    while(lastNodePath.length < treeDepth) {
        let currentNode = root
        let travelledLevels = 1
        lastNodePath.forEach(path => {
            if (path === RIGHT) currentNode = currentNode.right
            else currentNode = currentNode.left

            ++travelledLevels
        })

        while (travelledLevels < treeDepth && currentNode.left) {
            currentNode = currentNode.left
            ++travelledLevels
        }

        
        // We DID find a node on the left branch of this tree.
        // Let's move the right side, dividing this by half
        if (currentNode && travelledLevels === treeDepth) {
            lastNodePath.push(RIGHT)
        }
        // We did NOT find a node on the left branch of this tree.
        // Let's move to the right branch of the left tree.
        else {
            lastNodePath.pop()
            lastNodePath.push(LEFT)
            lastNodePath.push(RIGHT)
        }
    }


    // At this point we have a successful path to the LAST NODE, plus one extra step that we need to remove before we calculate the final count.
    lastNodePath.pop()
    // Count the nodes
    let nodeCount = 0
    for (let i = 1; i < treeDepth; ++i) {
        nodeCount += Math.pow(2, i - 1)
        // console.log(`Level ${i} - ${nodeCount}`)
    }
    console.log(nodeCount)

    const lastLevelCounter = lastNodePath.map((path, index) => {
        return path === RIGHT ? Math.pow(2, (lastNodePath.length - index)) / 2 : 0        
    })

    nodeCount += lastLevelCounter.reduce((sum, value) => sum + value)
    
    ++nodeCount

    return nodeCount
};

function findTreeDepth(root) {
    let level = 0
    while (root) {
        root = root.left
        ++level
    }

    return level
}

// Runtime 4 ms Beats 12.11% 
// Memory 68.74 MB Beats 25.14%

// And here is a good explanation of the algorithm of the community:
// https://leetcode.com/problems/count-complete-tree-nodes/solutions/5011718/using-a-binary-search/

/*
Intuition
The problem is to count the total number of nodes in a complete binary tree. We can take advantage of the properties of complete binary trees to optimize the counting process.

Approach
First, we need a helper function getHeight to calculate the height of the left subtree. We traverse the left child nodes until we reach a null node, and count the number of levels.
At each node, we compare the heights of the left and right subtrees.
If the left and right subtrees have the same height, it means the left subtree is a full binary tree. In this case, the total number of nodes in the left subtree can be calculated as 2h left −1, where h left is the height of the left subtree. We then recursively count the nodes in the right subtree.
If the heights are not equal, it means the right subtree is a full binary tree. In this case, we calculate the total number of nodes in the right subtree similarly and recursively count the nodes in the left subtree.
The base case is when the root is null, in which case we return 0.

Complexity
Time complexity: The time complexity is O(logn⋅logn), where n is the number of nodes in the tree. The algorithm has a time complexity proportional to the height of the tree, which is logn in the worst case, and it calculates the height recursively.
Space complexity: The space complexity is O(logn), which represents the maximum height of the recursive call stack.

var countNodes = function (root) {
    if (!root) return 0;
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);

    if (leftHeight === rightHeight) {
        return Math.pow(2, leftHeight) + countNodes(root.right);
    } else {
        return Math.pow(2, rightHeight) + countNodes(root.left);
    }
}

function getHeight(node) {
    if (!node) return 0;
    return 1 + getHeight(node.left);
}

*/