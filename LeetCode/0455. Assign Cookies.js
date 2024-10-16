// Easy

// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

 

// Example 1:

// Input: g = [1,2,3], s = [1,1]
// Output: 1
// Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
// And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
// You need to output 1.
// Example 2:

// Input: g = [1,2], s = [1,2,3]
// Output: 2
// Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
// You have 3 cookies and their sizes are big enough to gratify all of the children, 
// You need to output 2.
 

// Constraints:

// 1 <= g.length <= 3 * 104
// 0 <= s.length <= 3 * 104
// 1 <= g[i], s[j] <= 231 - 1

/*
"Brute Force":
We want to SORT the inputs. Why? Because this will save us multiple iterations by always assigning the smallest cookie to the least greedy child.
If at any point the greeFactor goes above our largest cookie, we know there is not even a chance to satisfy those greedy children, so we can break early.

Sort both inputs in ascending order.
initiate satisfiedChildren counter at 0
initiate index for both arrays at 0
    childIndex
    cookieIndex
iterate while childIndex is lower than greedFactor length AND cookieIndex is lower than cookieSize length.
    get currentCookie
    get current Greed
    if greed is equal or lower than cookie,
        increase satisfied counter
        move BOTH pointers
    else
        Move ONLY cookie pointer

return satisfiedChildren

Sorting like this is usually Log Linear O(n log n) - But could be less efficient. Let's consider optimal efficiency though.
At worst case, we will iterate through the inputs a 2nd time, fulfilling each child. That's another linear pass.
Since we are also creating a sorted copy of the input, that's linear space as well.

So we have Log Linear Time Complexity O(n log n) -> Correction, greedFactors and cookieSizes are NOT guaranteed to be the same length. So this would have to be n log n + m log m.
and Linear Space Complexity O(n)

*/

/**
 * @param {number[]} greedFactors
 * @param {number[]} cookieSizes
 * @return {number}
 */
function findContentChildren(greedFactors, cookieSizes) {
    const sortedGreedFactors = greedFactors.toSorted((a, b) => a - b)
    const sortedCookieSizes = cookieSizes.toSorted((a, b) => a - b)
    let satisfiedChildren = 0
    let childIndex = 0
    let cookieIndex = 0

    while (childIndex < sortedGreedFactors.length && cookieIndex < sortedCookieSizes.length) {
        const childGreed = sortedGreedFactors[childIndex]
        const cookieSize = sortedCookieSizes[cookieIndex]
        if (childGreed <= cookieSize) {
            ++satisfiedChildren
            ++childIndex
            
        }
        ++cookieIndex
    }

    return satisfiedChildren
};

// Runtime 87 ms Beats 43.68%
// Memory 56.72 MB Beats 23.59%
