# Medium

# Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

# The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

 

# Example 1:

# Input: nums = [1,2,3,4]
# Output: [24,12,8,6]
# Example 2:

# Input: nums = [-1,1,0,-3,3]
# Output: [0,0,9,0,0]
 

# Constraints:

# 2 <= nums.length <= 105
# -30 <= nums[i] <= 30
# The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

# Follow up:

# Could you solve it in O(n) time complexity and without using division?
# Could you solve it with O(1) constant space complexity? (The output array does not count as extra space for space complexity analysis.)


# @param {Integer[]} nums
# @return {Integer[]}
def product_except_self(nums)
    # But when we have ONE zero. Every element will be zero EXCEPT the very element that is ZERO.
    values = nums.filter { |value| value != 0 }
    if values.length == nums.length
        total_product = nums.inject(:*)
        # This works for when there are NO ZEROES
        return nums.map { |value| total_product / value }
    elsif (values.length == nums.length - 1)
        return nums.map { |value| value == 0 ? values.inject(:*) : 0 }
    end
    
    # If there are TWO OR MORE ZEROS.
    Array.new(nums.length).fill(0)
end

# Runtime: 128 ms, faster than 54.49% of Ruby online submissions for Product of Array Except Self.
# Memory Usage: 217.3 MB, less than 39.52% of Ruby online submissions for Product of Array Except Self.