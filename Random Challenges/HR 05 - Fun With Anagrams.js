// Two strings are anagrams if they
// are permutations of each other. In
// other words, both strings have the
// same size and the same
// characters. For example,
// "aaagmnrs" is an anagram of
// "anagrams". Given an array of
// strings, remove each string that is
// an anagram of an earlier string,
// then return the remaining array in
// sorted order.
// Example
// str = ['code', 'doce', 'ecod', 'framer',
// 'frame']
// "code" and "doce" are anagrams.
// Remove "doce" from the array
// and keep the first occurrence
// "code" in the array.
// "code" and "ecod" are anagrams.
// Remove "ecod" from the
// array and keep the first
// occurrence "code" in the array.
// "code" and "framer" are not
// anagrams. Keep both strings in
// the array.
// "framer" and "frame" are not
// anagrams due to the extra 'r' in
// 'framer'. Keep both strings in the
// array.
// Order the remaining strings in
// ascending order: [
// "code","frame","framer"].
// Function Description
// Complete the function
// funWithAnagrams in the editor
// below.
// funWithAnagrams has the
// following parameters:

// Fun With Anagrams

// Two strings are anagrams if they are permutations of each other.
// In other words, both strings have the same size and the same characters.
// For example, "aaagmnrs" is an anagram of "anagrams". Given an array of strings, remove
// each stirng that is an anagram of an earlier string, then retur nthe remaining array in 
// sorted order.

// Example:

// str = [code ,doce, ecod, framer, frame]

// code and doce are anagrams. Remove "doce" from the array and keep the first occurance of "code" in the array.
// code and ecod are anagrams. Do the same as above.
// code an framer are not anagrams. Keep both stirngs in the array.
// framer and frame are not anagrams due to the extra "r" in framer. Keep both strings in the array.

// result is [code, framer, frame]

function funWithAnagrams(text) {
    let words = [];
    for (let i = 0; i < text.length; ++i) {
        if (neverAnagram(words, text[i])) {
            words.push(text[i]);
        }
    }

    return words.sort();
}

function neverAnagram(array, word) {
    for (let i = 0; i < array.length; ++i) {
        if (isAnagram(array[i], word)) {
            return false;
        }
    }
    return true;
}

function isAnagram(original, word) {
    if (original.length !== word.length) return false;
    let hash = {};
    original.split("").forEach(letter => {
        if(hash[letter]) ++hash[letter];
        else hash[letter] = 1;
    });

    const wordArray = word.split("");
    for (let i = 0; i < wordArray.length; ++i) {
        const letter = wordArray[i];
        if (hash[letter] && hash[letter] > 0) --hash[letter];
        else return false;
    }

    return Object.values(hash).filter(value => value > 0).length === 0;
}