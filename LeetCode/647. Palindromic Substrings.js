// Medium

// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:

// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
 

// Example 2:

// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

// Note:

// The input string length won't exceed 1000.

/**
 * @param {string} s
 * @return {number}
 */

/*
There are 3 different problems here:
1) Get all substrings of S.
2) Check if a string is a palindrome.
3) Count the same palindrome, as long as the indexes of the letters are different.


After a lot of thought, I dropped the "combinatory" idea and went with a Moving Window Scan.
declare counter at 0
Window size starts a 1
Loop until the window size becomes greater than the string length
    loop through the string, starting at 0, until (lesser or equal) INDEX + Window reaches the end of string length.
        check if the current word is a palindrome.
            DETAIL: This "window" method string scanning will have an efficiency drop when I "slice". Keep that in mind.
        increase the counter if it is.
return the counter

First loop is size N
    Second (inner) loop, will do a 1 indexed scan, so Size N again.
        Palindrome Check (2 pointer approach, linear again), another Size N.
Detail: Real complexity is not N^3, because when we palindrome check the whole string, our wnidow is already max size, 
so it only happens once. But going into this fine granular mathematics doesn't give us any benefits.

Polynomial Time Complexity O(N^3)
Linear Space Compelxity O(N) - Because we need to "slice" the string for our palindrome check

As an optimization, we can add any encountered string and/or palindrome to a hash table to burn memmory instead of processing time.
Another optimization would be to pass in the index to our "isPalindrome" helper method, bringing Space Complexity down to Constant.

*/
function countSubstrings(s) {
    // console.log("a", isPalindrome("a"));
    // console.log("abc", isPalindrome("abc"));
    // console.log("aaa", isPalindrome("aaa"));
    // console.log("abcd".slice(1,2));
    // console.log("abcd".slice(2,4));
    // console.log("abcd".slice(0,4));
    let counter = 0;
    let window = 1;
    while (window <= s.length) {
        for (let i = 0; i + window <= s.length; ++i) {
            if (isPalindrome(s.slice(i, i + window))) ++counter;
        }
        ++window;
    }
    
    return counter;
};

function isPalindrome(word) {
    let start = 0;
    let end = word.length - 1;
    
    while (start <= end) {
        if (word[start] !== word[end]) return false;
        ++start;
        --end;
    }
    
    return true;
}

// Runtime: 528 ms, faster than 17.73% of JavaScript online submissions for Palindromic Substrings.
// Memory Usage: 44.6 MB, less than 40.60% of JavaScript online submissions for Palindromic Substrings.
// Runtime: 508 ms, faster than 18.13% of JavaScript online submissions for Palindromic Substrings.
// Memory Usage: 44.6 MB, less than 41.95% of JavaScript online submissions for Palindromic Substrings.


// PROPOSED EXPLANATIONS
// https://leetcode.com/problems/palindromic-substrings/solution/
/////////////////////////////////////////////////////////////////////////////
// Solution
// A Brief Refresher
// What is a palindrome?

// A palindrome is a sequence of characters that read the same, forwards and backwards. If you tried reversing a palindrome, you wouldn't see a change. For example, the string "kayak" is a palindrome, but the word "livid" isn't one.

// There are two types of palindromes...

// Odd and even length palindromes!

// Odd-length palindromes have a single character in the middle. e.g. "civic" with middle character 'v'.

// Even-length palindromes have two characters constitute the middle, both of which are same. e.g. "noon" with two middle characters 'o'.

// Pop Quiz: Is "y" a palindrome? Is "gg" a palindrome?

// Yes, both of the above are palindromes. "y" is single letter (hence odd-length) palindrome whose middle is the single 'y' character. "gg" is a double letter (hence even-length) palindrome whose middle is comprised of the two 'g' characters.

// Palindromes are compositionally homogeneous around their center...

// In layman's terms, smaller palindromes make up larger palindromes. If you take the palindrome "eve" and surround it with the character 'l', you get a larger palindrome "level". Conversely, if you removed the starting and ending characters from "eve', you'd be left with the smaller, single-character palindrome "v".

// Approach #1: Check All Substrings
// Intuition

// Just do what the question says! We look at all substrings of the input string and check if they are palindromes.

// Algorithm

// Each substring is denoted by a pair of variables pointing to the start and end indices of the sub-string.

// A single character substring is denoted by start and end indices being equal in value.

// Checking for a palindrome is simple; we check if the ends of the substring are the same character, going outside-in:

// If they aren't, this substring is not a palindrome.
// Else, we continue checking inwards until we get to the middle.

// Complexity Analysis

// Time Complexity: O(N^3)O(N 
// 3
//  ) for input string of length NN.
// Since we just need to traverse every substring once, the total time taken is sum of the length of all substrings.

// In a string of length NN, then there are:

// NN substrings of size 11.
// N-1N−1 substrings of size 22.
// N-3N−3 substrings of size 33.
// ...
// 11 substring of size NN (which is the entire string).
// Total time taken to traverse all of these strings is in the order of

