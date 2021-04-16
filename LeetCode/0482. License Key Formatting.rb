# Easy

# You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.

# We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.

# Return the reformatted license key.

 

# Example 1:

# Input: s = "5F3Z-2e-9-w", k = 4
# Output: "5F3Z-2E9W"
# Explanation: The string s has been split into two parts, each part has 4 characters.
# Note that the two extra dashes are not needed and can be removed.
# Example 2:

# Input: s = "2-5g-3-J", k = 2
# Output: "2-5G-3J"
# Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.
 

# Constraints:

# 1 <= s.length <= 105
# s consists of English letters, digits, and dashes '-'.
# 1 <= k <= 104

# @param {String} s
# @param {Integer} k
# @return {String}
def license_key_formatting(s, k)
    license = s.gsub(/-/, "").upcase.split("")
    result = ""
    letter_counter = license.length % k
    letter_counter = letter_counter == 0 ? k : letter_counter
    while(!license.empty?) do
        result += license.shift
        letter_counter -= 1
        if letter_counter == 0
            letter_counter = k
            result += "-"
        end
    end
    
    result.chop
end

# Runtime: 444 ms, faster than 8.33% of Ruby online submissions for License Key Formatting.
# Memory Usage: 345.4 MB, less than 8.33% of Ruby online submissions for License Key Formatting.