// W3D4 B - Reverse a Linked List

// You are given the pointer to the head node of a linked list. Your goal is to reverse this list.
// A linked list is implemented using just a Node class, which you will be given. The Node class is defined as:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// Your function should take in just the head node, reverse the list, and return the new head node (which would be the old tail node).
//  Remember that an empty linked list is still a valid linked list. If null is passed into your function, your function should return null.

// Note that this class does not have a previous attribute. Make sure your partner is using a Node object similar to the one above!

// Create temporary variables like: currentNode(head), resultHead (null).
// Iterate through the given LinkedList - while currentNode is VALID (not null).
    // Because we will be changing the references of the node in the LinkedList, we gotta hold unto our references.
    // Save the reference: Declared nextNode as currentNode.next.
    // currentNode.next will point to our resultHead (first time it will be null).
    // Move the resultHead forward: resultHead = currentNode.
    // currentNode takes on the previously saved reference, nextNode.
// return the resultHead

function reverseLinkedList(head) {
    let currentNode = head;
    let resultHead = null;

    while (currentNode) {
        const nextNode = currentNode.next;

        currentNode.next = resultHead;
        resultHead = currentNode;

        currentNode = nextNode;
    }

    return resultHead;
}

// Because we have to traverse the whole list in order to reverse it, there is not better way than Linear Time Complexity.
// All we do here is add a couple pointers to hold the reference. So, as we change the input, we have Constant Space Complexity.
// If we did NOT want to change the input, then we would have to make a new list, bumping it to Linear Space as well.