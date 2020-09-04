// A sentence is made up of a group of
// words. Each word is a sequence of
// letters, ( 'a'-'z', 'A'-'Z' ), that may
// contain one or more hyphens and
// may end in a punctuation mark:
// period (.), comma (,), question mark
// (?), or exclamation point (!). Words
// will be separated by one or more
// white space characters. Hyphens
// join two words into one and should
// be retained while the other
// punctuation marks should be
// stripped. Determine the number of
// words in a given sentence.
// Example
// s = 'How many eggs are in a half-
// dozen, 13?'
// The list of words in the string is
// ['How', 'many', 'eggs', 'are', in', 'a',
// 'half-dozen'] and the number of
// words is 7 . Notice that the numeric
// string, '13', is not a word because it
// is not within the allowed character
// set.
// Function Description
// Complete the function howMany in
// the editor below.
// howMany has the following
// parameter(s):
// sentence: a string
// Returns:
// int: an integer that represents the
// number of words in the string
// Constraints
// 0 < length of s ≤ 10 5

// Sample Case 0
// Sample Input
// he is a good programmer, he won 865 competitions, but sometimes he dont. What do you think? All test-cases should pass. Done-done?

// Sample Output
// 21
// Explanation
// The substring '865' is not a word,
// so is not included in the count.
// The hyphenated words 'test-
// cases' and 'Done-done' each
// count as 1 word. The total
// number of words in the string is
// 21.
// Sample Case 1
// Sample Input
// jds dsaf lkdf kdsa fkldsf, adsbf ldka ads? asd bfdal ds bf[l. akf dhj ds 878  dwa WE DE 7475 dsfh ds  RAMU 748 dj.

// Sample Output
// 21
// Explanation
// Note that the substring 'bf[l' is
// not a word because of the invalid
// character. Other substrings that
// are not words are '878',
// '7475' and '748'. The total
// number of words in the string is 21.

/*
 * Complete the 'howMany' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING sentence as parameter.
 */

function howMany(sentence) {
    let words = sentence.split(" ");
    
    words = words.filter(word => {
        if (!word.length) return false;
        for (let i = 0; i < word.length; ++i) {
            if (word[i] === "." || word[i] === "," || word[i] === "?" || word[i] === "!" || word[i] === "-") continue;

            if (word[i].charCodeAt() < 65 ||
                word[i].charCodeAt() > 122 ||
                (word[i].charCodeAt() > 90 && word[i].charCodeAt() < 97)) return false;
        }
        return true;
    });

    return words.length;

}

// 15/15 Test Cases.