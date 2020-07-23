// Easy 

// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
    let sequence = [];
    
    while (head) {
        sequence.push(head.val);
        head = head.next;
    }
    
    let left = 0;
    let right = sequence.length - 1;
    while (left < right) {
        if (sequence[left] !== sequence[right]) return false;
        ++left;
        --right;
    }
    
    return true;
}

// Runtime: 76 ms, faster than 76.43% of JavaScript online submissions for Palindrome Linked List.
// Memory Usage: 41.4 MB, less than 20.00% of JavaScript online submissions for Palindrome Linked List.

// For this I decided to convert the Single Liked List into an array.
// By using memory we can circunvent the issues with traversing the list multiple times.
// This makes for Linear Time and Space complexity.

// For the follow up, though, how can we still do this in linear time and constant memory?
// I can think of doing the traversal Polynomial and checking from end to start of the list...