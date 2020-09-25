// Given an array of integers, for each
// element determine whether that
// element occurs earlier in the array and
// whether it occurs later in the array.
// Return an array of two binary integers
// as strings where each binary digit is 1 if
// the value occurs in the earlier or later
// subarrays, or 0 if not. The index of each
// binary digit matches the index of the
// array element being tested. The first
// string is related to lower indices and
// the second to higher.
// For example, given num = [1,2,3,2,1]
// we perform the following tests:
// Our first output is 00011 and our
// second is 11000.
// Function Description
// Complete the function bitPattern in the
// editor below. The function must return
// an array of two strings of binary digits.
// bitPattern has the following
// parameter(s):
//     num[num[0],...num[n-1]]: an array of
// integers
// Constraints
// 1 ≤ n ≤ 10 4
// 0 ≤ num[i] ≤ 10 4
// Sample Case 0
// Sample Input 0
// 6
// 1
// 3
// 2
// 3
// 4
// 1
// 000101
// 110000
//                                     Bit Value
// i  A[i]  A[0:i-1]     A[i+1:n-1]  First   Second
// -  ----  -------     ---------      -        -
// 0  1     NULL        [3,2,3,4,1]    0        1
// 1  3     [1]         [2,3,4,1]      0        1
// 2  2     [1,3]       [3,4,1]        0        0
// 3  3     [1,3,2]     [4,1]          1        0
// 4  4     [1,3,2,3]   [1]            0        0
// 5  1     [1,3,2,3,4] NULL           1        0

/*
 * Complete the 'bitPattern' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts INTEGER_ARRAY num as parameter.
 */
function bitPattern(num) {
    const elements = hashMe(num);
    const firstBit = [];
    const secondBit = [];

    for (let i = 0; i < num.length; ++i) {
        const indexes = elements[num[i]];

        firstBit.push(indexes[0] < i ? 1 : 0);
        secondBit.push(i < indexes[indexes.length - 1] ? 1 : 0);
    }

    return [firstBit.join(""), secondBit.join("")];
}

function hashMe(array) {
    const hash = {};

    for (let i = 0; i < array.length; ++i) {
        if (hash[array[i]]) hash[array[i]].push(i);
        else hash[array[i]] = [i];
    }

    return hash;
}

// 3/3 Test Cases.
// We have Linear Time and Space Complexity for this solution.
// By burning the space we save a lot of time. If space was a constrain, we could have Constant Space,
// at the cost of a LOT of time. It would be, at least, Polynomial Time with constant space.

const input1 = [
    1,
    3,
    2,
    3,
    4,
    1
]
const answer1 = [
    "000101",
    "110000"
]

const input2 = [
    0,
    78,
    3,
    23,
    18,
    79,
    77,
    55,
    55,
    58,
    28,
    59,
    98,
    18,
    30,
    65,
    2,
    53,
    28,
    89,
    99,
    61,
    1,
    58,
    57,
    65,
    54,
    90,
    99,
    20,
    46,
    56,
    56,
    77,
    91,
    45,
    78,
    3,
    94,
    69,
    97,
    88,
    32,
    50,
    90,
    42,
    78,
    28,
    62,
    11,
    9,
    35,
    91,
    62,
    63,
    49,
    41,
    87,
    93,
    36,
    40,
    0,
    59,
    39,
    41,
    94,
    9,
    54,
    17,
    42,
    0,
    28,
    15,
    46,
    65,
    76,
    64,
    30,
    56,
    62,
    45,
    25,
    59,
    61,
    69,
    25,
    91,
    85,
    47,
    81,
    38,
    33,
    10,
    6,
    54,
    57,
    46,
    4,
    9,
    99,
    71,
    29,
    21,
    55,
    90,
    42,
    80,
    18,
    18,
    47,
    23,
    97,
    30,
    34,
    72,
    4,
    43,
    26,
    26,
    78,
    54,
    62,
    0,
    46,
    65,
    73,
    11,
    91,
    8,
    39,
    81,
    90,
    90,
    8,
    81,
    81,
    47,
    37,
    1,
    57,
    54,
    23,
    83,
    37,
    88,
    93,
    84,
    36,
    50,
    41,
    76,
    76,
    25,
    67,
    39,
    25,
    25,
    90,
    72,
    80,
    97,
    35,
    81,
    20,
    65,
    40,
    5,
    84,
    17,
    46,
    78,
    81,
    54,
    96,
    42,
    69,
    50,
    31,
    68,
    23,
    57,
    70,
    33,
    58,
    90,
    79,
    55,
    93,
    50,
    16,
    82,
    53,
    60,
    39,
    3,
    76,
    70,
    78,
    11,
    92
]
const answer2 = [
    "00000000100001000010000101001000110011000000101100001100000001101111011101100111101111100000001110110001110111111001001111111011011111111011110111011111101111111111110111111011100110111111100101111110",
    "11111111111101110110111111111111101111111101111111111100101111111011111001110101010011101101001111000001111101110010010110011010111110110101110001101011101101000010000000100000100001000000000000000000"
]

function compareSolution(input, output) {
    if (input.length !== output.length) return false;

    for (let i = 0; i < input.length; ++i) {
        if (input[i] !== output[i]) return false;
    }

    return true;
}
console.log(compareSolution(bitPattern(input1), answer1));
console.log(compareSolution(bitPattern(input2), answer2));