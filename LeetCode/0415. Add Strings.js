// Easy

// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"
 

// Constraints:

// 1 <= num1.length, num2.length <= 104
// num1 and num2 consist of only digits.
// num1 and num2 don't have any leading zeros except for the zero itself.

/*
"Brute Force":

It says we cannot convert the strings DIRECTLY into integer, so if we are allowed to do it INDIRECTLY...
We will split the input strings.
For each character we will find the ASCII code.
With the code we can pick a number.
Reconstruct the number based on the input (do that at the same time, in a single iteration)

Repeat for other string

Sum them together

Return the sum as a string

String to Number Converter():
Split the string on ""
Reverse the string
initiate the current value in 0
Iterate on string
    Conver to ASCII
    Use ASCII code to determine number
    multiply number by Decimal Multiplier (index * 10) and add to current value
return currentValue
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// See above why this won't work.
function addStrings2(num1, num2) {
    const sum = stringToNumberConverter(num1) + stringToNumberConverter(num2)
    return String(sum)
};

function stringToNumberConverter(string) {
    const numDigits = string.split("").reverse()
    let currentValue = 0
    for (let i = 0; i < numDigits.length; ++i) {
        const ascIICode = numDigits[i].charCodeAt(0)
        let number
        switch (ascIICode) {
            case 48:
                number = 0
                break
            case 49:
                number = 1
                break
            case 50:
                number = 2
                break
            case 51:
                number = 3
                break
            case 52:
                number = 4
                break
            case 53:
                number = 5
                break
            case 54:
                number = 6
                break
            case 55:
                number = 7
                break
            case 56:
                number = 8
                break
            case 57:
                number = 9
                break
        }
        currentValue += number * (10 ** i)
    }

    console.log(Number.MAX_SAFE_INTEGER)
    console.log("Input: ", string, " -> ", currentValue)
    return currentValue
}
// >>>>> This method doesn't work because the STRINGS can be up to 10^4, which means those numbers go ABOVE the Number.MAX_SAFE_INTEGER in JS!!
// Which means we DO have to do the sum manually... =(

// So now we are going to iterate through both strings. (One of them can be shorter!)
// Reverse both strings
// iterate through the longest length (check if value is undefined, if it is, use 0 instead)
    // convert to number
    // add them (with any carry over from before)
    // Add the remainder into a result array (% 10) AS A STRING
    // Carry on the 10'th digit to the next iteration.
// add the last carry over (if any)
// reverse the result array and return it with a join.

// Linear Time and Space complexity O(N), as we are iterating through every element in the string (multiple times) AND using an equaly larger string in the output.

function addStrings(num1, num2) {
    const longestLength = Math.max(num1.length, num2.length)
    const input1 = num1.split("").reverse()
    const input2 = num2.split("").reverse()
    const result = []
    let carryOver = 0

    for (let i = 0; i < longestLength; ++i) {
        const value1 = convertStringIntoNumber(input1[i])
        const value2 = convertStringIntoNumber(input2[i])

        const sum = value1 + value2 + carryOver
        const finalValue = sum % 10
        result.push(String(finalValue))

        carryOver = Math.floor(sum / 10)
    }

    if (carryOver) result.push(String(carryOver))
    
    return result.reverse().join("")
};

function convertStringIntoNumber(oneCharacterString) {
    if (!oneCharacterString) return 0

    const ascIICode = oneCharacterString.charCodeAt(0)
    switch (ascIICode) {
        case 48:
            return 0
        case 49:
            return 1
        case 50:
            return 2
        case 51:
            return 3
        case 52:
            return 4
        case 53:
            return 5
        case 54:
            return 6
        case 55:
            return 7
        case 56:
            return 8
        case 57:
            return 9
    }
}

[
    ["9333852702227987", "85731737104263"],
].forEach(([num1, num2]) => {
    console.log(addStrings(num1, num2))
})

// Runtime 66 ms Beats 25.65%
// Memory 51.89 MB Beats 34.99%