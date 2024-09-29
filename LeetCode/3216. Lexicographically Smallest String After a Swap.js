// Easy

// Given a string s containing only digits, return the 
// lexicographically smallest string
//  that can be obtained after swapping adjacent digits in s with the same parity at most once.

// Digits have the same parity if both are odd or both are even. For example, 5 and 9, as well as 2 and 4, have the same parity, while 6 and 9 do not.

 

// Example 1:

// Input: s = "45320"

// Output: "43520"

// Explanation:

// s[1] == '5' and s[2] == '3' both have the same parity, and swapping them results in the lexicographically smallest string.

// Example 2:

// Input: s = "001"

// Output: "001"

// Explanation:

// There is no need to perform a swap because s is already the lexicographically smallest.

 

// Constraints:

// 2 <= s.length <= 100
// s consists only of digits.

/*
Brute Force approach:
Convert the input into an array
iterate through the array (until lenght - 1)
    compare current element with next element. (isSameParity())
        Convert the character into number
        mod it by 2. If there is a left over, it's odd, otherwise it is even.
        If both are the same (odd or even) then it is a YES
    If next element is a lower character than current element, we can perform the swap and get the lexicographical smaller string.
        Do it
        break the for loop. (it's fine to modify in place since we'll return without continuing the iteration)
If we reached the end, no swap has been made, return a join of the new array

This will be Linear Time Complexity O(N) with 3 passes.
And Linear Space Complexity O(N) with an array as big as the input.

We can further optmize to constant space by accessing the elements of the string directly with String.charAt(index)
There's no optimal way of manipulation the string, since strings in JS are imutable. So even if we use String.slice() at the index we want to swap, we WILL iterate through the input again in order to create the new strings and then concat them together.
Therefore the "split and join" method is a much more understandable and maintanable way of operating, since it provides a much lower cognitive load to the programmer.
*/

/**
 * @param {string} s
 * @return {string}
 */
function getSmallestString(s) {
    const input = s.split("")
    for (let i = 0; i < input.length - 1; ++i) {
        const charA = input[i]
        const charB = input[i + 1]
        if (
            isSameParity(charA, charB) &&
            charB.charCodeAt(0) < charA.charCodeAt(0)
        ) {
            input[i] = charB
            input[i + 1] = charA
            break
        }
    }
    
    return input.join("")
};

function isSameParity(charA, charB) {
    const numberA = Number(charA)
    const numberB = Number(charB)

    return (
        isEven(numberA) && isEven(numberB) ||
        !isEven(numberA) && !isEven(numberB)
    )
}

function isEven(number) {
    return number % 2 === 0
}

[
    "456820",
    "13579",
    "44442",
].forEach((input) => {
    console.log(input, " >>> ", getSmallestString(input))
})

// Runtime 65 ms Beats 58.44%
// Memory 51.74 MB Beats 43.51%