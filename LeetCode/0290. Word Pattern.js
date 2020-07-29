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

// For the pattern string, we need to know which characters map
// to which indexes. That's important for our comparsion later.
// We can iterate through the pattern once and hash table it's
// character to the indexes found.

// With that information we can now iterate through every key.
    // in every key, we iterate through every index.
        // We then theck if the string has the same word in all those positions.
        // if not, we return false early.

// Once this process is complete, the pattern is true.

// There's a problem here.
// Think about pattern = "abba", str = "dog dog dog dog" => False
// In this case, we would return true, since the letters are compared within itself.
// Let's change our approach.
// How about we do the same process of "indexing" the elements of both sequences.
// If the values length are different, return false.
// Then we iterate through the values.
    // For each value, we iterate again and compare indexes.
        // if we find a index that is different, we can return false.

// At the end, return true.

// Possible point of failure: Does the hashes values get orderd by creation time or
// lexicographically? That could break our solution.
// Testing shows that it would return them by order inserted. Let's do it.

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