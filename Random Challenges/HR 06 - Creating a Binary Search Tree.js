// 9. Creating a Binary Search Tree
// Given a list of integers, implement the following
// algorithm to create a Binary Search Tree. As you
// create the tree, count the number of times the
// insert function is called. The algorithm takes an
// array, keys, of n unique integers and inserts each
// integer in order into an empty binary search tree:
// // The variable named 'counter' count
// createBST(int[] keys) {
// set the value of counter to 0
// for each (key in keys) {
// if (tree has a root node) {
// insert(root, key)
// }
// else {
// create a new node with va
// }
// print the value of 'counter'
// }
// }
// insert(root, key) {
// increment counter
// if (key is less than the value of
// if (root node has no left chi
// create a new node with va
// }
// else {
// insert(left child of root
// }
// }
// else {
// if (root node has no right ch
// create a new node with va
// }
// else {
// insert(right child of roo
// }
// }
// }