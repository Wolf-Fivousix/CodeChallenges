// Medium

// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Note that you don't need to modify intervals in-place. You can make a new array and return it.

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 

// Constraints:

// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 105
// intervals is sorted by starti in ascending order.
// newInterval.length == 2
// 0 <= start <= end <= 105

/*
Very simillar to the Program Scheduling problem.
In this variation, we also merge the intervals, so we don't need to wory about overriding data.
And since the output doesn't necessarily represent the input, having a new data structure that will hold the information and then process the correct output sounds like a good approach.

BRUTE FORCE:
Similar to Program Scheduling problem, we'll just create an array of X intervals. (Imagine BITS in a sequence)
    Since X here is a variable and not "minutes of a day", we scan the inputs once to calculate how big it should be
We then iterate through both inputs adding 1 in every interval that HAS a schedule.

Once we're done, traverse this data structure once more, outputting the ranges that have 1.
    When we find a 1, we add the start.
    When we find a 0, we add the end to the open range.
    That's the idea, we just need to structure the logic details so we don't end the result with something like [0,] because the array is full of 1's.

return the processed input
*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
    // Let's find how big the array needs to be.
    let dataSize = newInterval[1]
    for (const interval of intervals) {
        dataSize = Math.max(dataSize, interval[1])
    }

    const intervalBits = new Array(dataSize).fill(0)
    // Fill the existing bits
    for (const interval of intervals) {
        for (let i = interval[0]; i <= interval[1]; ++i) {
            intervalBits[i] = 1
        }
    }
    // Fill new interval
    for (let i = newInterval[0]; i <= newInterval[1]; ++i) {
        intervalBits[i] = 1
    }

    // Process output
    const result = []
    let currentSequence = []
    let sequenceStarts = true
    for (let i = 0; i < intervalBits.length; ++i) {
        if (intervalBits[i] === 1 && sequenceStarts) {
            currentSequence.push(i)
            sequenceStarts = false
        }

        // Sequence immediately ended.
        if (intervalBits[i] === 0 && i - 1 >= 0 && intervalBits[i - 1] === 1) {
            currentSequence.push(i)
            result.push(currentSequence)
            currentSequence = []
            sequenceStarts = true
        }
    }

    // Handle sequence that ends in 1, like: [...,1,1,1]
    if (currentSequence.length) {
        currentSequence.push(intervalBits.length)
        result.push(currentSequence)
    }

    return result
};
// THIS APPROACH DID NOT WORK!
// Because the "range gap" that is not a gap, has to be a gap!
// For example:
// A range 0,2 -> 1,1,1,0,0
// A range 3,4 -> 0,0,0,1,1
// Will be 0,5 -> 1,1,1,1,1
// BUT, output wise, 0,2 and 3,4 are TWO DIFFERENT INTERVALS!
// So the correct answer here is [0,2],[3,4] and NOT [0,5] =/

/*
We have 2 cases:
If newInterval END is BEFORE first start
If newInterval START is AFTER last end
Iterate through input
    // The newInterval is OUTSIDE all existing ranges
    Both start and end are BEFORE start of current range.
        Insert range into this position and return the new array.
    // The newInterval is WITHIN an existing range
    If start or end is WITHIN an existing range
        if the START is within the range, no change needed.
        Otherwise, update START
        if the END is within the range, no change needed.
            otherwise, update END
        
Process the ranges to see if the modified range encompasses other entries in the array. (for loop with i)
    If the END of CURRENT element is greater or equal than the START of the NEXT element
        merge them into ONE
        (This will make the array shorter, but won't invalidate this i)
        Decrease i by 1 so we can evaluate the newly changed element

return the new version
*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
    if (!intervals.length) return [newInterval]

    // newInterval END is BEFORE first start.
    if (newInterval[1] < intervals[0][0]) {
        intervals.unshift(newInterval)
        return intervals
    }
    // newInterval START is AFTER last end.
    if (newInterval[0] > intervals[intervals.length - 1][1]) {
        intervals.push(newInterval)
        return intervals
    }

    for (let i = 0; i < intervals.length; ++i) {
        const interval = intervals[i]
        const newStart = newInterval[0]
        const newEnd = newInterval[1]
        console.log(i, "-", interval, ":", intervals)

        // Both start and end are BEFORE start of current range.
        if (newStart < interval[0] && newEnd < interval[0]) {
            return intervals.splice(i, 0, newInterval)
        }

        // If start or end are WITHIN an existing range, update existing range
        if ((newStart >= interval[0] && newStart <= interval[1])
         || (newEnd >= interval[0] && newEnd <= interval[1])) {
            if (newStart < interval[0]) {
                interval[0] = newStart
            }
            if (newEnd > interval[1]) {
                interval[1] = newEnd
            }
            break
        }
    }
    

    for (let i = 0; i < intervals.length - 1; ++i) {
        console.log(intervals)
        const [currentStart, currentEnd] = intervals[i]
        if (currentEnd >= intervals[i + 1][0]) {
            console.log("Splicing and redoing")
            intervals.splice(i, 2, [Math.min(currentStart, intervals[i+1][0]), Math.max(currentEnd, intervals[i + 1][1])])
            --i
        }
    }

    return intervals
};
// This one passes 141/158 test cases... Let's modify a bit

// We no longer care about the END time. As long as we position the START in the right place, a large enough "end time" will "eat"
// the next ranges in order.

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
    if (!intervals.length) return [newInterval]
    const originalLength = intervals.length

    for (let i = 0; i < intervals.length; ++i) {
        const interval = intervals[i]
        const newStart = newInterval[0]
        console.log(i, "-", interval, ":", intervals)

        // newStart is BEFORE start of current range.
        if (newStart < interval[0]) {
            intervals.splice(i, 0, newInterval)
            break
        }
    }

    // newStart is after the last start.
    if (intervals.length === originalLength) {
        intervals.push(newInterval)
    }
    

    for (let i = 0; i < intervals.length - 1; ++i) {
        console.log(intervals)
        const [currentStart, currentEnd] = intervals[i]
        if (currentEnd >= intervals[i + 1][0]) {
            console.log("Splicing and redoing")
            intervals.splice(i, 2, [Math.min(currentStart, intervals[i+1][0]), Math.max(currentEnd, intervals[i + 1][1])])
            --i
        }
    }

    return intervals
};

// Runtime 14 ms Beats 5.68%
// Memory 60.26 MB Beats 13.45%

// Let's apply the optimal Merge Interval solution after the insert:
function insert(intervals, newInterval) {
    if (!intervals.length) return [newInterval]
    const originalLength = intervals.length

    for (let i = 0; i < intervals.length; ++i) {
        const interval = intervals[i]
        const newStart = newInterval[0]

        // newStart is BEFORE start of current range.
        if (newStart < interval[0]) {
            intervals.splice(i, 0, newInterval)
            break
        }
    }

    // newStart is after the last start.
    if (intervals.length === originalLength) {
        intervals.push(newInterval)
    }
    
    // 56 Merge Intervals
    const result = []
    let currentRange = intervals[0] // There is at least one element in the input, so this is safe to do.
    for (let i = 1; i < intervals.length; ++i) {
        if (currentRange[1] >= intervals[i][0]) {
            currentRange[1] = Math.max(currentRange[1], intervals[i][1])
        }
        // This means there is NO overlap between currentRange and the element we're looking at
        else {
            result.push(currentRange)
            currentRange = intervals[i]
        }
    }

    result.push(currentRange)

    return result
};

// Runtime 2 ms Beats 81.92%
// Memory 58.23 MB Beats 69.75%
// Now we have a much more performant solution! Slicing the array multiple times was a huge hit to performance!