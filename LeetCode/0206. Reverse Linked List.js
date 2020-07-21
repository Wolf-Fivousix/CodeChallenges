// Easy

// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

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
function reverseList(head) {
    let newHead = null;
    
    while (head) {
        const node = new ListNode(head.val, newHead);
        newHead = node;
        head = head.next;
    }
    
    return newHead;
}

// Runtime: 84 ms, faster than 28.96% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 38.6 MB, less than 5.09% of JavaScript online submissions for Reverse Linked List.

// Linear Time and Space complexity.
// Iterate through list once, make a new list with all those values.