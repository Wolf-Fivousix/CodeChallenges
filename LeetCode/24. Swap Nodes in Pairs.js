// Medium

// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes, only nodes itself may be changed.


// Example:

// Given 1->2->3->4, you should return the list as 2->1->4->3.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
	if (!head || !head.next) return head;

    let nodeA = head;
    let nodeB = head.next;
    let nodeC = head.next.next;

    nodeB.next = nodeA;
    nodeA.next = nodeC;
    head = nodeB;

    nodeB = nodeC;
    nodeC = nodeC ? nodeC.next : null;

    while (nodeB && nodeC) {
        const tempNode = nodeC.next;
        nodeC.next = nodeB;
        nodeB.next = tempNode;
        nodeA.next = nodeC;

        nodeA = nodeA.next.next;
        nodeB = nodeB.next;
        nodeC = nodeB ? nodeB.next : null;
    }

    return head;
};

// Runtime: 60 ms, faster than 81.04% of JavaScript online submissions for Swap Nodes in Pairs.
// Memory Usage: 33.2 MB, less than 98.68% of JavaScript online submissions for Swap Nodes in Pairs.

// Linear Time Complexity, as we need to traverse the whole list.
// Constant Space Complexity, as we only need 3 pointers to make the changes.