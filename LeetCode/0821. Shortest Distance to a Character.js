// Easy

// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

// The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

 

// Example 1:

// Input: s = "loveleetcode", c = "e"
// Output: [3,2,1,0,1,0,0,1,2,2,1,0]
// Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
// The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
// The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
// For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
// The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.
// Example 2:

// Input: s = "aaab", c = "b"
// Output: [3,2,1,0]
 

// Constraints:

// 1 <= s.length <= 104
// s[i] and c are lowercase English letters.
// It is guaranteed that c occurs at least once in s.


/*
BRUTE FORCE:
Iterate through the string and save all the indexes of C.
Create the ANSWER array with the size of S and iterate through.
    For each index, find the distance between INDEX and all of the SAVEDINDEXES. Use the smallest value.

return the ANSWER array.


This has the potential to be Polynomial Time complexity, as we could have an input full of C's. O(n^2)
Space complexity will grow to 2 S's (1x for answer and 1x for SavedIndexes), so Linear Space Complexity O(n)

Better:
Create the answer array and fill it with POSITIVE_INFINITY
Iterate through S
    if we have a distance, save it to the answer and increase it in 1
    if we found C, reset distance to 1, save result as 0 and push index to result.

At this point we have an array with all the distances from LEFT to RIGHT.

Iterate through S one more time, this time going backwards, start at the LAST known index (last element on savedIndexes)
    repeat the distance process, but now compare it to the existing answer and ONLY update if it is lower.

return answer

This will be Linear Time Complexity O(n) - We are doing 3 passes (one to construct the answer array and fill it, and 2 passes of the input)
Linear Space Complexity O(n) which we can't do better, as we need to return an array of the same length as the input.
*/

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
function shortestToCharBRUTEFORCE(s, c) {
    const savedIndexes = []
    for(let i = 0; i < s.length; ++i) {
        if (s[i] === c) savedIndexes.push(i)
    }

    const answer = Array(s.length)
    for(let i = 0; i < s.length; ++i) {
        answer[i] = minDistance(i, savedIndexes)
    }

    return answer
};

function minDistance(index, savedIndexes) {
    let minDistance = Number.POSITIVE_INFINITY
    savedIndexes.forEach(savedIndex => {
        const distance = Math.abs(index - savedIndex)
        minDistance = Math.min(minDistance, distance)
    })

    return minDistance
}

// Runtime 8 ms Beats 22.50%
// Memory 53.14 MB Beats 24.78%


/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
function shortestToChar(s, c) {
    const savedIndexes = []
    const answer = Array(s.length).fill(Number.POSITIVE_INFINITY)
    let distanceCounter = 0
    for(let i = 0; i < s.length; ++i) {
        if (distanceCounter) {
            answer[i] = distanceCounter
            ++distanceCounter
        }

        if (s[i] === c) {
            savedIndexes.push(i)
            answer[i] = 0
            distanceCounter = 1
        }
    }

    distanceCounter = 1
    for (let i = savedIndexes[savedIndexes.length] - 1; i >= 0; --i) {
        answer[i] = Math.min(answer[i], distanceCounter)
        if (answer[i] === 0) distanceCounter = 0
        ++distanceCounter
    }


    return answer
}

// Runtime 3 ms Beats 70.00%
// Memory 53.38 MB Beats 18.70%