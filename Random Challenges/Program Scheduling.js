// Seen in https://leetcode.com/discuss/post/280433/google-phone-screen-program-scheduling-b-pr1p/
// Given a sorted list of already scheduled programs and a list of new programs, 
// write an algorithm to find if the given new programs can be scheduled or not?
// Each program is a pair of values where 1st value is the starting time and 2nd is the execution time.

// Example 1
// Input: scheduled = [P1(10, 5), P2(25, 15)], newPrograms = [P3(18, 7), P4(12, 10)]
// Output: [true, false]
// Explanation: P3(18, 7) starts at time 18 and executes for 7 mins i.e., the end time is 18 + 7 = 25.
// So this time slot is free and there is no overlap with already scheduled programs. Hence P3 can be scheduled. 
// As the P4 overlaps with P1, so P4 cannot be scheduled.


// Example 2
// Input: scheduled = [P1(10, 5), P2(25, 15)], newPrograms = [P3(18, 7), P4(20, 2)]
// Output: [true, false]
// Explanation: P3 can be scheduled so we add it to already scheduled programs. P4 overlaps with P3, so P4 cannot be scheduled.

/*
BRUTE FORCE:
We don't need to return the data, BUT we do need to account for new schedules (example 2), therefore we need to manipulate the array we'll read from.

An inneficient way of solving it is:
For each "newProgram", read the "scheduled" input and calculte if it can fit in it.
    If it does, then add to it and add "true" to the answer.
    Otherwise add "false" and move on
Return the answer

Bad efficiency, we can have up to "Polynomial" Time Complexity, if the inputs are the same size, although TECHNICALLY it would be O(N * M)

Let's try to make it a little better...

Do we know all the times? Here's a "crazy" idea: Considering the day only has 24h, and we're working with minutes, technically we only have 1.440 slots.
We can easily have an array of 1.440 size with each index representing that minute of the day.
We'd do a "first pass" populating the already scheduled minutes.
And moving forward we only need to check (and update) the "chunks" from the second input, newPrograms.

THIS would make it much more performant, linear performance with constant space:
O(N + M + A) - N are the schedules, M are the newPrograms and A is the new array that was created to store the data (and worse case scenario we will traverse it once populating every single minute)
O(1) space - one array of 1.440 size.

*/


function programScheduling(scheduled, newPrograms) {
    const daySchedules = new Array(1440).fill(0)
    const result = []

    // Populate the schedules
    for (const schedule of scheduled) {
        const [startTime, duration] = schedule
        const endTime = startTime + duration - 1
        
        for (let i = startTime; i <= endTime; ++i) {
            daySchedules[i] = 1
        }
    }

    // Check if a newProgram can fit the schedule
    for (const newProgram of newPrograms) {
        const [startTime, duration] = newProgram
        const endTime = startTime + duration - 1
        let isScheduleFree = true

        // check if the schedules are free
        for (let i = startTime; i <= endTime; ++i) {
            // console.log(startTime, endTime, i, "->", daySchedules[i])
            if (daySchedules[i]) {
                isScheduleFree = false
            }
        }

        // Add new schedule to dayScheudles
        if (isScheduleFree) {
            for (let i = startTime; i <= endTime; ++i) {
                daySchedules[i] = 1
                // console.log(daySchedules[i])
            }
            result.push(true)
        }
        else {
            result.push(false)
        }
    }

    console.log(result)
    return result
}

console.log(programScheduling([[10,5], [25,15]], [[18,7], [12,10]]).toString() === [true, false].toString() ? "PASS" : "FAIL", "-> [true, false]") // [true, false]
console.log(programScheduling([[10,5], [25,15]], [[18,7], [20,2]]).toString() === [true, false].toString() ? "PASS" : "FAIL", "-> [true, false]") // [true, false]
