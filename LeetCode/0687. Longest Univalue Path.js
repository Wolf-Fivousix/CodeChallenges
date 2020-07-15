// Easy

// Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

// The length of path between two nodes is represented by the number of edges between them.

 

// Example 1:

// Input:

//               5
//              / \
//             4   5
//            / \   \
//           1   1   5
// Output: 2

 

// Example 2:

// Input:

//               1
//              / \
//             4   5
//            / \   \
//           4   4   5
// Output: 2

 

// Note: The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.

// Example 3:
// Input:
//               1
//              / \
//             4   5
//            / \   \
//           4   4   5
//          / \ …..
//         4   4…….
// Output: 3

// Example 4:
// Input:
//               1
//              / \
//             4   5
//            / \   \
//           1   1   1
// Output: 0

// Example 5:
// Input:
//               1
//              / \
//             4   5
//            / \   \
//           4   1   5
//                      \ 
//                        5
// Output: 2

// My try at it.
// if there is no node, return 0.
// if there is no children, return 1.

// if both children are the same value, return 1 + recursive call for both children.
// else 
// otherwise repeat the work for each child (if the value of the child is the same as the current node, we add 1 to our counter.)

// return the highest result between the two children (recursive call)


// Yin's example

// solution{
//     Max = 0;
//     dfs(root, parent){
//         If(!root) return 0;
//         Left = dfs(root.left, root); // 0
//         Right = dfs(root.right, root); // 0
    
//         Max = max(max, left + right + 1);
//     Return 0 if root != parent;
//     Return max(left, right) + 1 if root == parent;
//     } 

//     dfs()
//     Return max;
// }
    