// Optimizing Box Weights
// An Amazon Fulfillment Associate has a set of items that need to be packed into two
// boxes. Given an integer array of the item weights (arr) to be packed, divide the item
// weights into two subsets, A and B, for packing into the associated boxes, while respecting
// the following conditions:
// The intersection of A and B is null.
// The union A and B is equal to the original array.
// The number of elements in subset A is minimal.
// The sum of A's weights is greater than the sum of B's weights.
// Return the subset A in increasing order where the sum of A's weights is greater than the
// sum of B's weights. If more than one subset A exists, return the one with the maximal total
// weight.
// Example
// n = 5
// arr = [3, 7, 5, 6, 2]
// The 2 subsets in arr that satisfy the conditions for A are [5, 7] and [6, 7] :
// A is minimal (size 2)
// Sum(A) = (5 + 7) = 12 > Sum(B) = (2 + 3 + 6) = 11
// Sum(A) = (6 + 7) = 13 > Sum(B) = (2 + 3 + 5) = 10
// The intersection of A and B is null and their union is equal to arr .
// The subset A where the sum of its weight is maximal is [6, 7].
// Function Description
// Complete the minimalHeaviestSetA  function in the editor below.
// minimalHeaviestSetA has the following parameter(s):
//      int arr[]: an integer array of the weights of each item in the set
// Returns:
//      int[] : an integer array with the values of subset A

/*
 * Complete the 'minimalHeaviestSetA' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

/*
I need the highest weights, but I also need them in sorted order.
If I have the same number, it HAS TO be in the same array, in other words:
[5,5,5,5, 200] => All the 5's need to be together.

We can sort the input.
Count the ocurrances and the SUM of each number with a hash table
then we start pop itens out of A and UNSHIFT into B.
    If the number popped has multiple counts, then pop those extra times as well.
    (this guarantees the intersection of A/B is null and their union is equal to original arr)
Once the SUM of A is lower than B, break the loop.

return B.

Because we're starting from the biggest numbers, a case like:
[10,10,10,20] would give us A = [] and B = [10,10,10,20]
when B should actually be [10,10,10]
It is the same problem I'm having with test #3, where we have 6x 45, and that's throwing out the balance.


Keep the similar approach, balancing A and B.
Once they are split in half, now I need to "fine comb" the B array
For each element in it (from 0 to N), I'll calculate if that element can be moved to A, while keeping the balance
    In the 6x 45 case, SUM went from 450/800 to 750/500. 
    I have a relationship between HOW MANY of a certain element I have, and HOW HEAVY it's total weight is.
    I want to KEEP the HEAVIEST ones, but not the ones with too many elements:
        Ex: 1.000x 1's is worse than 2x 500.
            1.000x 1's and 2x499, I would still have to keep the 1's....
            
Not enough.... my approach is flawed.

If I could bruteforce and find every single combination that satisfies the conditions.
    I don't have enough time to do this, but it would be exponentially inneficient...
Then I can filter the ones with the smallest array size.
Then I pick the one with the greatest weight.



*/
function minimalHeaviestSetA(arr) {
    const subsetA = arr.sort((a, b) => a - b);
    const subsetB = [];
    const counter = countOccurrances(subsetA);
    let sumA = subsetA.reduce((acc, num) => acc + num);
    let sumB = 0;
    // console.log(counter, sumA, sumB);
    while (sumA > sumB) {
        const value = subsetA[subsetA.length - 1];
        for (let i = 0; i < counter[value]; ++i) {
            subsetB.unshift(subsetA.pop());
        }
        sumA -= counter[value] * value;
        sumB += counter[value] * value;
    }
    
    // At this point, they are balanced, let's iterate through B and pick out whatever we can.
    for (let i = 0; i < subsetB.length; ++i) {
        const value = subsetB[i];
        const itemWeight = counter[value] * value;
        if (sumA + itemWeight < sumB - itemWeight) {   
            subsetA.push(...subsetB.splice(i, counter[value]));
            --i; // Adjust i to repeat the current index.
        }
    }
    
    return subsetB;
}

function countOccurrances(array) {
    const hash = {};
    array.forEach(number => { 
        hash[number] = hash[number] + 1 || 1
    });
    
    return hash;
}

// 4/15 tests...