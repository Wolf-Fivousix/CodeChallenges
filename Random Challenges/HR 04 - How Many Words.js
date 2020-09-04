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

// Linear Time Complexity, as we traverse the input once to break it up, then a second time to filter.
// Linear Space Complexity, as we store the filtered array.

// We could optimize to do it all in one pass and no extra memory, but unless strictly necessary, the logic like this is easier to understand.

// test 0 => 21
// he is a good programmer, he won 865 competitions, but sometimes he dont. What do you think? All test-cases should pass. Done-done?

// test 1 => 21
// jds dsaf lkdf kdsa fkldsf, adsbf ldka ads? asd bfdal ds bf[l. akf dhj ds 878  dwa WE DE 7475 dsfh ds  RAMU 748 dj.

// test 2
// b? Dl )B 4(V! A. MK, YtG ](f 1m )CNxuNUR {PG? 
// Expected Output
// 5

// test 3
// there's a " " as the first character.
//  )}OJR 92ww. z )UPl 49e ]S  g. zrZEnQ  D. FoKp ]ow 1EceB 3oK }w ]CA? L 3LPbDN! trqJY 0sBmm. Nwn
// Expected Output
// 8

// test 5
// n? O, A? ir! FhL  gmaMbo? IQtz  Nx  rkQ?  17E? Fl-TX! P (n  r   745yDs  E 4y (bPg 1Vs, KGz-jgE 92lFDOLTE. cvuXh 5IL-h 6VN. Nqz  G. KsUj (k, Hjh 4j, q-Edw 2e,  )C  v-zyt-T 0q. BVrKLW 3u, B! Cz }DGZe-mn-jcw! hT! V? ySyJ 1k. wo. V 9wI  oR!  0JD. GLKSBUB 3Eyyg )Lft  oTHbC! apSa! ujCw, Es  z )ITnWSk. nn, w 1O-xmsw  JcB. ct? lSv {HpYTM? Mc 7C (lhM.  }G {J, w [IChoXO 6dbUgKs? MLr? o 17Q! fFh [(3x. CaGQhQ  akej }p.  (g? teS. B 8qKS )n ]E-HQ,  5Mm 2qX )xiYUO! DZ! cB! G-WZ  cZc, JqpdPEpC {d, Ce, m,  8b? HH 8W 68EM, sJ-VsgDo-u 4C   5U 5mMr ]s 1tMu 8GP 7b-MW-d 6w! v 4Vu 9mBV 58vyO? uxQa [xZ! P. DA! xNr 4nl?  5n  ElH! O 4QvCf. i 30tN 8bM 6y  Yei! jsxT-a 3CEy 5KMLYdg! L 7D 1xxQViNT. rucIiius  o? r, H {1aH 0g  is 9C 3olX }P? azL-ICWgwrC! tv [FIt?  1lF (m 9zrcAfSwNjetRkc [(DSqN. yfa. uu 6BiL (L (r 0Fo 7{hJ {Py   )4JH 14oWKQdI }L )2)PZz.  5(U. BreAl 8B-pYHla! O 6rEzI?  9LDwB! aG? F-OqB (6s-cu? Zx (cZ )xv. bkdBuPZR 2Gij 2hQ 60jV 9FukJPhQc )R 9ztytQ!  ]l 6(a, S? I  b {tS,  (s, u 6)P-irIWA-vj? O, e 8
// Expected Output
// 91