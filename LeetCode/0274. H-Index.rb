# Medium

# Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return compute the researcher's h-index.

# According to the definition of h-index on Wikipedia: A scientist has an index h if h of their n papers have at least h citations each, and the other n − h papers have no more than h citations each.

# If there are several possible values for h, the maximum one is taken as the h-index.

 

# Example 1:

# Input: citations = [3,0,6,1,5]
# Output: 3
# Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
# Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
# Example 2:

# Input: citations = [1,3,1]
# Output: 1
 

# Constraints:

# n == citations.length
# 1 <= n <= 5000
# 0 <= citations[i] <= 1000

# @param {Integer[]} citations
# @return {Integer}
# H Index can only be as high as N/2, given the constrains of how it is computed
# From this max possible value until 0, we will "try" for it
    # Filter the input for all numbers with H or higher.
    # If the lenght of this new array is exactly H, then we can return it.
    # Otherwise this H value does not satisfy our constrains, keep the loop going.
# If no value was returned, H index should be 0
