// A set of computers need to be
// connected using ethernet cables. Two
// computers are said to be connected if
// they have either a direct or indirect
// connection to each other via cables.
// An example of a direct connection
// would be a cable connecting
// computers 1 and 2. If
// computer 2 were then directly
// connected to computer 3, we would
// say that computers 1 and 3 are
// indirectly connected. A cable only
// connects two distinct computers. No
// two computers are connected by
// more than one cable.
// Initially, some groups of computers
// are connected to each other. If some
// groups of computers are
// disconnected, one operation may be
// performed: remove the cable between
// any two computers and connect any
// other pair of computers with the
// cable. Determine the minimum
// number of operations to connect all
// the computers. Report -1 as the
// answer if it is not possible to connect
// all the computers.
// Example:
// comp_nodes = 4
// comp_edges = 3
// c_from = [1 1 3]
// c_to = [2 3 2]

/*
 * Complete the 'minOperations' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts UNWEIGHTED_INTEGER_GRAPH comp as parameter.
 */
/*
 * For the unweighted graph, <name>:
 *
 * 1. The number of nodes is <name>Nodes.
 * 2. The number of edges is <name>Edges.
 * 3. An edge exists between <name>From[i] and <name>To[i].
 *
 */

function minOperations(compNodes, compFrom, compTo) {
    // Not enough cables to connect all computers.
    if (compNodes > compFrom.length + 1) return -1;
    
    console.log(compNodes, compFrom, compTo);

    // Build a hash.
    // Each key is the computerFrom. Value starts with empty array.
    // Each node in the array value is a connection. Values with arr.length > 1 have multiple connections.
    // Keys with arr.length === 0 have no connections.

    // There's a problem here. This does not identify two separetly connected networks, like 1-2-3 and 4-5-6.

    // Define how to connect them together.
        // Could remove a cable from a node with multiple connections. (Problem: Doesn't work in 1-2-3 | 1-4-5 | 6
        // because 1 has two connections, but not redundant connnections )
    // Define how to pic the minium number os steps.
}

// 2 [ 1 ] [ 2 ]   => 0
// 4 [ 1, 3 ] [ 2, 4 ] => -1
// 4 [ 1, 1, 3 ] [ 2, 3, 2 ] => 1