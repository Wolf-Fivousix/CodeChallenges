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


*/
