// Easy

// You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

// To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

// If k > 0, replace the ith number with the sum of the next k numbers.
// If k < 0, replace the ith number with the sum of the previous k numbers.
// If k == 0, replace the ith number with 0.
// As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

// Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

 

// Example 1:

// Input: code = [5,7,1,4], k = 3
// Output: [12,10,16,13]
// Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.
// Example 2:

// Input: code = [1,2,3,4], k = 0
// Output: [0,0,0,0]
// Explanation: When k is zero, the numbers are replaced by 0. 
// Example 3:

// Input: code = [2,4,9,3], k = -2
// Output: [12,5,6,13]
// Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the numbers wrap around again. If k is negative, the sum is of the previous numbers.
 

// Constraints:

// n == code.length
// 1 <= n <= 100
// 1 <= code[i] <= 100
// -(n - 1) <= k <= n - 1

/*
K is guaranteed to not go beyond the boundaries of the array. This is a great start!
If K is 0, we return an array filled with 0's, straight forward!
Regardless of K being positive or negative, we will be doing the SUM of K elements. If positive, to the right, if negative, to the left.
This means we can use a "sliding window" and construct our decrypted array. If the index is out of bounds, we just adjust accordinly

If K is positive, the sliding window goes "ahead" of I (i + K)
If K is negative, the sliding window goes "behid" of I (i + (-K))

Since we do not want to re-calculate the sum every single time we slide the window, we can keep a running sum and then just adjust as we move through i. (which is also the previous i element we just calculated)

Linear Time Complexity O(n)
Linear Space Complexity O(n) - We are creating a new array the same size of our input.
*/

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
function decrypt(code, k) {
    if (k === 0) return new Array(code.length).fill(0)
    if (k > 0) return decryptPositive(code, k)
    
    return decryptNegative(code, k)
};

function decryptPositive(code, k) {
    let runningSum = 0
    for (let i = 1; i <= k; ++i) {
        runningSum += code[i]
    }

    const decryptedArray = [runningSum]
    for (let i = 1; i < code.length; ++i) {
        runningSum -= code[i]
        runningSum += code[compensateIndex(i, k, code.length)]
        decryptedArray.push(runningSum)
    }

    return decryptedArray
}

function decryptNegative(code, k) {
    let runningSum = 0
    for (let i = 0; i < Math.abs(k); ++i) {
        runningSum += code[compensateIndex(i, k, code.length)]
    }
    const decryptedArray = [runningSum]
    for (let i = 0; i < code.length - 1; ++i) {
        runningSum -= code[compensateIndex(i, k, code.length)]
        runningSum += code[i]
        decryptedArray.push(runningSum)
    }

    return decryptedArray
}

function compensateIndex(i, k, limit) {
    if (i + k >= limit) return (i + k) % limit
    else if (i + k < 0) return limit + i + k
    
    return i + k
}

[
    [[5,7,1,4], 3, [12,10,16,13]],
    [[2,4,9,3], -2, [12,5,6,13]],
].forEach(([arrayInput, k, answer]) => {
    console.log(decrypt(arrayInput, k))
})

// Runtime 0 ms Beats 100.00%
// Memory 49.11 MB Beats 98.74%