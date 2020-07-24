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

// Second approach.
function removeNthFromEnd(head, n) {
    if (!head) return null;
    
    const queue = [head];
    let node = head;
    let size = 0;
    while(node) {
        queue.push(node);
        ++size;
        if (queue.length > n + 1) queue.shift();
        
        node = node.next;
    }
    
    node = queue.shift();
    if (!node.next || size <= n) return head.next;
        
    node.next = node.next.next;
    return head;
}
// Runtime: 80 ms, faster than 44.11% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 37.5 MB, less than 5.13% of JavaScript online submissions for Remove Nth Node From End of List.
// Linear Time Complexity, where N is the size of linked list.
// Linear Space Complexity, where N is the input N.


// Proposed solution, does in one pass with constant space:
// Approach 2: One pass algorithm
// Algorithm

// The above algorithm could be optimized to one pass. Instead of one pointer, we could use two pointers. The first pointer advances the list by n+1n+1 steps from the beginning, while the second pointer starts from the beginning of the list. Now, both pointers are exactly separated by nn nodes apart. We maintain this constant gap by advancing both pointers together until the first pointer arrives past the last node. The second pointer will be pointing at the nnth node counting from the last. We relink the next pointer of the node referenced by the second pointer to point to the node's next next node.

// Remove the nth element from a list
// public ListNode removeNthFromEnd(ListNode head, int n) {
//     ListNode dummy = new ListNode(0);
//     dummy.next = head;
//     ListNode first = dummy;
//     ListNode second = dummy;
//     // Advances first pointer so that the gap between first and second is n nodes apart
//     for (int i = 1; i <= n + 1; i++) {
//         first = first.next;
//     }
//     // Move first to the end, maintaining the gap
//     while (first != null) {
//         first = first.next;
//         second = second.next;
//     }
//     second.next = second.next.next;
//     return dummy.next;
// }

// Complexity Analysis

// Time complexity : O(L)O(L).

// The algorithm makes one traversal of the list of LL nodes. Therefore time complexity is O(L)O(L).

// Space complexity : O(1)O(1).

// We only used constant extra space.

function removeNthFromEnd(head, n) {
    if (!head) return null;
    
    const dummy = new ListNode(null, head);
    let pointer1 = dummy;
    let pointer2 = dummy;
    
    for (let i = 0; i < n + 1 && pointer1; ++i) {
        pointer1 = pointer1.next;
    }
    
    while (pointer1) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }
    
    pointer2.next = pointer2.next.next;
    return dummy.next;
}
// Runtime: 92 ms, faster than 24.68% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 36.7 MB, less than 5.13% of JavaScript online submissions for Remove Nth Node From End of List.