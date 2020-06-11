// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0
// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
function numJewelsInStones(J, S) {
    const jewels = hashMe(J);
    
    // let counter = 0;
    // for (let i = 0; i < S.length; ++i) {
    //     if (jewels[S[i]]) ++counter;
    // }
    
    // return counter;
    
    // Condensed version.
    return S.split("").reduce((distinct, stone) => jewels[stone] ? ++distinct : distinct, 0);
};

function hashMe(array) {
    const hash = {};
    
    for (let i = 0; i < array.length; ++i) {
        if (!hash[array[i]]) hash[array[i]] = array[i];
    }
    
    return hash;
}

// Runtime: 72 ms, faster than 37.98% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 33.8 MB, less than 89.10% of JavaScript online submissions for Jewels and Stones.

// We could scan the Jewels array every single time to save memory, but that would cost time.
// This way we have Linear Time Complexity (for N = Stones) and Linear Space Complexity (for N = jewels)