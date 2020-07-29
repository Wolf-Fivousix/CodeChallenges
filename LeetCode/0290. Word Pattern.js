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

// Runtime: 80 ms, faster than 31.58% of JavaScript online submissions for Word Pattern.
// Memory Usage: 36.4 MB, less than 8.33% of JavaScript online submissions for Word Pattern.

// Linear Time and Space complexity, as we iterate through the inputs about 3 times and
// our hash tables grow as our input grows.
// Given, there's only so many characters that can be used for the key. But since we are hashing
// both inputs, only one becomes constant, while String remains linear.


// Proposed Solutions
// This problem is similar to Isomorphic Strings.

// Approach 1: Two Hash Maps
// Intuition

// The most naive way to start thinking about this problem is to have a single hash map, tracking which character (in pattern) maps to what word (in str). As you scan each character-word pair, update this hash map for characters which are not in the mapping. If you see a character which already is one of the keys in mapping, check whether the current word matches with the word the character maps to. If they do not match, you can immediately return False, otherwise, just keep on scanning until the end.

// This type of check will work well for cases such as:

// "abba" and "dog cat cat dog" -> Returns True.
// "abba" and "dog cat cat fish" -> Returns False.
// But it will fail for:

// "abba" and "dog dog dog dog" -> Returns True (Expected False).
// A fix for this is to have two hash maps, one for mapping characters to words and the other for mapping words to characters. While scanning each character-word pair,

// If the character is NOT in the character to word mapping, you additionally check whether that word is also in the word to character mapping.
// If that word is already in the word to character mapping, then you can return False immediately since it has been mapped with some other character before.
// Else, update both mappings.
// If the character IS IN in the character to word mapping, you just need to check whether the current word matches with the word which the character maps to in the character to word mapping. If not, you can return False immediately.
// Implementation

// class Solution {
//     public boolean wordPattern(String pattern, String str) {
//         HashMap <Character, String> map_char = new HashMap();
//         HashMap <String, Character> map_word = new HashMap();
//         String[] words = str.split(" ");

//         if (words.length != pattern.length())
//             return false;

//         for (int i = 0; i < words.length; i++) {
//             char c = pattern.charAt(i);
//             String w = words[i];
//             if (!map_char.containsKey(c)) {
//                 if (map_word.containsKey(w)) {
//                     return false;
//                 } else {
//                     map_char.put(c, w);
//                     map_word.put(w, c);
//                 }

//             } else {
//                 String mapped_word = map_char.get(c);
//                 if (!mapped_word.equals(w))
//                     return false;
//             }
//         }

//         return true;
//     }
// }

// Complexity Analysis

// Time complexity : O(N)O(N) where NN represents the number of words in str or the number of characters in pattern.

// Space complexity : O(M)O(M) where MM represents the number of unique words in str. Even though we have two hash maps, the character to word hash map has space complexity of O(1)O(1) since there can at most be 26 keys.

// Addendum: Rather than keeping two hash maps, we can only keep character to word mapping and whenever we find a character that is not in the mapping, you can check whether the word in current character-word pair is already one of the values in the character to word mapping. However, this is trading time off for better space since checking for values in a hash map is a O(M)O(M) operation where MM is the number of key value pairs in the hash map. Thus, if we decide to go this way, our time complexity will be O(NM)O(NM) where NN is the number of unique characters in pattern.

// Another similar approach to Approach 1 would be using hash set to keep track of words which have been encountered. Instead of checking whether the word is already in the word to character mapping, you just need to check whether the word is in the encountered word hash set. And, rather than updating the word to character mapping, you just need to add the word to the encountered word hash set. Hash set would have a better practical space complexity even though the big-O space complexity for hash set and hash map is the same.

// Approach 2: Single Index Hash Map
// Intuition

// Rather than having two hash maps, we can have a single index hash map which keeps track of the first occurrences of each character in pattern and each word in str. As we go through each character-word pair, we insert unseen characters from pattern and unseen words from str.

// The goal is to make sure that the indices of each character and word match up. As soon as we find a mismatch, we can return False.

// Let's go through some examples.

// pattern: 'abba'

// str: 'dog cat cat dog'

// 'a' and 'dog' -> map_index = {'a': 0, 'dog': 0}
// Index of 'a' and index of 'dog' are the same.
// 'b' and 'cat' -> map_index = {'a': 0, 'dog': 0, 'b': 1, 'cat': 1}
// Index of 'b' and index of 'cat' are the same.
// 'b' and 'cat' -> map_index = {'a': 0, 'dog': 0, 'b': 1, 'cat': 1}
// 'b' is already in the mapping, no need to update.
// 'cat' is already in the mapping, no need to update.
// Index of 'b' and index of 'cat' are the same.
// 'a' and 'dog' -> map_index = {'a': 0, 'dog': 0, 'b': 1, 'cat': 1}
// 'a' is already in the mapping, no need to update.
// 'dog' is already in the mapping, no need to update.
// Index of 'a' and index of 'dog' are the same.
// pattern: 'abba'

// str: 'dog cat fish dog'

// 'a' and 'dog' -> map_index = {'a': 0, 'dog': 0}
// Index of 'a' and index of 'dog' are the same.
// 'b' and 'cat' -> map_index = {'a': 0, 'dog': 0, 'b': 1, 'cat': 1}
// Index of 'b' and index of 'cat' are the same.
// 'b' and 'fish' -> map_index = {'a': 0, 'dog': 0, 'b': 1, 'cat': 1, 'fish': 2}
// 'b' is already in the mapping, no need to update.
// Index of 'b' and index of 'fish' are NOT the same. Returns False.
// Implementation
// class Solution {
//     public boolean wordPattern(String pattern, String str) {
//         HashMap map_index = new HashMap();
//         String[] words = str.split(" ");

//         if (words.length != pattern.length())
//             return false;

//         for (Integer i = 0; i < words.length; i++) {
//             char c = pattern.charAt(i);
//             String w = words[i];

//             if (!map_index.containsKey(c))
//                 map_index.put(c, i);

//             if (!map_index.containsKey(w))
//                 map_index.put(w, i);

//             if (map_index.get(c) != map_index.get(w))
//                 return false;
//         }

//         return true;
//     }
// }

// Differentiating between character and string: In Python there is no separate char type. And for cases such as:

// pattern: 'abba' str: 'b a a b'

// Using the same hash map will not work properly. A workaround is to prefix each character in pattern with "char_" and each word in str with "word_".


// Complexity Analysis

// Time complexity : O(N)O(N) where NN represents the number of words in the str or the number of characters in the pattern.

// Space complexity : O(M)O(M) where MM is the number of unique characters in pattern and words in str.