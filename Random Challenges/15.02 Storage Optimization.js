// Storage Optimization
// Amazon is experimenting with a flexible storage system for their warehouses. The storage
// unit consists of a shelving system which is one meter deep with removable vertical and
// horizontal separators. When all separators are installed, each storage space is one cubic
// meter (1' x 1' x 1'). Determine the volume of the largest space when a series of horizontal
// and vertical separators are removed.
// Example
// n = 6
// m = 6
// h = [4]
// v = [2]
// Consider the diagram below. The left image depicts the initial storage unit with n = 6
// horizontal and m = 6 vertical separators, where the volume of the largest storage space is 1
// × 1 x 1 . The right image depicts that unit after the fourth horizontal and second vertical
// separators are removed. The maximum storage volume for that unit is then 2 × 2 x 1 = 4
// cubic meters:
// Function Description
// Complete the function storage in the editor below.
// storage has the following parameter(s):
//      int n:  integer, the number of horizontal separators initially
//      int m:  integer, the number of vertical separators initially
//      int h[x]:  an array of integers, the horizontal separators to remove
//      int v[y]:  an array of integers, the vertical separators to remove

/*
 * Complete the 'storage' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER_ARRAY h
 *  4. INTEGER_ARRAY v
 */

/*
We don't really care WHERE the size changes, as we care about HOW MUCH it changes.
And HOW MUCH it changes, is going to depend if the spaces removed are adjacent.
That means I need to split my input in dinstinguised chunks. The biggest one is what we care.
    We want to "split" the input into it's largest consecutive count. (helper method)
Repeat the process with horizontal separators.
(Add 1 to each, since they are separators)
Multiple by each other.
That's the biggest space.

count adjacent separators
if array is empty, return 0.
    currentValue = first element of the array
    largestSize = 1;
    size 1;
    Iterate through the array (start at index 1) (assuming it is sorted, might not be)
        if current element is equal to currentValue + 1 (a sequence number)
            size + 1
        else 
            largestSize = max between largestSize and size
            size resets to 1.
        currentValue = currentElement
    return largestSize.

Because we had do sort H and V, we lost some efficiency.
Log Linear Time Complexity O(n log n) (sorting array and iterating through it once)
Linear Space Complexity O(h) or O(v), whichever is biggest (because we had to sort the input, now we had to use more space)
    If space is limited, we can bring this down by doing an "in place" sorting of the inputs, but that will affect heavly our processing times. (most likely making it Polynomial complexity)
*/
