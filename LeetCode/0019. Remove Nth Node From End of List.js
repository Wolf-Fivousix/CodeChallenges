// Medium

// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass?

/*
There are two approaches that come to my head:
First, we can iterate through the list once, learn it's size.
    Then we iterate again and on the element before size - n, we know we will remove it. Bum.
Linear Time and Constant Space.

The second approach, for the follow up, would be:
Let's create a queue of size N + 1 that will hold the references to the nodes.
Once we reach the end of the list, we get the first element in the queue and change its .next reference.
Possible problem: What happens if the list is smaller than N?
Linear Time and Space, but we do it in 1 pass instead of 2.
*/

// First appraoch.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    if (!head) return null;
    
    let size = 0;
    let tempHead = head;
    while (tempHead) {
        ++size;
        tempHead = tempHead.next;
    }
    
    tempHead = head;
    const target = size - n;
    
    if (size <= n) {
        head = head.next;
        return head;
    }
    
    size = 0;
    while (tempHead) {
        ++size;
        if (size === target) {
            tempHead.next = tempHead.next.next;
            break;
        }
        tempHead = tempHead.next;
    }
    
    return head;
}

// Runtime: 80 ms, faster than 44.11% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 37.7 MB, less than 5.13% of JavaScript online submissions for Remove Nth Node From End of List.
// Linear Time Complexity.
// Constant Space Complexity.