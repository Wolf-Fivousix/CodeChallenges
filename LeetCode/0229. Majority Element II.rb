# Medium

# Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

# Follow-up: Could you solve the problem in linear time and in O(1) space?

 

# Example 1:

# Input: nums = [3,2,3]
# Output: [3]
# Example 2:

# Input: nums = [1]
# Output: [1]
# Example 3:

# Input: nums = [1,2]
# Output: [1,2]
 

# Constraints:

# 1 <= nums.length <= 5 * 104
# -109 <= nums[i] <= 109

# @param {Integer[]} nums
# @return {Integer[]}
def majority_element(nums)
    frequency = nums.length / 3
    counter = Hash.new() # or counter = {}
    
    nums.each do |value|
        counter[value] = counter[value] ? counter[value] + 1 : 1 
    end
    
    result = []
    counter.each do |key, value|
         result.push(key) if (value > frequency)
    end
    
    result
end

# Runtime: 60 ms, faster than 60.00% of Ruby online submissions for Majority Element II.
# Memory Usage: 210.6 MB, less than 70.00% of Ruby online submissions for Majority Element II.