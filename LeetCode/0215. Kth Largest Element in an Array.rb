# Medium

# Given an integer array nums and an integer k, return the kth largest element in the array.

# Note that it is the kth largest element in the sorted order, not the kth distinct element.

 

# Example 1:

# Input: nums = [3,2,1,5,6,4], k = 2
# Output: 5
# Example 2:

# Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
# Output: 4
 

# Constraints:

# 1 <= k <= nums.length <= 104
# -104 <= nums[i] <= 104

# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def find_kth_largest(nums, k)
    nums.sort[-k]
end

# Runtime: 56 ms, faster than 77.34% of Ruby online submissions for Kth Largest Element in an Array.
# Memory Usage: 210.5 MB, less than 44.53% of Ruby online submissions for Kth Largest Element in an Array.

# I know this is "technically" not how a problem is supposed to be solved, but when you understand how things work... well. You've go it.