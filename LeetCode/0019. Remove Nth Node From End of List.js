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

