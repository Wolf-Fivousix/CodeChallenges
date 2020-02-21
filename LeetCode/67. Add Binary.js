// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
    let valueA = a.split("").map(c => parseInt(c));
    let valueB = b.split("").map(c => parseInt(c));
    let sum = [];
    let bitRoll = false;
    while(valueA.length > 0 && valueB.length > 0) {
        let currentBit = valueA.pop() + valueB.pop();
        if (bitRoll) { ++currentBit; bitRoll = false; }
        switch (currentBit) {
            case 3:
                sum.push(1);
                break;
            case 2:
                sum.push(0);
                bitRoll = true;
                break;
            default:
                sum.push(currentBit);
        }
    }
    if (bitRoll) {
        let nextBit = 0;
        valueA.length ? nextBit = valueA.pop() : nextBit = valueB.pop();
        nextBit ? sum.push(0, 1) : sum.push(1);
    }
    else if (valueA.length > 0 || valueB.length > 0) {
        valueA.length ? sum.push(valueA.pop()) : sum.push(valueB.pop());
        
    }
    else sum.concat(valueA.reverse(), valueB.reverse()); 
    
    console.log(sum);
    return sum.reverse().map(v => v.toString()).join("");
};

// This approach is not working on the case of "1" and "1111".... Over complicated solution, needs to be redesigned.