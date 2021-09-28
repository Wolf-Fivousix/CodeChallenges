// Medium
// Given the head of a linked list, rotate the list to the right by k places.

 

// Example 1:
// https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:
// https://assets.leetcode.com/uploads/2020/11/13/roate2.jpg

// Input: head = [0,1,2], k = 4
// Output: [2,0,1]
 

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
    // Iterate once through the list and find it's size.
    // Mod the rotation by size:
        // so if size is 3 and we rotate 3 times, there's no rotation needed.
        // If size is 6 and we rotate 7, we rotate only once.
    
    // BRUTE FORCE:
    // Iterate through the list until last element.
    // Grab it
    //  and then modify head.
    // This will be Log N * M, where N is the rotations and M is the size of our list.

    // Little better:
    // We have the size and the rotations. Get the delta/difference between them.
    // Save a reference to current head/start.
    // Traverse the list until we're at DELTA elements from the end.
    // Modify that to be the head
    // Modify the previous to point to null (now is tail of list)
    // Iterate through the current head until we reach the end (use currentNode.next)
    // Modify the last element to point to previous head.

    // return head.

function rotateRight(head, k) {
    if (!k) return head;
    // Get size of list.
    let currentNode = head;
    let size = 0;
    while (currentNode) {
        ++size;
        currentNode = currentNode.next;
    }
    if (size < 2) return head;
    
    const originalHead = head;
    let previousNode = null;
    const delta = k % size;
    if (!delta) return head;
    
    currentNode = head;
    for (let i = 0; i < size - delta; ++i) {
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
    
    // Modify new tail.
    previousNode.next = null;
    // Modify new head.
    head = currentNode;
    // Get old tail and connect with previous head.
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = originalHead;
    
    return head;
};

// Runtime: 76 ms, faster than 96.25% of JavaScript online submissions for Rotate List.
// Memory Usage: 40.6 MB, less than 40.68% of JavaScript online submissions for Rotate List.