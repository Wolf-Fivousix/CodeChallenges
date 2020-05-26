// Sally loves numbers that have unique digits. Given a range find how many numbers sally loves.


// Ashley loves numbers made up of unique digits. She is
// less enchanted with numbers that have repeating
// digits. Given a range of integers, determine how many
// numbers she will love.
// For example, the lower bound n=80 and the upper
// bound m=120. Both are inclusive, so there are 120-
// 79=41 values in the range. Numbers she loves are
// green. Others are red. The two columns to the right
// are the love/hate counts per row.
// There are 27 numbers
// she loves and 14
// other numbers in the
// range.
// Function
// Description
// Complete the
// function
// countNumbers in the editor below. For each bounds
// pair arr[i], it must print the number of integers in the
// inclusive range that Ashley loves.
// countNumbers has the following parameter(s):
//     arr[arr[n 0 ,m 0 ],arr[n 1 ,m 1 ],...arr[n q-1 ,m q-1 ]]: an array
// of integer pairs representing lower and upper range
// limits
// Constraints
// 1 ≤ q ≤ 10 5
// Sample Input 0
// 2
// 2
// 1 20
// 9 19
// Sample Output 0
// 19
// 10
// Explanation 0
// Row 0 = [1, 20]
// The set of qualifying numbers in the inclusive range
// between n 0 = 1 and m 0 = 20 is {1, 2, 3, 4, 5, 6, 7, 8,
// 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20}. This gives us
// c 0 = 19.
// Row 1: [9, 19]
// The set of qualifying numbers in the inclusive range
// between n 1 = 9 and m 1 = 19 is {9, 10, 12, 13, 14, 15,
// 16, 17, 18, 19}. This gives us c 1 = 10.
// Sample Case 1
// Sample Input 1
// 5
// 2
// 7 8
// 52 80
// 34 84
// 57 64
// 74 78
// Sample Output 1
// 2
// 26
// 47
// 8
// 4
// Explanation 1
// Row 0 = [7, 8]
// The set of qualifying numbers in the inclusive range
// between n 0 = 7 and m 0 = 8 is {7, 8}. This gives us c 0
// = 2.
// Row 1 = [52, 80]
// The set of qualifying numbers in the inclusive range
// between n 1 = 52 and m 1 = 80 is {52, 53, 54, 56, 57,
// 58, 59, 60, 61, 62, 63, 64, 65, 67, 68, 69, 70, 71, 72,
// 73, 74, 75, 76, 78, 79, 80}. This gives us c 1 = 26.
// Row 2 = [34, 84]
// The set of qualifying numbers in the inclusive range
// between n 2 = 34 and m 2 = 84 is {34, 35, 36, 37, 38,
// 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53,
// 54, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 67, 68, 69,
// 70, 71, 72, 73, 74, 75, 76, 78, 79, 80, 81, 82, 83, 84}.
// This gives us c 2 = 47.
// Row 3 = [57, 64]
// The set of qualifying numbers in the inclusive range
// between n 3 = 57 and m 3 = 64 is {57, 58, 59, 60, 61,
// 62, 63, 64}. This gives us c 3 = 8.
// Row 4 = [74, 78]
// The set of qualifying numbers in the inclusive range
// between n 3 = 74 and m 3 = 78 is {74, 75, 76, 78}. This
// gives us c 3 = 4.

function countNumbers(arr) {
    const lovedNumbers = {};

    arr.forEach(rangeArray => {
        let counter = 0;

        for (let number = rangeArray[0]; number <= rangeArray[1]; ++number) {
            if (lovedNumbers[number] || love(number, lovedNumbers)) ++counter;
        }

        console.log(counter);
    });
}

function love(number, lovedNumbers) {
    const original = number;
    let digits = {};

    while(number > 0) {
        const digit = number % 10;

        if (digits[digit]) {
            lovedNumbers[original] = false;
            return false;
        }
        else digits[digit] = true;

        number = Math.floor(number/10);
    }

    lovedNumbers[original] = true;
    return true;
}

// By using the Hash for previously calculated numbers we can improve the run time by a bit.
// Passing 9/11 Test Cases.
// Test 6 1k
// Test 7 2k
// Test 8 5k
// Test 9 10k
// Test 10 20k
// Test 11 100k
// Even though we burn memory, we cannot execute quick enough for 20k and 100k ranges.