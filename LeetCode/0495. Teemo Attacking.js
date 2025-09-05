// Easy

// Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.

// You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.

// Return the total number of seconds that Ashe is poisoned.

 

// Example 1:

// Input: timeSeries = [1,4], duration = 2
// Output: 4
// Explanation: Teemo's attacks on Ashe go as follows:
// - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
// - At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
// Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.
// Example 2:

// Input: timeSeries = [1,2], duration = 2
// Output: 3
// Explanation: Teemo's attacks on Ashe go as follows:
// - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
// - At second 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3.
// Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.
 

// Constraints:

// 1 <= timeSeries.length <= 104
// 0 <= timeSeries[i], duration <= 107
// timeSeries is sorted in non-decreasing order.

/*
define endTime as -1
define poisonTime as 0
Iterate through the timeSeries input
    Define startTime as timeSeries[i]
    if startTime lesser or equal than endTime
        define poisonAdjustment as subtract startTime from endTime - 1
        subract poisonAdjustment from poisonTime
    
    add duration - 1 to poisonTime
    endTime becomes startTime + duration - 1

return poison time

O(n) Linear Time Complexity - We have to iterate through all the input to calculate the duration.
O(1) Constant Space Complexity - We only use a few variables.
*/

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
function findPoisonedDuration(timeSeries, duration) {
    let poisonTime = 0
    let endTime = -1
    for (const startTime of timeSeries) {
        if (startTime <= endTime) {
            const poisonAdjustment = startTime - endTime - 1
            poisonTime += poisonAdjustment
        }

        poisonTime += duration
        endTime = startTime + duration - 1
    }

    return poisonTime
};

// Runtime 4 ms Beats 9.69%
// Memory 58.59 MB Beats 49.61%