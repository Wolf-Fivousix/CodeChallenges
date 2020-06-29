// Medium

// Initially on a notepad only one character 'A' is present. You can perform two operations on this notepad for each step:

// Copy All: You can copy all the characters present on the notepad (partial copy is not allowed).
// Paste: You can paste the characters which are copied last time.
 

// Given a number n. You have to get exactly n 'A' on the notepad by performing the minimum number of steps permitted. Output the minimum number of steps to get n 'A'.

// Example 1:

// Input: 3
// Output: 3
// Explanation:
// Intitally, we have one character 'A'.
// In step 1, we use Copy All operation.
// In step 2, we use Paste operation to get 'AA'.
// In step 3, we use Paste operation to get 'AAA'.
 

// Note:

// The n will be in the range [1, 1000].

/**
 * @param {number} n
 * @return {number}
 */
function minSteps(n) {
	let steps = 0;
	
	while (n > 1) {
		const divisor = findDivisor(n);
		steps += divisor;
		n /= divisor;
    }

    return steps;
}

function findDivisor(n) {
	let divisor = 2;
	while (n % divisor !== 0) ++divisor;
    return divisor;
}

// Runtime: 68 ms, faster than 87.04% of JavaScript online submissions for 2 Keys Keyboard.
// Memory Usage: 33.4 MB, less than 85.71% of JavaScript online submissions for 2 Keys Keyboard.

// Most cases are Logaritimic Time Complexity, as we can keep dividing the input by 2.
// Worst case scenario, however, would be with a Prime Number. In that case our findiDivisor function
// will have to iterate from 2 to PRIME in order to find the dividing factor. Making it Linear Time Complexity.

// Constant Space Complexity, very good.