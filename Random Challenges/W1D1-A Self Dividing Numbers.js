// Week 1 Day 1 A Medium Challenge

// No 0's in the number.
// Find self dividing number.
// Give a range, find all the Self Dividing numbers.
// Return all numbers in the range that are Selfdividing.

// 5-7 => 5, 6, 7
// 44-46 => 44, 45

// declare answer array.
// Iterate through the given range.
//     Check if number is Self Dividing. (helper function)
//     if the number IS Seld Dividing, add it to my answer.
// return answer array

// Self Dividing Function
// make a copy of number for first loop.
// Loop until number is 0, to get all the digits of the number by modding it by 10.
//     If digit is a 0, return false.
//     modify number by dividing it by 10.
// return true.


function findSelfDividingNumbers(A, B) {
    let [lowEnd, highEnd] = A > B ? [B, A] : [A, B];

    let answer = [];
    for (let value = lowEnd; value <= highEnd; ++value) {
        if (selfDividing(value)) answer.push(value);
    }

    return answer;
}

function selfDividing(value) {
    let number = value;

    while (number > 0) {
        const digit = number % 10;
        if (digit === 0 || value % digit !== 0) return false;

        number = Math.floor(number / 10);
    }

    return true;
}

// 44 - 46
// lowEnd = 44
// highEnd = 46
// answer = [44, ]

// value = 44

// number = 4
// digit = 4

console.log(findSelfDividingNumbers(44, 46));
console.log(findSelfDividingNumbers(7, 4));
// console.log(findSelfDividingNumbers(1556, 35));



//////////////////////////////////////////////////
// Solution by Max
//////////////////////////////////////////////////
// A self-dividing number is a number that is divisible by every digit it contains. 
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0,and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Example
// Input: left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

// (128, 129)

const sdf = function(left, right) {
    let result = [];
    for (let i = left; i <= right; i++) {
        let num = String(i); // '1'
        let flag = true;
        for (let j = 0; j < num.length; j++) {
            if (i % Number(num[j]) !== 0) {
                flag = false;
            }
        }
        if (flag) {
            result.push(i);
        }
    }
    return result;
}


// console.log(sdf(1, 22));