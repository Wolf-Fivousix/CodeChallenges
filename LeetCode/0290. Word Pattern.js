// Easy

// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

// Example 1:

// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
// Example 2:

// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

// Split the string into an array separated by white spaces.
// if the length is different than the legth of pattern, return false.

// For the pattern AND string, we need to know which characters map
// to which indexes. That's important for our comparsion later.
// We can iterate through them once and hash table it's elements to the indexes found.
    // If the values length are different, return false.
    // Then we iterate through the values arrays.
            // if we find a index that is different, we can return false.
// At the end, return true.

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
function wordPattern(pattern, str) {
    const string = str.split(" ");
    if (string.length !== pattern.length) return false;
    
    const pats = Object.values(hashMe(pattern));
    const seqs = Object.values(hashMe(string));
    
    if (pats.length !== seqs.length) return false;
    
    for (let i = 0; i < pats.length; ++i) {
        const patt = pats[i];
        const seqq = seqs[i];
        if (patt.length !== seqq.length) return false;
        
        for (let j = 0; j < patt.length; ++j) {
            if (patt[j] !== seqq[j]) return false;
        }
    }
    
    
    return true;
}

function hashMe(sequence) {
    const hash = {};
    
    for (let i = 0; i < sequence.length; ++i) {
        if (hash[sequence[i]]) hash[sequence[i]].push(i);
        else hash[sequence[i]] = [i];
    }
    
    return hash;
}