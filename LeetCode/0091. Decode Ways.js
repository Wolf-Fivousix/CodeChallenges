// Medium

// A message containing letters from A-Z can be encoded into numbers using the following mapping:

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

// "AAJF" with the grouping (1 1 10 6)
// "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

// Given a string s containing only digits, return the number of ways to decode it.

// The answer is guaranteed to fit in a 32-bit integer.

 

// Example 1:

// Input: s = "12"
// Output: 2
// Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: s = "226"
// Output: 3
// Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
// Example 3:

// Input: s = "0"
// Output: 0
// Explanation: There is no character that is mapped to a number starting with 0.
// The only valid mappings with 0 are 'J' -> "10" and 'T' -> "20", neither of which start with 0.
// Hence, there are no valid ways to decode this since all digits need to be mapped.
// Example 4:

// Input: s = "06"
// Output: 0
// Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").
 

// Constraints:

// 1 <= s.length <= 100
// s contains only digits and may contain leading zero(s).

/**
 * @param {string} s
 * @return {number}
 */

/*
Convert string to an array (we'll be popping elements like a stack)
Define codings as 0
Define currentLetter as Empty String
Iterate "backwards" until array is empty.
    pop number from array and combine with currentLetter
    convert it to number
    if this number is greater or equal to 1 (one digit letter condition)
        add 1 to codings
        if this number is lesser or equal to 26
            add 1 to codings
    
    currentLetter receives the slice of 1 of current ("AA" => "A", and "B" => "B")
        whenever we have 2 letters, only the left most would remain.
        
return codings

Linear Time Complexity O(N) - once for array conversion, another for iteration
Linear Space Complexity O(N) - We are making an array the size of input.

1 - 1
12 - 2
    1 2
    12
123 - 3
    1 2 3
    12 3
    1 23
1234 - 5
    1 2 3 4
    12 3 4
    1 23 4
    1 2 34
    12 34
12345 - 8
    1 2 3 4 5
    12 3 4 5
        12 34 5
        12 3 45
    1 23 4 5
        1 23 45
    1 2 34 5
    1 2 3 45

This approach doesn't work. I'm "solving" the wrong problem.
*/
function numDecodings_1(s) {
    const input = s.split("");
    let codings = 0;
    let currentLetter = "";
    
    while (input.length) {
        currentLetter = input.pop() + currentLetter;
        const value = Number(currentLetter);
        
        if (value >= 1) ++codings;
        if (value >= 10 && value <= 26) ++codings;
        
        currentLetter = currentLetter.slice(0,1);
    }
    
    return codings;
};

// Solution by linfongi
function numDecodings_2(s) {
    if (s.length === 0) return 0;
  
    const N = s.length;
    const dp = Array(N+1).fill(0);
  
    dp[0] = 1;
    dp[1] = s[0] === '0' ? 0 : 1;
  
    for (let i = 2; i <= N; i++) {
      if (s[i-1] !== '0') {
        dp[i] += dp[i-1];
      }
      if (s[i-2] === '1' || s[i-2] === '2' && s[i-1] <= '6') {
        dp[i] += dp[i-2];
      }
    }
  
    return dp[N];
}


// 2025

/*
11 -> 2 -> AA or K
10 -> 1 -> J, because 0 is NOT a valid code
0 -> 0 -> Same reason.
01 -> 0 -> Same reason

1111111 -> this can be 1,1,1,1,1, or 11,1,1,1,1,1 or, 1,11,1,1,1,1 or 11,11,1,1,1,....


0 -> 0
10 -> 1
010 -> 1 BUT 0 - EDGE CASE
110 -> 1 only 1,10
2110 -> 2 - 2,1,10 or 21,10
22110 -> 3 - 2,2,1,10 or 2,21,10 or 22,1,10
122110 -> 5 - 1,2,2,1,10 or 1,2,21,10 or 1,22,1,10 or 12,2,1,10 or 12,21,10
0122110 -> 5 - 0,1,2,2,1,10 or 0,1,2,21,10 or 0,1,22,1,10 or 0,12,2,1,10 or 0,12,21,10 TECNICALLY there are still 5 possible combinations, inherited from before, but NONE of them are valid!
30122110 -> 5 - And in this case it is COMPLETELY invalid! Because 30 is not a valid code, and 0 cannot be by itself!

122110 -> 5 - 1,2,2,1,10 or 1,2,21,10 or 1,22,1,10 or 12,2,1,10 or 12,21,10
1122110 -> 8 - 1,1,2,2,1,10 or 1,1,2,21,10 or 1,1,22,1,10 or 1,12,2,1,10 or 1,12,21,10 or 11,2,2,1,10 or 11,2,21,10 or 11,22,1,10

This is the "validity" edge case. Where we have a 0 that is UNABLE to combine with the number on the left (or there's no number there)
These cases are closed deals, regardless of what could be combined.

BRUTE FORCE (in a sense, because we do need to compute all the valid combinations)
"alone 0" validity check
Define combinations array (THIS MIGHT NOT BE POSSIBLE, since our input might grow to the point of breaking the heap. If that's the case, we'll revisit this decision in how to compute the variations using only the last 2~3 digits)
From the last element to the first, start computing the combinations and add them to result
    For each new element, update result
    For each existing result, check if the first 2 digits can be combined. If they can, add a new entry in the array.

Return the length of the array
*/

