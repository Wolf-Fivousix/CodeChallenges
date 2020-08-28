// 4. Piles Of Boxes
// Alex is given  n  piles of boxes of equal or
// unequal heights. In one step, Alex can
// remove any number of boxes from the
// pile which has the maximum height and
// try to make it equal to the one which is
// just lower than the maximum height of
// the stack. Determine the minimum
// number of steps required to make all of
// the piles equal in height.
// Example
// https://hrcdn.net/s3_pub/istreet-assets/kCLMaOoVeD1-BgTsN5Gwmw/piles_of_boxes_example.svg
// n = 3
// boxesInPiles = [ 5, 2, 1 ] 
// Initial State Step 1 Step 2 Step 3
// In the first step, remove  3  boxes
// from  boxesInPiles[0],  and the new array
// is  boxesInPiles' = [2, 2, 1].  Now reduce the
// two taller piles by  1  box each to match the
// height of the shortest pile. This
// takes  2  steps because each step is
// performed on only one pile. The final
// number of steps required is  3.
// Function Description
// Complete the function  pilesOfBoxes in
// the editor below.
//    pilesOfBoxes has the following
// parameter(s):
//      int boxesInPiles[n] : each
// boxesInPiles[i]  represents the initial
// height of one pile
//  Return
//  long:     the minimum number of steps
// required
// Constraints
// 1 ≤ n ≤ 2 x 10 5
// 1 ≤ boxesInPiles[i] ≤ 2 x 10 6
// Input Format Format for Custom
// Testing
// Sample Case 0
// Sample Input
// https://hrcdn.net/s3_pub/istreet-assets/B2yqWoyYmdIpZLjfPgHrnw/piles_of_boxes_sample_0.svg
// Sample Output
// 6
// Explanation
// Initial State Step 1 Step 2 Step 3 Step 4 Step 5 Step 6
// 1.  2 steps required to convert 2 piles of
// height  5 to 4. So, now we have  4  piles
// of height  4.
// 2.  4 steps are required to convert  4
// piles of height  4  to  2.
// The total number of steps required is 2
// + 4 = 6  steps.
// Sample Case 1
// Sample Input
// Sample Output
// 1
// Explanation
// In  1  step,  109  boxes can be removed
// from the first pile to make both piles
// have a height of  886 - 109 = 777.


/*
 * Complete the 'pilesOfBoxes' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY boxesInPiles as parameter.
 */

function pilesOfBoxes(boxesInPiles) {
    const order = boxesInPiles.sort((a, b) => a - b);
    let steps = 0;
    let weight = 1;

    for (let i = order.length - 1; i > 0; --i) {
        if (order[i] !== order[i - 1]) {
            steps += weight;
        }
        ++weight;
    }

    return steps;
}

// 14/14 Test Cases
// Log Linear Time Complexity, as we have to sort the array and then iterate once through it.
// Linear Space Complexity, because we need to store the sorted array.

const array1 = [4,5,5,2,4]; // 6
const array2 = [886, 777]; // 1
const array3 = [886, 777, 915, 1793]; // 6
const array4 = [153348, 159818, 45611, 112438, 117632, 132688, 161491, 142542]; // 28

console.log(pilesOfBoxes(array1) === 6);
console.log(pilesOfBoxes(array2) === 1);
console.log(pilesOfBoxes(array3) === 6);
console.log(pilesOfBoxes(array4) === 28);