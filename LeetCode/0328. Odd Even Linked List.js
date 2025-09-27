// Medium

// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

// Example 1:
// https://assets.leetcode.com/uploads/2021/03/10/oddeven-linked-list.jpg
// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]

// Example 2:
// https://assets.leetcode.com/uploads/2021/03/10/oddeven2-linked-list.jpg
// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]
 

// Constraints:

// The number of nodes in the linked list is in the range [0, 104].
// -106 <= Node.val <= 106

/*
Important detail: The odd/even classification comes by POSITION IN THE LIST, and NOT the value of the node!
    So our counter will start at 1, not 0.

If we have 0 nodes, return null

we are going to modify the HEAD variable. So we'll create a few variables to keep track of things:
- Odd head
- Odd tail
- Even head
- Even tail

Everytime we visit a node, we check our position counter to determine if it's odd/even
Assign the node to the correct tail
Move the head to the next node

Once the list iteration is over, assign EVEN HEAD to odd tail.
Null the odd tail.

return the Odd head
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
function oddEvenList(head) {
    if (!head) return null

    let oddHead = head
    let oddTail = oddHead
    let evenHead = null
    let evenTail = null
    let positionCounter = 1

    while (head) {
        const currentNode = head
        // console.log(`current - ${currentNode.val}`)
        head = head.next
        // console.log(`current - ${currentNode.val}`)
        // console.log(`current - ${head ? head.val : null}`)
        // console.log(`Even? - ${positionCounter % 2 === 0}`)


        if (positionCounter % 2 === 0) { // Even
            if (!evenHead) {
                evenHead = currentNode
                evenTail = evenHead
            }
            else {
                evenTail.next = currentNode
                evenTail = evenTail.next
            }
        }
        else {
            // console.log(`oddTail = ${JSON.stringify(oddTail.val)}`)
            // console.log(`current - ${currentNode.val}`)
            oddTail.next = currentNode
            oddTail = oddTail.next
            // console.log(`oddTail = ${JSON.stringify(oddTail.val)}`)
        }

        ++positionCounter
    }

    oddTail.next = evenHead
    if (evenTail) evenTail.next = null

    return oddHead
};

// Runtime 2 ms Beats 8.58%
// Memory 59.87 MB Beats 6.84%

// There a more very "dumb" and straight forward way of doing this. Doesn't read as nicely, but it's very concise:
// by Harrison Huang
// public class Solution {
//     public ListNode oddEvenList(ListNode head) {
//         if (head != null) {
        
//             ListNode odd = head, even = head.next, evenHead = even; 
        
//             while (even != null && even.next != null) {
//                 odd.next = odd.next.next; 
//                 even.next = even.next.next; 
//                 odd = odd.next;
//                 even = even.next;
//             }
//             odd.next = evenHead; 
//         }
//         return head;
//     }}