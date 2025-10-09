// Medium

// You are given two positive integer arrays spells and potions, of length n and m respectively, where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.

// You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.

// Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell.
 

// Example 1:
// Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
// Output: [4,0,3]
// Explanation:
// - 0th spell: 5 * [1,2,3,4,5] = [5,10,15,20,25]. 4 pairs are successful.
// - 1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.
// - 2nd spell: 3 * [1,2,3,4,5] = [3,6,9,12,15]. 3 pairs are successful.
// Thus, [4,0,3] is returned.

// Example 2:
// Input: spells = [3,1,2], potions = [8,5,8], success = 16
// Output: [2,0,2]
// Explanation:
// - 0th spell: 3 * [8,5,8] = [24,15,24]. 2 pairs are successful.
// - 1st spell: 1 * [8,5,8] = [8,5,8]. 0 pairs are successful. 
// - 2nd spell: 2 * [8,5,8] = [16,10,16]. 2 pairs are successful. 
// Thus, [2,0,2] is returned.
 

// Constraints:

// n == spells.length
// m == potions.length
// 1 <= n, m <= 105
// 1 <= spells[i], potions[i] <= 105
// 1 <= success <= 1010

/*
Since we only want the COUNT of spell+potion that will be successful, we can calculate those on the fly.

BRUTE FORCE:
    Iterate through the spells
        For each spell, iterate through potions
            if the product of each hits or surpasses SUCESS, then increase the counter

Return the array of counts/pairings

Straight forward, but the problem here is efficiency.
Polynomial Time Complexity O(n * m) - because we'll recompute EVERY pairing individually.
Linear Space Compexlity O(N) - Our pairing is as big as our Spells input.

A little better:
We don't care for the position of the pairing, only for the counts.
We can SORT the potions and iterate through it until we find a success.
    After that, every single element in the sortedPotions WILL match the success.
    That said, this DOESN'T decrease the complexity, because worst case STILL remains calculating every single element.
    We could for sure make it better through Binary Search, but the improvement is marginal.

Can we do BETTER?
Knowing SUCCESS and SPELL, what POSSIBLE value of POTION could work?
We know which! It will be SUCCESS / SPELL! Any value equal or higher is guaranteed!
Doing a single pass through SPELLS we can calculate that number for each element.
    With a SORTED POTIONS, we can now binary search the element in there...

This is still the marginal improvement >.<
Probably NOT worth the complexity increase
*/

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
function successfulPairs(spells, potions, success) {
    const pairs = []
    for (const spell of spells) {
        let counter = 0
        for (const potion of potions) {
            if (spell * potion >= success) ++counter
        }
        pairs.push(counter)
    }

    return pairs
};

// Yeah, this solution exceeds the time limit...
// So let's do the sorting binary search approach:

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
function successfulPairs(spells, potions, success) {
    const pairs = []
    const sortedPotions = potions.sort((a, b) => a - b)
    console.log(sortedPotions)
    for (const spell of spells) {
        const potionStregthMinTarget = Math.ceil(success / spell) // Potions is an Integer array, so if we have a decimal we need the next INT over, or we won't get to the power we want.
        // Binary Search the index of nearest strength
        const index = binarySearchArrayIndex(potionStregthMinTarget, sortedPotions)
        console.log(`Index of ${spell} is ${index}`)
        if (index === sortedPotions.length) {
            pairs.push(0)
        } else {
            pairs.push(sortedPotions.length - index)
        }
        
    }

    return pairs
};

// Returns the index of the target element
// Or array.length if no element is found
function binarySearchArrayIndex(target, array) {
    let left = 0
    let right = array.length - 1
    let middle

    while (left <= right) {
        middle = Math.floor(((right - left) / 2) + left)
        const potion = array[middle]
        // console.log(potion)

        if (target <= potion) {
            right = middle - 1
        }
        else {
            left = middle + 1
        }
    }

    console.log(`left=${left} right=${right} middle=${middle}`)
    return left
}

// Runtime  117 ms Beats 45.40%
// Memory 84.82 MB  Beats 75.46%

// What was the catch in this binary search?
// Since the array is not made of UNIQUE values AND we're not looking for a very specific value, but for the
//FIRST value that fulfills the need, then we NEVER return uppon finding the target!
//What we do is that we keep iterating on the Binary Search until the LEFT pointer goes over one element the mininum required!
