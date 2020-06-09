// A binary tree uses a multi-node data structure where
// each node may have 0 to 2 child nodes, and has one
// stored value, its node number in this case. A tree may
// either be:
// An empty tree, the root is null.
// A non-empty tree with a non-null root node that
// contains a value and up to 2 subtrees, left and right,
// which are also binary trees.
// A binary tree is classified as a binary search tree (BST) if
// all of the non-null nodes exhibit two properties:
// The left subtree of each node contains only nodes with
// values that are lower than its own value.
// The right subtree of each node contains only nodes with
// values that are higher than its own value.
// A pre-order traversal is a recursive tree traversal method
// where the current node is visited first, then the left
// subtree, and then the right subtree. The following
// pseudocode parses a tree into a list using pre-order
// traversal:
// If the root is null, return the null list.
// For a non-null root node:
// 1. Create a pre-order traversal list, left, of the left
// subtree.
// 2. Create a pre-order traversal list, right, of the right
// subtree.
// 3. Return the concatenated list: the non-null node +
// left + right.
// Determine whether a traversal history can describe a
// path for a valid BST. Given a traversal history of one or
// many binary trees, check whether each path represents a
// valid BST or not. Return an array of strings, one for each
// test. Answer YES if the path can represent a valid BST, or
// NO if it cannot.
// Example
// nodes = [2, 1, 3, 4, 5]
// The root node will always be the first node in the array.
// In this case, the root is at node 2
// Next 1 is less than 2. Place the node 1 at the left of node
// 2.
// Next 3 is greater than 2. Place the node 3 at the right of
// node 2.
// Next 4 is greater than 3. Place the node 4 at the right of
// node 3.
// Next 5 is greater than 5. Place the node 5 at the right of
// node 4.
// This graph meets the definition of a BST.
// 2
// 1 3
// 4
// 5
// Function Description
// Complete the isValid function below.
// isValid has the following parameter:
//     int a[n]: An array of integers, the values in the order
// encountered in the traversal of the tree.
// Returns:
//     string[n]: for each test, either the string YES if the path
// represents a valid BST, or NO otherwise.
// Constraints
// 1 ≤ q ≤ 10
// 3            → a[] size n = 3 (query 1
// 2 1 3         → a = [2, 1, 3]
// 6              → a[] size n = 6 (query 2
// 3 2 1 5 4 6    → a = [3, 2, 1, 5, 4, 6]
// 4              → a[] size n = 4 (query 3
// 1 3 4 2        → a = [1, 3, 4, 2]
// 5              → a[] size n = 5 (query 4
// 3 4 5 1 2      → a = [3, 4, 5, 1, 2
// Sample Output 0
// YES
// YES
// YES
// NO
// NO
// Explanation 0
// The diagrams below show BST representations with
// green nodes at valid locations and red at invalid.
// An explanation of the q = 5 queries:
// 1. Diagram (a) is valid, so return the string YES.
// 2. Diagram (b) is valid, so return the string YES.
// 3. Diagram (c) is valid, so return the string YES.
// 4. Diagram (d), the query 1 3 4 2, is not valid. The root is
// 1 because it is the first value in the list. The second
// value of 3 must be the right child of 1 because it is
// greater. Likewise, the third value, 4, must be the right

/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY a as parameter.
 */
function isValid(a) {
    const middle = Math.floor((a.length - 1) / 2);
    // console.log(a, middle)

    // check left branch
    let current = Number.POSITIVE_INFINITY;
    for (let i = 1; i <= middle; ++i) {
        if (a[i] <= current) current = a[i];
        else return "NO";
    }

    // check right branch
    current = Number.NEGATIVE_INFINITY;
    for (let i = middle + 1; i < a.length; ++i) {
        if (a[i] >= current) current = a[i];
        else return "NO"
    }
    
    return "YES";
}

// 0/12 Test Cases
// I am having a hard time wraping my head around how the "binary tree" is being constructed.
// This approach was a trial of finding a pattern in the data, but it does not work in cases like:
// [3, 2, 1, 5, 4, 6] => Which makes for a valid pre-traversal output of a BST.