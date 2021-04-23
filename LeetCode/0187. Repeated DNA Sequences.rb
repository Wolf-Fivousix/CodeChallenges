# Medium

# The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

# For example, "ACGAATTCCG" is a DNA sequence.
# When studying DNA, it is useful to identify repeated sequences within the DNA.

# Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

 

# Example 1:

# Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
# Output: ["AAAAACCCCC","CCCCCAAAAA"]
# Example 2:

# Input: s = "AAAAAAAAAAAAA"
# Output: ["AAAAAAAAAA"]
 

# Constraints:

# 1 <= s.length <= 105
# s[i] is either 'A', 'C', 'G', or 'T'.

# @param {String} s
# @return {String[]}
def find_repeated_dna_sequences(s)
    return [] if (s.length < 10)
    
    i = 0
    result = Set.new
    
    while i + 10 <= s.length
        sequence = s.slice(i, 10)
        result.add(sequence) if (s.index(sequence) != i)
        i += 1
    end
    
    result.to_a
end

# Time limit exceeded.
# This solution works, but is not currently eficient enough.
# Polynomial since we do a nested scan of the input for every sequence fragment