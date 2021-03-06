// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
    let flip = 1;

    for (let i = digits.length - 1; i > -1; --i) {
        digits[i] += flip;
        flip = 0;
        
        if (digits[i] < 10) break;
        
        digits[i] = digits[i] % 10;
        flip = 1;
    }
    
    if (flip) digits.unshift(1);
    
    return digits;
};

// Simpler approach from community answers:
var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--) {
      if(digits[i] === 9){
        digits[i] = 0;
      }
      else {
        digits[i]++;
        return digits;
      }
    }

    return [1, ...digits];
};

// Refactored simpler solution:
function plusOne(digits) {
    for (let i = digits.length -1; i > -1; --i) {
        if (++digits[i] > 9) digits[i] = 0;
        else return digits;
    }
    digits.unshift(1);
    return digits;
}

/*
Despite all changes and variations, no significant difference is felt on the testing results.
*/