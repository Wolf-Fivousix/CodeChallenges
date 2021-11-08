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