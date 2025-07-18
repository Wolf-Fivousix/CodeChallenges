// Easy

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
 

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

/*
BRUTE FORCE:
Scan through the flowerbed input and mark any index where we see 3 0's in a row. At the end of the scan, we know as many flowers as we can plant.
Just compare to our N input and return.

O(n) Linear Time Complexity as we only scan the input once.
O(1) Constant space complexity, we only use a few variables.

Although this is the "stupidiest" approach, it actually works very well.

ALTERNATIVE ("smart"):
We know that every 1 separates the space where we could plant another flower.
If we split the input wherever we have "1", we will have multiple segments of array.
We then sum up the modulo of the lenght of each piece by 3. Meaning: 3 spaces mean we can plant 1 flower, 6 spaces 2 flowers, etc... Anything less than 3 is not plantable.

Splitting the input will double the memory allocated (plus overhead for all the arrays)
We'll iterate at least once through it. But worse case we have multiple 1 and 2's arrays, which basically will require another "pass" through it.

O(n) Linear Time Complexity (although slighthly lower than the BRUTE FORCE appraoch)
O(n) Linear Space Complexity

*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
function canPlaceFlowers(flowerbed, n) {
    let flowerSpaces = 0
    let emptyPlots = 1
    for (let plot of flowerbed) {
        if (plot === 1) emptyPlots = 0
        else {
            emptyPlots +=1

            if (emptyPlots === 3) {
                ++flowerSpaces
                emptyPlots = 1
            }
        }
    }

    if (emptyPlots == 2) ++flowerSpaces

    return flowerSpaces >= n
};

// Runtime 2 ms Beats 51.55%
// Memory 58.14 MB Beats 9.36%

// Very interesting! The edge cases of the plots in the beggining and ending of the array are something that can be easily missed.
// And they make the "alternative" approach not work.