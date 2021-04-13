# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Integer}
def sum_numbers(root)
    sum = 0
    stack = [[root, 0]]
    
    while (!stack.empty?)
        node, parrentSum = stack.pop
        currentSum = parrentSum * 10 + node.val
        
        sum += currentSum if (node.left.nil? && node.right.nil?)
        
        stack.push([node.left, currentSum]) unless (node.left.nil?)
        stack.push([node.right, currentSum]) unless (node.right.nil?)
    end
    
    sum
end

# Runtime: 56 ms, faster than 53.85% of Ruby online submissions for Sum Root to Leaf Numbers.
# Memory Usage: 209.8 MB, less than 100.00% of Ruby online submissions for Sum Root to Leaf Numbers.