// Easy

// There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

// You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.

 

// Example 1:
// https://assets.leetcode.com/uploads/2021/02/24/star_graph.png

// Input: edges = [[1,2],[2,3],[4,2]]
// Output: 2
// Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.
// Example 2:

// Input: edges = [[1,2],[5,1],[1,3],[1,4]]
// Output: 1
 

// Constraints:

// 3 <= n <= 105
// edges.length == n - 1
// edges[i].length == 2
// 1 <= ui, vi <= n
// ui != vi
// The given edges represent a valid star graph.

/*
Well.... The CENTER of the graph conects to EVERY node.
That means that we can tell the center by comparing any 2 values of our input!
We don't even need to compare all of them.

This makes it Constant Time and Space complexity! O(1)

*/

/**
 * @param {number[][]} edges
 * @return {number}
 */
function findCenter(edges) {
    const center = {}
    const edge1 = edges[0]
    const edge2 = edges[1]
    center[edge1[0]] = edge1[0]
    center[edge1[1]] = edge1[1]

    return center[edge2[0]] ? center[edge2[0]] : center[edge2[1]]
};

// Runtime 0 ms Beats 100.00%
// Memory 66.44 MB Beats 35.12%