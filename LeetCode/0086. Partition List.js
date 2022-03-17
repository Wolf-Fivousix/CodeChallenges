// Medium
// https://leetcode.com/problems/partition-list/

// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

 

// Example 1:
// https://assets.leetcode.com/uploads/2021/01/04/partition.jpg

// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]
// Example 2:

// Input: head = [2,1], x = 2
// Output: [1,2]
 

// Constraints:

// The number of nodes in the list is in the range [0, 200].
// -100 <= Node.val <= 100
// -200 <= x <= 200
/*
1. What happens when there's an empty head? -> Return empty head

"Brute Force with 4 pointers"
    Assumption 1: We do not need the original head, we can return a new list.
    Assumption 2: We don't care about the left over elements. Meaning, we probably have a garbage collector to clean up for us.
define a "lesserThan" head, points to null.
define a "lesserThan" tail, points to null.
define a "greaterThan" head, points to null.
define a "greaterThan" tail, points to null.
Iterate through original list until "head" is null
    define currentNode as head.
    if currentNode value is lesser than X, add this node (currentNode) to "lesserThan list".
        if "lesserThan" head is null
            head points to currentNode.
        else
            tail NODE points to CurrentNode.
        tail points to CurrentNode.
        tail.next updates to null
    else (greater or equal than X), put it to "greaterThan" list. (by making head point to it).
        if "greaterThan" head is null
            head points to currentNode.
        else
            tail node points to currentNode
        tail points to currentNode
        tail.next updates to null

Merge tail node of "lesserThan" list to head of "greaterThan" list.

return "lesserThan" head.


We are not really duplicating the list, just moving pointers thorugh the variables, so we have a Constant Space complexity. O(1)
We also iterate through the list once, so we get Linear Time complexity. O(N)

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function partition(head, partionValue) {
    let lesserThanHead = null;
    let lesserThanTail = null;
    let greaterThanHead = null;
    let greaterThanTail = null;
    while (head) {
        const currentNode = head;
        head = head.next;
        if (currentNode.val < partionValue) {
            if (!lesserThanHead) lesserThanHead = currentNode;
            else lesserThanTail.next = currentNode;
            lesserThanTail = currentNode;
            lesserThanTail.next = null;
        }
        else {
            if (!greaterThanHead) greaterThanHead = currentNode;
            else greaterThanTail.next = currentNode;
            greaterThanTail = currentNode;
            greaterThanTail.next = null;
        }
    }

    if (lesserThanHead) lesserThanTail.next = greaterThanHead;
    else lesserThanHead = greaterThanHead;

    return lesserThanHead;
};

function printList(listHead) {
    let currentNode = listHead;
    while (currentNode) {
        console.log(currentNode.val);
        currentNode = currentNode.next;
    }
}

// Did not run this locally since the elements are passed as an Array
// and I did not want to build the LinkedList from scratch.

// Runtime: 86 ms, faster than 67.14% of JavaScript online submissions for Partition List.
// Memory Usage: 43.8 MB, less than 53.57% of JavaScript online submissions for Partition List.