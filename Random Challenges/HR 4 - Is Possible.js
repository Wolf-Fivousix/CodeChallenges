// Consider a pair of integers,
// (a, b). The following
// operations can be
// performed on (a, b) in any
// order, zero or more times:
// (a, b) → (a + b, b)
// (a, b) → (a, a + b)
// Return a string that
// denotes whether or not (a,
// b) can be converted to to
// (c, d) by by performing zero
// or more of the operations
// specified above.
// Example
// (a, b) = (1, 1)
// (c, d) = (5, 2)
// Perform the operation (1, 1
// + 1) to get (1, 2), perform
// the operation (1 + 2, 2) to
// get (3, 2), and perform the
// operation (3+2, 2) to get (5,
// 2). Alternatively, the first
// operation could be (1+1, 1)
// to get (2, 1) and so on. The
// diagram below
// demonstrates the example
// representing the pairs as
// Cartesian coordinates:

/*
 * Complete the 'isPossible' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 *  3. INTEGER c
 *  4. INTEGER d
 */

function isPossible(a, b, c, d) {

    if (c < a || d < b) return "No";
    for (let i = a; i <= c; i += b) {
        for (let j = b; j <= d; j += i) {
            for (let k = i; k <= c; k += j) {
                if (k === c && j === d) return "Yes";
            }
        }
    }
    return "No";
}

// 9/10 Test Cases
// 1
// 4
// 62
// 45
// Your Output (stdout)
// No
// Expected Output
// Download
// Yes

// I'm still missing the key case here. Which is considering all variations of combinations.

function isPossible2(a, b, c, d) {
    if (c < a || d < b) return "No";
    if (a === c && b === d) return "Yes";

    if (possibilityTree(a, b, c, d)) return "Yes";
    return "No";
}

function possibilityTree(a, b, c, d) {
    if (a > c || b > d) return false;
    if (a === c && b === d) return true;

    if (possibilityTree(a + b, b, c, d) || possibilityTree(a, b + a, c, d)) return true;

    return false
}

console.log(isPossible2(1, 4, 62, 45));