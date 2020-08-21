// Engineers have redesigned a keypad used
// by ambulance drivers in urban areas. In
// order to determine which key takes the
// longest time to press, the keypad is tested
// by a driver. Given the results of that test,
// determine which key takes the longest to
// press.
// Example
// keyTimes = [[0, 2], [1, 5], [0, 9], [2, 15]]
// Elements in  keyTimes[i][0]  represent
// encoded characters in the range  ascii[a-
// z]  where  a = 0, b = 1, ..., z = 25. The second
// element,  keyTimes[i][1] represents the
// time the key is pressed since the start of
// the test.  The elements will be given in
// ascending time order. In the example, keys
// pressed, in order are  0102 encoded = abac at
// times  2, 5, 9, 15.  From the start time, it
// took  2 - 0 = 2  to press the first key,  5 - 2 =
// 3  to press the second, and so on. The
// longest time it took to press a key was key
// 2,  or  'c' , at  15 - 9 = 6.
// Function Description
// Complete the function  slowestKey in the
// editor below.
// slowestKey has the following parameter(s):
//      int keyTimes[n][2]:  the first column
// contains the encoded key pressed, the
// second contains the time at which it was
// pressed
// Returns:
//      char : the key that took the longest time
// to press
// Constraints
// 1 ≤ n ≤ 10 5
// 0 ≤ keyTimes[i][0] ≤ 25 (0 ≤ i < n)
// 1 ≤ keyTimes[i][1] ≤ 10 8 (0 ≤ i < n)
// There will only be one key with the worst
// time.
// keyTimes is sorted in ascending order of
// keyTimes[i][1]
// Input Format For Custom Testing
// Sample Case 0
// STDIN    Function
// -----    --------
// 3     →  keyTimes[] size n = 3
// 2     →  keyTimes[][] size columns = 2, always
// 0 2   →  keyTimes = [[0, 2], [1, 3], [0, 7]]
// 1 3
// 0 7
// Sample Input For Custom Testing
// Sample Output
// a
// Explanation
// The time taken to press  'a' in the worst
// case is  7 - 3 = 4.  To press  'b'  the worst
// case is  3 - 2 = 1 .
// Sample Case 1
// STDIN    Function
// -----    --------
// 5     →  keyTimes[] size n = 5
// 2     →  keyTimes[][] size = 2
// 0 1   →  keyTimes = [[0, 1], [0, 3], [4, 5], [5, 6], [4, 10]]
// 0 3
// 4 5
// 5 6
// 4 10
// Sample Input For Custom Testing
// Sample Output
// e
// Explanation
// The time taken to press 'a' in the worst
// case is  3 - 1 = 2 , for 'e' is  10 - 6 = 4 , and
// for 'f' is  6 - 5 = 1. The letter 'e' is the
// slowest key.

/*
 * Complete the 'slowestKey' function below.
 *
 * The function is expected to return a CHARACTER.
 * The function accepts 2D_INTEGER_ARRAY keyTimes as parameter.
 */

function slowestKey(keyTimes) {
    let slowKey = -1;
    let time = Number.NEGATIVE_INFINITY;
    let currentTime = 0;

    for (let i = 0; i < keyTimes.length; ++i) {
        const delay = keyTimes[i][1] - currentTime;
        if (delay > time) {
            slowKey = keyTimes[i][0];
            time = delay;
        }
        currentTime = keyTimes[i][1];
    }
    
    return String.fromCharCode(slowKey + 97);
}
// 15/15 Test Cases