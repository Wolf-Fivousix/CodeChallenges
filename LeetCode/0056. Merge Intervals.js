// Medium

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// Brute Force
// Create a 10^4 array of "seconds"
// Iterate through input, from start to finish, iterate on our seconds array.
// Anything that is false/0, make true/1.
// At the end, just iterate once again through seconds array and construct the result array.

// Very ineficient, Polynomial Time complexity O(N2).

// Better Approach: Analyze the ranges as we go.
    // We don't need to handle improper intervals.
    // And we are GUARANTEED at least 1 interval (but if we were'not, we could just add a check at the beggining and rerturn early if input is empty)
    // BUT WE'RE CONSIDERING A SORTED INPUT by "start" times. (otherwise this approach doesn't work)
// Start our result array empty.
// We have 2 counters, currentStart and currentEnd. They both start at the values in our FIRST element.
// We iterate through intervals input from THE SECOND element.
    // If there's not element, work is over.
    // If start is OUTSIDE current range
        // save current range to result
        // update current range with current values
    // Else, let's update the end of the current range.
        // if currentEnd is LESSER than elementEnd, update currentEnd. (if elementEnd is lower, there's no need to update)
// Save the current ranges in the result array.
// Return answer.

// This solution will be Linear Time Complexity.

// THE CATCH is that the input most likely will NOT be sorted.
// So if we add sorting the input array at the beginning, we bring our final efficencity to:
// Log Linear Time Complexity O(N * logN)
// Linear Space Complexity O(N) (we're re-creating the array with sorting AND worst case scenario the inputs have NO overlap, which would result in a second array the same size as N)

function saveElementToResult(result, start, end) {
    result.push([start, end]);
}

function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];

    let startRange = intervals[0][0];
    let endRange = intervals[0][1];

    for (let i = 1; i < intervals.length; ++i) {
        const start = intervals[i][0];
        const end = intervals[i][1];

        if (start > endRange) {
            saveElementToResult(result, startRange, endRange);
            startRange = start;
            endRange = end;
        }
        else  if (endRange < end) endRange = end;
    }
    saveElementToResult(result, startRange, endRange);

    return result;
};

// Runtime: 72 ms, faster than 99.11% of JavaScript online submissions for Merge Intervals.
// Memory Usage: 41 MB, less than 43.23% of JavaScript online submissions for Merge Intervals.

// ===============================
// 2025 - Re-do version:
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Example 3:
// Input: intervals = [[4,7],[1,4]]
// Output: [[1,7]]
// Explanation: Intervals [1,4] and [4,7] are considered overlapping.
 

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

/*
Very similar to the Scheduling Problem, except in this case the input is NOT SORTED.
We can solve the same way we did in the 57 Insert Interval problem, just sorting the array before hand.

Let's see how that performs:
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    const sortedIntervals = intervals.toSorted((a, b) => a[0] - b[0])
    // We iterate through length - 1 because the LAST element doesn't have a "next" one to check, so we don't need to check it.
    // This also ensures we always have a "next" element to check with i + 1 and we are not out of bounds when updating the array length.
    for (let i = 0; i < sortedIntervals.length - 1; ++i) {
        const currentEnd = sortedIntervals[i][1]
        const nextStart = sortedIntervals[i+1][0]
        if (currentEnd >= nextStart) {
            // Update current ending with next ending.
            sortedIntervals[i][1] = Math.max(sortedIntervals[i][1], sortedIntervals[i+1][1])
            // Remove next element inplace
            sortedIntervals.splice(i + 1, 1)
            // Retain i to we can check the new next element
            --i
        }
    }

    return sortedIntervals
};

// Runtime 14 ms Beats 24.01%
// Memory 63.89 MB Beats 86.15%
