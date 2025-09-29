// Medium

// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1:
// https://assets.leetcode.com/uploads/2021/01/04/linkedlist1.jpg
// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

// Example 2:
// https://assets.leetcode.com/uploads/2021/01/04/linkedlist2.jpg
// Input: head = [1,1,1,2,3]
// Output: [2,3]
 
// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

/*
BRUTE FORCE (2 pass)
Move once through the list, identify every repeated value
Move a second time, if the node is a repeated value, delete it.

Can we make it better?
The list is sorted, so we can leverage that.
We know that if the NEXT value is the same as CURRENT, we'll need to delete it.
So if the NEXT value is DIFFERENT FROM CURRENT, we can just proceed with the iteration.
How do we delete?
And how do we know that the LAST duplicate element (right before the next one) also gets deleted?
    1) We can keep track of a duplicate elements and if that element is in the list, then delete them
    2) We can iterate until the duplicate ends, and then simply remove the reference there.
    Approach #1 is decent, but we'll use more memory, which is the whole reason we're going with the "one pass" version. So let's go with #1
    Implementation: The moment we find a repeated next, we'll move the pointer forward until .next is a different number. Then we connect the two.
    This will effectively "lose" the references to this portion of the list, leaving it to garbage collection.


There's no order of magnitude performance difference between the two approaches, they'll both be linear.
That said, for a long enough list, or something that doesn't fit in memory, the second approach is better.

Linear Time Complexity O(N) - Iterating once through the list
Constant Space Complexity O(1) - We're not building a new list and just modifying node references.
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
 * @return {ListNode}
 */
function deleteDuplicates(head) {
    if (!head) return null

    // Handle edge case where head is already a repeating value.
    let repeatFlag = head.val === head.next?.val
    while (repeatFlag) {
        const repeatValue = head.val
        while (head?.val === repeatValue) {
            head = head.next
        }
        if (!head || head.val !== head.next?.val) {
            repeatFlag = false
        }
    }

    let lastUniqueNode = head
    let currentNode = lastUniqueNode?.next

    while (currentNode) {
        // Next node val is the same as currentNode's value = We found a duplicate.
        if (currentNode.val === currentNode.next?.val) {
            // console.log(`Next is duplicate of ${currentNode.val}`)
            let tail = currentNode.next
            while (tail?.val === currentNode.val) { // If we reach end of list, then tail will be null.
                // console.log(`tail.val = ${tail.val}`)
                tail = tail.next
            }
            // currentNode IS a duplicate, so we erase it as well
            // console.log(`tail.val = ${tail?.val}`)
            // console.log(`lastUniqueNode = ${lastUniqueNode.val}`)
            currentNode = tail
            lastUniqueNode.next = tail
        } else {
            currentNode = currentNode.next
            lastUniqueNode = lastUniqueNode.next
        }

    }

    return head
};

// Runtime 1 ms Beats 56.71%
// Memory 58.41 MB Beats 9.24%

// A interesting approach that would eliminate my need for the "head edge case" is to create a FAKE previous node.
// Having the previous node pointer (which would act as my lastUniqueNode) now the edge case of having to move the HEAD disappears.
// Solution by Pratik
// var deleteDuplicates = function(head) {
//     // Special case...
//     if (head == null || head.next == null)
//         return head;
//     // create a fake node that acts like a fake head of list pointing to the original head and it points to the original head......
//     var fake = new ListNode(0);
//     fake.next = head;
//     var curr = fake;
//     // Loop till curr.next and curr.next.next not null
//     while(curr.next != null && curr.next.next != null){         // curr.next means the next node of curr pointer and curr.next.next means the next of next of curr pointer...
//         // if the value of curr.next and curr.next.next is same...
//         // There is a duplicate value present in the list...
//         if(curr.next.val == curr.next.next.val) {
//             let duplicate = curr.next.val;
//             // If the next node of curr is not null and its value is eual to the duplicate value...
//             while(curr.next !=null && curr.next.val == duplicate) {
//                 // Skip those element and keep updating curr...
//                 curr.next = curr.next.next;
//             }
//         }
//         // Otherwise, move curr forward...
//         else{
//             curr = curr.next;
//         }
//     }
//     return fake.next;       // Return the linked list...
// };