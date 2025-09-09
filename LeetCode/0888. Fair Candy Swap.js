// Easy

// Alice and Bob have a different total number of candies. You are given two integer arrays aliceSizes and bobSizes where aliceSizes[i] is the number of candies of the ith box of candy that Alice has and bobSizes[j] is the number of candies of the jth box of candy that Bob has.

// Since they are friends, they would like to exchange one candy box each so that after the exchange, they both have the same total amount of candy. The total amount of candy a person has is the sum of the number of candies in each box they have.

// Return an integer array answer where answer[0] is the number of candies in the box that Alice must exchange, and answer[1] is the number of candies in the box that Bob must exchange. If there are multiple answers, you may return any one of them. It is guaranteed that at least one answer exists.

// Example 1:
// Input: aliceSizes = [1,1], bobSizes = [2,2]
// Output: [1,2]

// Example 2:
// Input: aliceSizes = [1,2], bobSizes = [2,3]
// Output: [1,2]

// Example 3:
// Input: aliceSizes = [2], bobSizes = [1,3]
// Output: [2,3]

// Constraints:

// 1 <= aliceSizes.length, bobSizes.length <= 104
// 1 <= aliceSizes[i], bobSizes[j] <= 105
// Alice and Bob have a different total number of candies.
// There will be at least one valid answer for the given input.

/*
The problem statement is a little convoluted, so let's rephrase it:
Given two DIFFERENT unsorted integer arrays, find which ONE value should be exchanged between the arrays so that the sum of every element in each array is equal.

We don't need to modify the arrays, nor return anything directly from them. We just need the value.
Of course, as a binary search problem, we should use binary search here. BUT considering we didn't know that. We can try something different:

We don't really care how many "repeats" of each element exist in each array, since we can only swap ONE element.

So an approach is:
Sum the arrays
Get the MIDDLE of one of the arrays (doesn't matter which)
    reduce from the sum A
    increase in the sum B
    Does array B has the DIFFERENCE / 2 between them? Search it ...
        If we converted the arrays into hash maps, we can get the result right away.
    If we found it, return the answer.
    Otherwise, move the ARRAY POINTER depending on what the difference is:
        If sum B is GREATER than sum A, then we need to give up a SMALLER value, so B can compensate. (move to left side)
        Otherwise sum B is SMALLER than sum A, so we want to give up a HIGHER value to compensate. (move to right side)

Since we're guaranteed an answer, this will eventually find the value. Without this guaranteed, we would return an "impossible to balance" flag/error.

By sorting the inputs we have N Log N
Then binary searching through it we'll have Log N * Log N, so... Log Linear Polynomial o.O? O(N Log N + Log N ^2)

Since N Log N is orders of magnitude higher than Log N ^ 2, then our time complexity is:
Log Linear O(N Log N)
Constant Space O(1) - sice we only use a few variables that don't grow with input.
*/

/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
function fairCandySwap(aliceSizes, bobSizes) {
    const sumAlice = aliceSizes.reduce((sum, value) => sum + value)
    const sumBob = bobSizes.reduce((sum, value) => sum + value)
    console.log(`sumAlice = ${sumAlice}`)
    console.log(`sumBob = ${sumBob}`)
    
    // Do we need to sort the inputs? Let's try without sorting right now...
    // Yeah, it did not work. There are unsorted inputs.
    bobSizes.sort((a, b) => a - b)
    for (const currentElement of aliceSizes) {
        const target = -(((sumAlice - currentElement) - (sumBob + currentElement)) / 2) // This is the DELTA between the two values.
        console.log(`currentElement = ${currentElement}`)
        console.log(`Target is ${target}`)

        let bobStart = 0
        let bobEnd = bobSizes.length - 1
        while (bobStart <= bobEnd) {
            const bobMiddle = Math.floor((bobEnd - bobStart) / 2) + bobStart; // So we don't hit an INT overflow.
            console.log(`bobMiddle (${bobMiddle}) = ${bobSizes[bobMiddle]}`)

            const bobTarget = bobSizes[bobMiddle]
            if (bobTarget === target) return [currentElement, bobTarget]

            if (bobTarget > target) bobEnd = bobMiddle - 1
            else bobStart = bobMiddle + 1
        }
    }
    // Since we are GUARANTEED an answer, this method should never return undefined.
};

// Runtime 25 ms Beats 38.32%
// Memory 61.39 MB Beats 74.85%

// Since we're doing a binary search instead of checking for the compliment in B, it is a little less eficient than the other solutions submited.

// https://leetcode.com/problems/fair-candy-swap/solutions/3442225/brute-force-binary-search-hashmap/
// This solution has a decent breakdown of the Target formula:
// A_total - A[i] + B[j] = B_total - B[j] + A[i]
// B[j] + A_total - A[i] + B[j] = B_total + A[i]
// 2 * B[j] + A_total - A[i] = B_total + A[i]
// 2 * B[j] + A_total = B_total + A[i] + A[i]
// 2 * B[j] + A_total = B_total + 2 * A[i]
// 2 * B[j] = B_total - A_total + 2 * A[i]
// B[j] = (B_total - A_total + 2 * A[i]) / 2




