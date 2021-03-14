// Medium

// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }
 

// Test case format:

// For simplicity sake, each node's value is the same as the node's index (1-indexed). For example, the first node with val = 1, the second node with val = 2, and so on. The graph is represented in the test case using an adjacency list.

// Adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

 

// Example 1:
// https://assets.leetcode.com/uploads/2019/11/04/133_clone_graph_question.png

// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.
// 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// Example 2:
// https://assets.leetcode.com/uploads/2020/01/07/graph.png

// Input: adjList = [[]]
// Output: [[]]
// Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.
// Example 3:

// Input: adjList = []
// Output: []
// Explanation: This an empty graph, it does not have any nodes.
// Example 4:
// https://assets.leetcode.com/uploads/2020/01/07/graph-1.png

// Input: adjList = [[2],[1]]
// Output: [[2],[1]]
 

// Constraints:

// 1 <= Node.val <= 100
// Node.val is unique for each node.
// Number of Nodes will not exceed 100.
// There is no repeated edges and no self-loops in the graph.
// The Graph is connected and all nodes can be visited starting from the given node.

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
/*
We want a deep copy of the graph, so there is no way to do better than Linear Space.
In order to "fully create" a node and have it's references, I would need to, first, have the other nodes.
Therefore I cannot "finish" creating a node without creating all nodes first.
Each node is it's position (index + 1) in the input array.

Iterate once through the input creating Nodes with their values and no neighbors.
(Use a hash table (key is the node VAL, while the value for that key is the Node reference itself), because we will want random access to them)
Now that I have all the nodes created, iterate through the input graph once again, so that for each node we can connect the neighbors.

Input is not an array (like the examples), but an actual Node.
So I have to traverse it like I would traverse a graph.
*/
function cloneGraph(node) {

};