// \begin{aligned} &1 \cdot (N) + 2 \cdot (N-1) + 3 \cdot (N-2) + ... + N \cdot (1) \\ &= N + 2(N-1) + 3(N-2) + ... + N(N - (N-1)) \\ &= (N + 2N + 3N + ... + N^2) - (2 + (3 \times 2) + (4 \times 3) + ... + (N \times (N-1))) \\ &= N \sum_{i = 1}^{N} i - \sum_{i=1}^{N} i \cdot (i-1) \\ \end{aligned} 
// ​	
  
// 1⋅(N)+2⋅(N−1)+3⋅(N−2)+...+N⋅(1)
// =N+2(N−1)+3(N−2)+...+N(N−(N−1))
// =(N+2N+3N+...+N 
// 2
//  )−(2+(3×2)+(4×3)+...+(N×(N−1)))
// =N 
// i=1
// ∑
// N
// ​	
//  i− 
// i=1
// ∑
// N
// ​	
//  i⋅(i−1)
// ​	
 

// The term \sum_{i=1}^{N} i \cdot (i-1)∑ 
// i=1
// N
// ​	
//  i⋅(i−1) can we written as \sum_{i=1}^{N} i^2 - \sum_{i=1}^{N} i∑ 
// i=1
// N
// ​	
//  i 
// 2
//  −∑ 
// i=1
// N
// ​	
//  i, which transforms the aforementioned expression to

// \begin{aligned} &N \sum_{i = 1}^{N} i - \sum_{i=1}^{N} i^2 + \sum_{i=1}^{N} i \\ &= (N+1) \sum_{i = 1}^{N} i - \sum_{i=1}^{N} i^2 \\ &= \frac{N(N+1)^2}{2} - \frac{N(N+1)(2N+1)}{6} \\ &= \frac{N(N+1)^2}{6} \simeq N^3 \end{aligned} 
// ​	
  
// N 
// i=1
// ∑
// N
// ​	
//  i− 
// i=1
// ∑
// N
// ​	
//  i 
// 2
//  + 
// i=1
// ∑
// N
// ​	
//  i
// =(N+1) 
// i=1
// ∑
// N
// ​	
//  i− 
// i=1
// ∑
// N
// ​	
//  i 
// 2
 
// = 
// 2
// N(N+1) 
// 2
 
// ​	
//  − 
// 6
// N(N+1)(2N+1)
// ​	
 
// = 
// 6
// N(N+1) 
// 2
 
// ​	
//  ≃N 
// 3
 
// ​	
 

// Space Complexity: O(1)O(1). We don't need to allocate any extra space since we are repeatedly iterating on the input string itself.

// Approach #2: Dynamic Programming
// Intuition

// Approach #1 spent a lot of time checking if a particular substring is a palindrome. What if we could speed up this check, by say, reusing previously calculated results? Turns out that checking whether a string is a palindrome or not, is a good candidate for dynamic programming!

// It displays the two, necessary characteristics of a dynamic programming problem:

// Optimal substructure: Remember that larger palindromes are made of smaller palindromes. Congratulation, we have discovered a substructure to our problem! Knowing that a string is made up of a palindrome helps us determine if the string itself is a palindrome.

// Here's an example: for the string "axbobxa", the first and the last characters match, so it's a potential palindrome. If we knew already that its substring "xbobx" is also a palindrome, there wouldn't be a need for any further checks.

// But is this substructure optimal?

// Yes! Since the optimal result for a string relies only on the optimal result for just one subproblem, and has to do just one check for the boundary characters (in constant time), this is an optimal substructure. We cannot get this result by checking fewer than one subproblem (it wouldn't be a substructure anymore) or doing the boundary characters check faster (it's already constant time!).

// Overlapping sub-problems: While checking all substrings of a large string for palindromicity, we might need to check some smaller substrings for the same, repeatedly. If we store the result of processing those smaller substrings, we can reuse those while processing larger substrings.

// Here's an example: for the string "axbobxa", the substring "bob" needs to checked for the substring "xbobx" and the string "axbobxa". In fact, to check all three of these strings, the single character string "o" needs to be checked.

// Algorithm

// Here's the simple framework for our dynamic programming solution:

// Define the dynamic programming state. This is the result that gets reused in further computations.

// Let's define our state \text{dp(i, j)}dp(i, j), which tells us whether the substring composed of the i^{th}i 
// th
//   to the j^{th}j 
// th
//   characters of the input string, is a palindrome or not.

// Thus, the answer to our problem lies in counting all substrings whose state is true.

// Identify the base cases. There are essentially two base-cases:

// Single letter substrings are palindromes by definition. i.e. dp(i, i) = truedp(i,i)=true
// Double letter substrings composed of the same character are palindromes. i.e. dp(i,i+1) = \begin{cases} true &\text{if \space \space} s_i = s_{i+1} \\ false &\text{otherwise} \end{cases}dp(i,i+1)={ 
// true
// false
// ​	
  
// if   s 
// i
// ​	
//  =s 
// i+1
// ​	
 
// otherwise
// ​	
 
// Identify the optimal substructure. A string is considered a palindrome if:

