// Easy 

// Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).

 

// Example 1:

// Input: 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
// Example 2:

// Input: 00000000000000000000000010000000
// Output: 1
// Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
// Example 3:

// Input: 11111111111111111111111111111101
// Output: 31
// Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
 

// Note:

// Note that in some languages such as Java, there is no unsigned integer type. In this case, the input will be given as signed integer type and should not affect your implementation, as the internal binary representation of the integer is the same whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3 above the input represents the signed integer -3.
 

// Follow up:

// If this function is called many times, how would you optimize it?

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
	const binary = n.toString(2).split("");
	return binary.reduce((count, digit) => digit == true ? ++count : count, 0);
}

// Runtime: 108 ms, faster than 15.61% of JavaScript online submissions for Number of 1 Bits.
// Memory Usage: 38 MB, less than 9.94% of JavaScript online submissions for Number of 1 Bits.

// Constant Time and Space complexity. Because the input is always a 32bit integer, the ammount of work
// we do and space used never changes.

// Solution by mmartire.
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let sum = 0;
    
    while(n != 0) {
        sum += n & 1;
        n = n >>> 1;
    }
    
    return sum;
};

// I'm adding this solution for the usage of AND.
// The work is similar, without the conversion into a binary string.
// He AND's the number to 000000001. Which means, if the first digit of N is 1, we'll get 1.
// Otherwise, it will be 0. So it just sums that up to a counter.
// And then it uses the "unsigned right sfhit" >>> to reduce the number. (same as dividing by 2).

// From W3 School
// >>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
// >>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

// Solution by valaamm
// This is a smart trick that I found intersting.
var hammingWeight = function(n) {
    return n.toString(2).split('1').length - 1;
};