// Given a sorted linked list, delete all duplicates such that each element appear only once.

// Example 1:

// Input: 1->1->2
// Output: 1->2
// Example 2:

// Input: 1->1->2->3->3
// Output: 1->2->3

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function deleteDuplicates(head) {
    if (!head) return null;
    
    let newList = new ListNode(head.val);
    let listHead = newList;
    let tail = head.next;
    
    while (tail) {
        if (notFound(newList, tail.val)) {
            let node = new ListNode(tail.val);
            newList.next = node;
            newList = newList.next;
        }
        tail = tail.next;
    }
    
    return listHead;
};

function notFound(head, val) {
    let tail = head;
    while (tail) {
        if (tail.val === val) return false;
        tail = tail.next;
    }
    
    return true;
}

// This solution is not very efficient. It is a brute force approach.
// If the list is made of dinstinct items, this will take Polynomial complexity. O(n^2)