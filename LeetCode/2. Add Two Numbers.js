

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