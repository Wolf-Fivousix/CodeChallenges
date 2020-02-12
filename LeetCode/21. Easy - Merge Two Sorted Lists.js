// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) return null;
    if (!l1) return l2;
    if (!l2) return l1;
    
    let list1 = l1;
    let list2 = l2;
    let head = null;
    if (list1.val <= list2.val) {
        head = { val: list1.val, next: null };
        list1 = list1.next;
    }
    else {
        head = { val: list2.val, next: null };
        list2 = list2.next;
    }
    
    let tail = head;
    
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            tail.next = { val: list1.val, next: null };
            list1 = list1.next;
        }
        else {
            tail.next = { val: list2.val, next: null };
            list2 = list2.next;
        }
        tail = tail.next;
    }
    
    if (list1) {
        while(list1){
            tail.next = { val: list1.val, next: null };
            list1 = list1.next;
            tail = tail.next;
        }
    }
    else {
        while(list2){
            tail.next = { val: list2.val, next: null };
            list2 = list2.next;
            tail = tail.next;
        }
    }
    
    
    return head;
};
