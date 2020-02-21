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
    let valueA = a.split("").map(c => parseInt(c));
    let valueB = b.split("").map(c => parseInt(c));
    let sum = [];
    let bitRoll = false;
    
    while(valueA.length > 0 || valueB.length > 0) {
        let bitA = valueA.length > 0 ? parseInt(valueA.pop()) : 0;
        let bitB = valueB.length > 0 ? parseInt(valueB.pop()) : 0;
        let currentBit = bitA + bitB;
        
        if (bitRoll) { ++currentBit; bitRoll = false; }
        
        switch (currentBit) {
            case 3:
                sum.push(1);
                bitRoll = true;
                break;
                
            case 2:
                sum.push(0);
                bitRoll = true;
                break;
                
            default:
                sum.push(currentBit);
        }
    }
    
    if (bitRoll) sum.push(1);

    return sum.reverse().map(v => v.toString()).join("");
};