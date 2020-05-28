// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

// IN: 0
// OU: []

// IN: 1
// OU: [[1]]

// IN: 6
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1],
// 0,5,10,10,5,1]
// ]

// [0, 1, 0]
//   [1, 1]

// [0, 1 , 1, 0]
//   [1, 2, 1]

/*
make result array as empty array.
Iterate INPUT number of times.
    use the latest answer (iteration - 1) to generate next answer.
    create empty answer array.
        if iteration 1, add [1] to result.
        else
            iterate through previous answer from -1 to length + 1 (like adding 0 to beggin and end of array).
            whenever I is -1 or previousAnswer length. consider 0.
            sum those two values
            push them into a answer array.
    add answer array to result aray.
return result array.
*/

function generate(numRows) {
    const result = [];
    for (let i = 1; i <= numRows; ++i) {
        const answer = [];

        if (i === 1) answer.push(1);
        else {
            const previousAnswer = result[result.length - 1];
            for (let j = -1; j < previousAnswer.length; ++j) {
                const first = j === -1 ? 0 : previousAnswer[j];
                const second = (j + 1) === previousAnswer.length ? 0 : previousAnswer[j + 1];

                answer.push(first + second);
            }
        }

        result.push(answer);
    }

    return result;
}

// console.log(pascalTriangle(6))

// Runtime: 68 ms, faster than 22.92% of JavaScript online submissions for Pascal's Triangle.
// Memory Usage: 32.9 MB, less than 100.00% of JavaScript online submissions for Pascal's Triangle.

/*

SIZE = 3
result = [[1], [1,1], [1,2,1]]
i = 3
answer = [1, 2, 1]
previousAnswer = [1, 1]
j = 1
first = 1
second = 0


*/

// Old solution
var generate = function(numRows) {
    if (numRows === 0) return [];
    let result = [];
    
    for (let row = 1; row <= numRows; ++row) {
        let arr = [];
        for (let i = 0; i < row; ++i) {
            if (i === 0 || i === row - 1) arr.push(1);
            else {
                const previousLevel = result[row-2];
                arr.push(previousLevel[i-1] + previousLevel[i]);
            }
        }
        result.push(arr);
    }
    return result;
};