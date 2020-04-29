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