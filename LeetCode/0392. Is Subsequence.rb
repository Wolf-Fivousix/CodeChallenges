# Easy

# Given two strings s and t, check if s is a subsequence of t.

# A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

# Example 1:

# Input: s = "abc", t = "ahbgdc"
# Output: true
# Example 2:

# Input: s = "axc", t = "ahbgdc"
# Output: false
 

# Constraints:

# 0 <= s.length <= 100
# 0 <= t.length <= 104
# s and t consist only of lowercase English letters.

# @param {String} s
# @param {String} t
# @return {Boolean}

# Create 2 pointers, both start at the start of S and T.
# Iterate through T, looking for the character at PointerS.
    # If we find it, update both pointers.
    # If T runs out, return false.
# Once S runs out of characters, we found all of them, return true.
def is_subsequence(s, t)
    pointerS = 0
    pointerT = 0

    while (pointerS < s.length)
        return false if (pointerT >= t.length)
        pointerS += 1 if (s[pointerS] == t[pointerT])
        pointerT += 1
    end
    
    true
end

# Runtime: 100 ms, faster than 5.00% of Ruby online submissions for Is Subsequence.
# Memory Usage: 210 MB, less than 60.00% of Ruby online submissions for Is Subsequence.