// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

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
let addTwoNumbers = function(l1, l2) {
    let head = null;
    let tail = head;
    let flip = 0;
    
    while (l1 || l2 || flip) {
        let sum = 0;
        if (l1 && l2) sum = l1.val + l2.val + flip;
        else if (l1) sum = l1.val + flip;
        else if (l2) sum = l2.val + flip;
        else sum = flip;
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        
        flip = 0;
        if (sum >= 10) {
            sum = sum % 10;
            flip = 1;
        }
        
        if (head) {
            tail.next = new ListNode(sum);  
            tail = tail.next;
        } 
        else {
            head = new ListNode(sum);
            tail = head;
        }
    }
    
    return head;
};

// This solution works until we explode the integer limits in JavaScript.
let addTwoNumbers = function(l1, l2) {
    let sum = parseNode(l1) + parseNode(l2);
    sum = new String(sum).split("").map(el => Number(el));
    if (!sum.length) return new ListNode(0);
    
    let head = new ListNode(sum.pop());
    let tail = head;
    while (sum.length) {
        tail.next = new ListNode(sum.pop());
        tail = tail.next;
    }
    
    return head;
};

function parseNode(list) {
    let values = [];
    let pointer = list;
    
    while (pointer) {
        values.push(pointer.val);
        pointer = pointer.next;
    }
    
    let sum = 0;
    for (let i = 0; i < values.length; ++i) {
        sum += values[i] * (10 ** i);
    }
    
    return sum;
}

// This is a proposed solution. Ugly to read, but timple logic, straight forward.
var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1!==null||l2!==null||sum>0){

        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;

    }

    return List.next;
};