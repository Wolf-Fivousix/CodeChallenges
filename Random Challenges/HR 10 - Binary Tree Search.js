// In a binary search tree, each
// node holds a value and a
// reference to as many as 2 child
// nodes, or children. The root node
// has no ancestors. The children
// are called left and right, and
// subtrees rooted at left and
// right are the left and right
// subtrees. If each node is
// considered the root of a subtree,
// each node value in its left
// subtree must be less than its
// own value. Likewise, each node
// in its right subtree must have a
// greater or equal value to the
// root. This allows for efficient
// searching.
// For each value in a list of
// integers, determine if it is
// present in a tree . If it is, return
// the integer 1, otherwise, return
// 0.
// Function Description
// Complete the function isPresent
// in the editor below.
// isPresent has the following
// parameter(s):
//    BSTreeNode root: reference to
// the root node of a tree of
// integers
//    int val[q] : an array of integer
// items to search for
// Returns:
//     int[q]: an integer array where
// each value at index i denotes
// whether val[i] is found in the BST
// or not
// Constraints
// 1 ≤ n ≤ 10 5
// 1 ≤ val[i] ≤ 5 × 10 4
// Sample Case 0
// Sample Input
// 20
// 10 30
// 8 12 25 40
// 6 Nil 11 13 23 Nil
// T t V l
// STDIN Function
// ----- -----
// 11 → tree size n =
// 20 → node values =
// 10
// 30
// 8
// 12
// 25
// 40
// 6
// 11
// 13
// 23
// 4 → val[] size q
// 30 → val = [30, 10
// 10
// 12
// 15
// Test Values
// 30
// 10
// 12
// 15
// Sample Output
// 1
// 1
// 1
// 0
// Explanation
// The tree is assembled as
// described in Input Format for
// Custom Testing by the provided
// code stub. Nodes marked "Nil"
// have no value and are
// placeholders to make left and
// right clear.
// Search for val[0] = 30. Start
// from the root of a tree. 30 >
// 20 : Search in the right
// subtree which has the root =
// 30. The item is found, return
// 1.
// Search for val[1] = 10. Start
// from the root of a tree. 10 <
// 20 : Search in the left subtree
// which has the root = 10. The
// item is found, return 1.
// Search for val[2] = 12. Start
// from the root of a tree. 12 <
// 20 : Search in the left subtree
// which has the root = 10. 12 >
// 10 : Search in the right
// subtree which has the root =
// 12. The item is found, return
// 1.
// Search for val[3] = 15. Start
// from the root of a tree. 15 <
// 20: Search in the left subtree
// which has the root = 10. 15 >
// 10 : Search in the right
// subtree which has the root =
// 12. 15 > 12 : Search in the
// right subtree which has the
// root = 13. End of the tree and
// the item is not found, return
// 0.
// The return values are [1, 1, 1,
// 0]

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
};

function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            return this.root;
        }
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        return this.root;
    };

    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///////////  THIS IS THE CODE  ///////////////////////
    /// Everything else is given as part of the problem //
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    this.isPresent = function(root, val) {
        if (!root) return 0;
        if (root.data == val) return 1;

        if (val < root.data) return this.isPresent(root.left, val);
        else return this.isPresent(root.right, val); 
    };
    
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
};

process.stdin.resume();
process.stdin.setEncoding('ascii');
var _input = "";
process.stdin.on('data', function (data) {
    _input += data;
});

process.stdin.on('end', function () {
    var tree = new BinarySearchTree();
    var root = null;
    var values = _input.split('\n').map(Number);
    var j = 1;
    for (var i = 0; i < values[0]; i++) {
        root = tree.insert(root, values[j]);
        j++;
    }
    var k = j + 1;
    for (var i = 0; i < values[j]; i++) {
        process.stdout.write(tree.isPresent(root, values[k]) + '\n');
        k++;
    }
});