// Its first and last characters are equal, and
// The rest of the string (excluding the boundary characters) is also a palindrome.
// This optimal substructure can be formulated into a recurrence rule: dp(i,j) = \begin{cases} true &\text{if \space \space} dp(i+1, j-1) \land (s_i = s_j) \\ false &\text{otherwise} \end{cases}dp(i,j)={ 
// true
// false
// ​	
  
// if   dp(i+1,j−1)∧(s 
// i
// ​	
//  =s 
// j
// ​	
//  )
// otherwise
// ​	
 

// Identify overlapping sub-problems and compute them only once. The optimal substructure mentioned above ensures that the state for a string depends only on the state for a single substring. If we compute (and save) the states for all smaller strings first, larger strings can be processed by reusing previously saved states. The base cases that we have identified already define states for single and double letter strings. We can use those to compute states for three character (and subsequently larger) strings.

// The answer is found by counting all states that evaluate true. Since each state tells whether a unique substring is a palindrome or not, counting true states provides us the number of palindromic substrings.


// Complexity Analysis

// Time Complexity: O(N^2)O(N 
// 2
//  ) for input string of length NN. The number of dynamic programming states that need to calculated is the same as the number of substrings i.e. {N \choose 2} = N(N-1)/2( 
// 2
// N
// ​	
//  )=N(N−1)/2. Each state can be calculated in constant time using a previously calculated state. Thus overall time take in the order of O(N^2)O(N 
// 2
//  ).

// Space Complexity: O(N^2)O(N 
// 2
//  ) for an input string of length NN. We need to allocate extra space to hold all N \choose 2( 
// 2
// N
// ​	
//  ) dynamic programming states.

// Pop Quiz: Can you reduce the space consumption of this approach to linear extra space (i.e. O(N)O(N))?

// Yes, it's possible! Notice that the states of a subsbtring of length nn actually rely only on states for substrings of length n-2n−2. Thus, we can choose to store only the states for substrings of length n-1n−1 and n-2n−2 for an iteration of susbtrings of length nn, which takes only O(N)O(N) extra space. All states older than those can be discarded in that iteration. The next approach builds on this insight.

// Approach #3: Expand Around Possible Centers
// Intuition

// Palindromes are like onions, you remove the boundary characters and you're left with another, smaller palindrome.

// Multiple palindromes have the same centers. If we choose a center, we can continue to expand around it as long as we can make larger and larger palindromes.

// Let's take the string "lever" as an example: if you choose the character 'v' as the center, one can see that the palindromes "v" and "eve" are possible. However, the final expansion "lever" is not a palindrome (the first and last characters don't match).

// Algorithm

// We choose all possible centers for potential palindromes:

// Every single character in the string is a center for possible odd-length palindromes
// Every pair of consecutive characters in the string is a center for possible even-length palindromes.
// For every center, we can expand around it as long as we get palindromes (i.e. the first and last characters should match).


// Complexity Analysis

// Time Complexity: O(N^2)O(N 
// 2
//  ) for input string of length NN. The total time taken in this approach is dictated by two variables:

// The number of possible palindromic centers we process.
// How much time we spend processing each center.
// The number of possible palindromic centers is 2N-12N−1: there are NN single character centers and N-1N−1 consecutive character pairs as centers.

// Each center can potentially expand to the length of the string, so time spent on each center is linear on average. Thus total time spent is N \cdot (2N-1) \simeq N^2N⋅(2N−1)≃N 
// 2
//  .

// Space Complexity: O(1)O(1). We don't need to allocate any extra space since we are repeatedly iterating on the input string itself.

// Further Thoughts
// Better approaches do exist to solve this problem in sub-quadratic time, however those are significantly complex and impractical to implement in most interviews.

// Some known approaches are:

// Binary Search with a fast rolling hash algorithm (like Rabin-Karp). This approach tries to optimize Approach #3 by speeding up the time to figure out the largest palindrome for each of the 2N-12N−1 centers in logarithmic time. This approach counts all palindromic substrings in O(N \log{N})O(NlogN) time. Here's a Quora answer by T.V. Raziman which explains this approach well.

// Palindromic trees (also known as EERTREE). It is a data structure invented by Mikhail Rubinchik which links progressively larger palindromic substrings within a string. The tree construction takes linear time, and the number of palindromic substrings can be counted while constructing the tree in O(N)O(N) time. Additionally, the tree can be used to compute how many distinct palindromic substrings are in a string (it's just the number of nodes in the tree) and how frequently each such palindrome occurs. This blog post does a good job of explaining the construction of a palindromic tree.

// Suffix Arrays with quick Lowest common Ancestor (LCA) lookups. This approach utilizes Ukonnen's algorithm to build suffix trees for the input string and its reverse in linear time. Subsequently, quick LCA lookups can be used to find maximum palindromes, which are themselves composed of smaller palindromes. This approach can produce a count of all palindromic substrings in O(N)O(N) time. The original paper describes the algorithm, and this Quora answer demonstrates an example.

// Manacher's algorithm. It's basically Approach #3, on steroids.TM The algorithm reuses computations done for previous palindromic centers to process new centers in sub-linear time (which reduces progressively for each new center). This algorithm counts all palindromic substrings in O(N)O(N) time. This e-maxx post provides a fairly simple implementation of this algorithm.