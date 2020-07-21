// Easy

// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

// Example: 

// Input: 19
// Output: true
// Explanation: 
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// We know for sure that we start with a positive integer. Great.
// What about 0? Edge case, let’s handle that.
// declare an empty set called visited.
// loop while n is greater than 1.
	// check visited set. Is value present? Return false.
	// split the digits.
	// calculate the power of 2 for each.
	// sum them up.
// update N with the new sum.
// in the end, return true.

/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
	const visited = new Set();

	while (n > 1) {
		if (visited.has(n)) return false;
		else visited.add(n);

		let sum = 0;
		while (n > 0) {
			const digit = n % 10;
			sum += digit * digit;
			n = Math.floor(n / 10);
        }

        n = sum;
    }

    return n === 1;
}

// Runtime: 88 ms, faster than 46.34% of JavaScript online submissions for Happy Number.
// Memory Usage: 37.7 MB, less than 52.18% of JavaScript online submissions for Happy Number.

// I'm not quite sure of what the runtime for this would be.... The value 100 will give a linear run time.
// while the number 123 will give a very different runtime, even though it is not that bigger than 100.
// I would risk Polynomial. Just because I know a lot of work can happen.

// For the Space though, that's a little more clear. Worst case we will grow our Set to every single possible number.
// Until we hit a repeated value. So Polynomial Space Complexity.