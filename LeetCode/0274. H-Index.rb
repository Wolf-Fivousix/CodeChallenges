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
def h_index(citations)
    citations.length.downto(1) do |h_index|
        greater = citations.filter{ |citation| citation > h_index }.length
        equal = citations.filter{ |citation| citation == h_index }.length
        lesser = citations.filter{ |citation| citation < h_index }.length
        
        # Greater citations do not fit in our "lesser or equal" pile, so it's game over for this H-index
        next if greater > h_index
        # At this point, we either have a LACK or a 0 match of Greater papers. Let's balance out using our Equals.
        equal -= h_index - greater
        # If we don't have enough equals to fulfil our "Greater" pile, it's game over.
        next if equal < 0
        # Now we only have the last condition left, N - H Papers having no more then H citations.
        return h_index unless (lesser + equal) != (citations.length - h_index)
    end
    
    0
end

# Polynomial Time Complexity O(N^2) we're filtering the input N times.
# Linear Space Complexity O(N) we create 3 arrays that sum to the size of the original N.

# Runtime: 2036 ms, faster than 10.00% of Ruby online submissions for H-Index.
# Memory Usage: 264.4 MB, less than 10.00% of Ruby online submissions for H-Index.

def h_index(citations)
    max_h_index = citations.length
    
    max_h_index.downto(1) do |h_index|
        greater = 0
        equal = 0
        lesser = 0
        for citation in citations
           case 
               when citation > h_index
                    greater += 1
               when citation == h_index
                    equal +=1
               else
                    lesser += 1
           end
        end
        
        # Greater citations do not fit in our "lesser or equal" pile, so it's game over for this H-index
        next if greater > h_index
        # At this point, we either have a LACK or a 0 match of Greater papers. Let's balance out using our Equals.
        equal -= h_index - greater
        # If we don't have enough equals to fulfil our "Greater" pile, it's game over.
        next if equal < 0
        # Now we only have the last condition left, N - H Papers having no more then H citations.
        return h_index unless (lesser + equal) != (citations.length - h_index)
    end
    
    0
end

# This solution moves from Linear Memory to Constant Memory.

# Runtime: 1208 ms, faster than 10.00% of Ruby online submissions for H-Index.
# Memory Usage: 209.8 MB, less than 90.00% of Ruby online submissions for H-Index.

# This community solution (JS) shows how to do it in Linear and Log Linear time complexity.
# https://leetcode.com/problems/h-index/discuss/693946/JavaScript-two-approaches.-1-with-O(n)-time-%2B-O(n)-space-and-another-with-O(n-log-n)-time