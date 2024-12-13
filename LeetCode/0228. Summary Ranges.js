// Easy

// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b
 

// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"
 

// Constraints:

// 0 <= nums.length <= 20
// -231 <= nums[i] <= 231 - 1
// All the values of nums are unique.
// nums is sorted in ascending order.


/*
BRUTE FORCE:
We have to iterate through the whole thing, so there's no better solution than Linear.
Start with an empty array of "results"
Start with an empty array of "currentSequence"
Iterate through the input (until end - 1)
    If currentSequence is empty, push current element.
    If NEXT element is greater than current + 1
        Push the current element to currentSequence
        Push currentSequence into results
        empty out currentSequence
    Otherwise the next value is a valid sequence, so do nothing and keep iterating.
Now we are at the very last element of the array.
If currentSequence is EMPTY, that means the last element was NOT part of the previous sequence
    So we add it doubled to result, like before.
If currentSequence has ONE element, that menas the last element IS part of the previous sequence
    so we add it to currentSequence and push to results.

Now just iterate through the results and format the result into the correct output
    Elements that are "doubled" become a single value.
    then just JOIN the internal arrays with "->".

Linear Time Complexity O(n) - Worst case being 2 iterations.
Linear Space Complexity O(n) - Since worst case we'll triple the input (because we double single elements), which does't have a sequence.
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
function summaryRanges(nums) {
    if (!nums.length) return []

    const result = []
    let currentSequence = []
    for (let i = 0; i < nums.length - 1; ++i) {
        const currentElement = nums[i]
        if (currentSequence.length === 0) currentSequence.push(currentElement)

        if (currentElement + 1 < nums[i + 1]) {
            currentSequence.push(currentElement)
            result.push(currentSequence)
            currentSequence = []
        }
    }

    if (currentSequence.length) currentSequence.push(nums[nums.length - 1])
    else currentSequence = [nums[nums.length - 1], nums[nums.length - 1]]
    result.push(currentSequence)

    return result
            .map(sequence => sequence[0] === sequence[1] ? [sequence[0]] : sequence)
            .map(sequence => sequence.join("->"))
};

// Runtime 0 ms Beats 100.00%
// Memory 48.93 MB Beats 36.04%