/**
 * @param {string} s
 * @return {number}
 */
// This one does not work because the "combinations" array will explode the call stack once the input is large enough.
// And yes, there are test cases that break it.
function numDecodings_3(s) {
    if (invalidInput(s)) return 0

    const combinations = [[]]
    let handleZero = false
    for (let i = s.length - 1; i >= 0; --i) {
        const newDigit = s[i]
        // Special handling for 0, because 0 doesn't combine with numbers on it's right.
        if (newDigit === "0") {
            handleZero = true
            continue
        }

        // Add the new digit to every existing combination.
        for (let i = 0; i < combinations.length; ++i) {
            if (handleZero) {
                combinations[i].unshift(`${newDigit}0`)
            }
            else {
                combinations[i].unshift(newDigit)
            }
        }
        handleZero = false

        // See if we can combine the first 2 digits.
        const newCombinations = []
        for (let i = 0; i < combinations.length; ++i) {
            const currentCombination = [...combinations[i]]
            const possibleDigit = Number(`${currentCombination[0]}${currentCombination[1]}`)
            if (possibleDigit > 0 && possibleDigit < 27) {
                currentCombination.splice(0,2,String(possibleDigit))
                newCombinations.push(currentCombination)
            }
        }
        if (newCombinations.length) {
            combinations.push(...newCombinations)
        }
    }

    return combinations.length
};

function invalidInput(input) {
    for (let i = 0; i < input.length; ++i) {
        if (input[i] === "0") {
            if (i - 1 < 0 || (input[i - 1] !== "1" && input[i - 1] !== "2")) return true
        }
    }

    return false
}


/**
 * @param {string} s
 * @return {number}
 */

// Found a pattern.
// We have "singles" and "doubles"
// Whenever a digit CAN be combined with the previous one, we will get as many doubles as we have singles.
//Because any "double" CANNOT become a double digit anymore. Makes sense, right?
// In code:
// temp variable receives doubles
// doubles receives singles (these are the NEW ADDITIONS)
// singles receives singles + temp (so all singles are the previous results)
// Had to add a lot of edge case handling...

function numDecodings(s) {
    if (invalidInput(s)) return 0

    let combinations = 0
    let singleDigits = 1
    let doubleDigits = 0
    for (let i = s.length - 1; i >= 0; --i) {
        const newDigit = s[i]
        // console.log(`${newDigit}(${i}) - singleDigits= ${singleDigits} / doubleDigits= ${doubleDigits} - combinations: ${combinations}`)
        // Special handling for 0, because 0 doesn't combine with numbers on it's right.
        if (newDigit === "0") {
            doubleDigits += singleDigits
            singleDigits = 0
            --i
            combinations = singleDigits + doubleDigits
            continue
        }

        // See if we can combine the first 2 digits.
        const possibleDigit = i < s.length - 1 ? Number(`${newDigit}${s[i + 1]}`) : -1
        if (possibleDigit > 0 && possibleDigit < 27) {
            const temp = doubleDigits
            doubleDigits = singleDigits
            singleDigits += temp
        }
        else {
            singleDigits += doubleDigits
            doubleDigits = 0
        }

        combinations = singleDigits + doubleDigits
        // console.log(`${newDigit}(${i}) - ${combinations}`)
    }

    return combinations
};

function invalidInput(input) {
    for (let i = 0; i < input.length; ++i) {
        if (input[i] === "0") {
            if (i - 1 < 0 || (input[i - 1] !== "1" && input[i - 1] !== "2")) return true
        }
    }

    return false
}

console.log(numDecodings("111111111111111111111111111111111111111111111") === 1836311903)
console.log(numDecodings("1201234") === 3)
console.log(numDecodings("1") === 1)
console.log(numDecodings("10") === 1)
console.log(numDecodings("123123") === 9)
