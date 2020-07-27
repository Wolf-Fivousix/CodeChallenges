// Given a square matrix of integers a and an array of queries q, your task is to return the given matrix after processing
//  all the queries on it. There are three types of queries:

// If q[i] = 0, rotate the matrix 90 degrees clockwise.
// If q[i] = 1, reflect the matrix in its main diagonal.
// If q[i] = 2, reflect the matrix in its secondary diagonal.
// Example

// For

// a = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]
// and

// q = [0, 1, 2]
// the output should be

// mutateMatrix(a, q) = [[3, 6, 9],
//                       [2, 5, 8],
//                       [1, 4, 7]]
// example 1

// For

// a = [[5, 5],
//      [1, 2]]
// and

// q = [2, 0, 2, 0, 1]
// the output should be

// mutateMatrix(a, q) = [[5, 1],
//                       [5, 2]]
// example 2

// For

// a = [[11, 2, 9, 1],
//      [17, 4, 0, 32],
//      [1, 7, 10, 6],
//      [80, 3, 5, 14]]
// and

// q = [0, 1, 2, 0]
// the output should be

// mutateMatrix(a, q) = [[11, 2, 9, 1],
//                       [17, 4, 0, 32],
//                       [1, 7, 10, 6],
//                       [80, 3, 5, 14]]
// example 3

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.integer a

// A square matrix of integers.

// Guaranteed constraints:
// 2 = a.length = 10,
// a[i].length = a.length,
// 0 = a[i][j] = 109.

// [input] array.integer q

// A list of queries. It's guaranteed that all the query types occur in each test.

// Guaranteed constraints:
// 3 = q.length = 104,
// 0 = q[i] = 2 .

// [output] array.array.integer

// The resulting matrix after processing all the queries in order they appear in array q.

function mutateMatrix(a, q) {
    for (let i = 0; i < q.length; ++i) {
        switch (q[i]) {
            case 0:
                a = rotate90(a);
                break;
            case 1:
                break;
            default:
            
        }
    }
    
    return a;
}

function rotate90(matrix) {
    const newMatrix = new Array(matrix.length);
    for (let i = 0; i < matrix.length; ++i) {
        newMatrix[i] = new Array(matrix.length);
    }
    
    // console.log(newMatrix);
    for (let row = 0; row < matrix.length; ++row) {
        for (let column = 0; column < matrix[row].length; ++column) {
            const newColumn = (row + matrix.length - 1) % matrix.length;
            newMatrix[column][newColumn] = matrix[row][column];
            
            // 0,0 > 0,2
            // 0,1 > 1,2
            // 0,2 > 2,2
            
            // 1,0 > 0,1
            // 1,1 > 1,1
            // 1,2 > 2,1
            
            // 2,0 > 0,0
            // 2,1 > 1,0
            // 2,2 > 2,0
            
        }
    }
    // console.log(newMatrix);
    
    return newMatrix;
}