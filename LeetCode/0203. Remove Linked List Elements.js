// Easy

// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

// handle empty list case (null head)
// when head is the value to be removed.
// move the head until the value is not target value.
// save the reference to the head.

// Traverse the list while current.next is valid.
	// If next node value is the same as target value, remove it from list.
		// current node.next receives next node.next.
	// else moves the current node forward.
// return head reference.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, value) {
    while (head && head.val === value) head = head.next;
    if (!head) return null;
    
	let currentNode = head;

	while (currentNode.next) {
            if (currentNode.next.val === value) currentNode.next = currentNode.next.next;
            else currentNode = currentNode.next;
    }

    return head;
}

// Runtime: 92 ms, faster than 44.65% of JavaScript online submissions for Remove Linked List Elements.
// Memory Usage: 41.5 MB, less than 5.15% of JavaScript online submissions for Remove Linked List Elements.

// Linear Time Complexity, as we need to traverse the whole list.
// Constant Space Complexity, we only use one extra variable to keep track of the original head.