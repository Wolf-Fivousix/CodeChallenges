// Easy

// At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

// Note that you do not have any change in hand at first.

// Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.

 

// Example 1:

// Input: bills = [5,5,5,10,20]
// Output: true
// Explanation: 
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.
// Example 2:

// Input: bills = [5,5,10,10,20]
// Output: false
// Explanation: 
// From the first two customers in order, we collect two $5 bills.
// For the next two customers in order, we collect a $10 bill and give back a $5 bill.
// For the last customer, we can not give the change of $15 back because we only have two $10 bills.
// Since not every customer received the correct change, the answer is false.
 

// Constraints:

// 1 <= bills.length <= 105
// bills[i] is either 5, 10, or 20.

/*
"BRUTE FORCE":
In quotes because the ORDER of the operations here is very important. So the best we can do still is linear processing of the input!

declare an object with 5, 10, 20 entries (we are not going to use the 20 entry, but since we are already doing this work we can store the data for future expansion/refactor).
Iterate through the input
    For each customer/bill calculate the change
    If 15 we need a 10 + 5 or 3x 5
        We ALWAYS want to use the bigger bills FIRST, since smaller bills give us more flexibility.
    If 5 we need 1x 5
    If 0 no change is needed

    IF ANY OF THESE FAIL, then we can return false immediately, since we ran out of change.
return true

Linear Time Complexity O(n) - We do need to iterate through the whole input
Constant Space Complexity O(1) - We are storing a few variables, but they don't grow with input.

*/

/**
 * @param {number[]} bills
 * @return {boolean}
 */
function lemonadeChange(bills) {
    const changeBox = {
        5: 0,
        10: 0,
        20: 0,
    }

    for (let i = 0; i < bills.length; ++i) {
        const bill = bills[i]
        const change = bill - 5;
        switch (change) {
            case 15:
                if (changeBox[10] > 0 && changeBox[5] > 0 ) {
                    changeBox[10] -= 1
                    changeBox[5] -= 1
                } else {
                    changeBox[5] -= 3
                }
                break
            case 5:
                changeBox[5] -= 1
                break
            case 0:
                // No change needed from the changeBox! =)
            default:
                // do nothing or throw an error
        }
        changeBox[bill] += 1

        const shortChanged = Object.values(changeBox).some(billsOnHand => billsOnHand < 0)
        if (shortChanged) return false
    }

    return true
};

// Runtime 13 ms Beats 21.75%
// Memory 63.35 MB Beats 11.99%

[
    [5,5,5,10,20],
    [5,5,10,10,20],
].forEach((input) => {
    lemonadeChange(input)
})

