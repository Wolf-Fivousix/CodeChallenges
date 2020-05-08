// W2 D5 A
// Info:

// In every scenario, you may assume that the values we are searching for exist in the tree
// The function will take two values of nodes. Not the nodes themselves. (i.e., findShortestDistance(rootNode, 4, 11))
// The method should operate in O(log(n)) time complexity and O(1) space complexity.
// Approach: Remember that we will only need a Node class, not a Tree class. The Node should be a simple constructor function that takes in a value, a left node (defaults to null), and a right node (also defaults to null). The Node class should not hold onto a parent value.

// Your partner may be inclined to start at each node and try and go up. If they take this approach, tell them that they should consider taking a top down approach.

// Let your partner discuss their thoughts. Encourage them to consider using helper methods. If we draw out a tree, and find the distance manually, does your partner have any realizations? What information to we need to find first before we can calculate the distance?

// Solution:

// Shortest distance between 
// 5, 6, 8, 10

// Node is IN the list.

//         5
//     /   \
//    2     7
//   / \   / \
//  1  4  6   11
//    /         \
//   3          15
//             /
//            13
// shortestDistance(rootNode, 2, 7)
// Output: 2
// shortestDistance(rootNode, 4, 6)
// Output: 4
// shortestDistance(rootNode, 1, 2)
// Output: 1
// shortestDistance(rootNode, 7, 7)
// Output: 0



// 3, 5 => 3
// 3, 13 => 7
// 4, 1 => 2

// [5, 2, 4]
// [5, 2, 1]

// [5, 2, 4, 3]
// [5, 7, 11, 15, 13]
// => 7
// [2, 4, 3]
// [7, 11, 15, 13]

// [5, 2, 1]
// [5, 2]

// [1]
// []

// 1. // Iterate through rootNode twice and return array of path for each value. (find path function)
// 2. // While both arrays have length, and the value at index 0 is equal.
//    3. // shift the first element out.
// 4. // Add the lenghts of both arrays.

// Find Path Function
// Deapth for search.

function shortestDistance(rootNode, origin, target) {
    if (origin === target) return 0;

    // 1
    let path1 = findPath(rootNode, origin);
    let path2 = findPath(rootNode, target);

    // 2
    while(path1.length && path2.length && path1[0] === path2[0]) {
        // 3
        path1.shfit();
        path2.shift();
    }

    // 4
    return path1.length + path2.length;
}

// My brain was fixated in a List and I totally ignored the fact that we have a Binary Tree!!
// That means that finding values is super easy and efficient.

// I don`t need to go around the tree. As long as the current element is lesser or greater than both, I can traverse in a single direction to find the most common element.
// From there, I just need to binary search for them and bum shakalaka, there`s the result!