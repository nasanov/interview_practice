# 977. Squares of a Sorted Array

# Given an array of integers A sorted in non-decreasing order, return an array of the squares of
# each number, also in sorted non-decreasing order.

# Example 1:

# Input: [-4,-1,0,3,10]
# Output: [0,1,9,16,100]
# Example 2:

# Input: [-7,-3,2,3,11]
# Output: [4,9,9,49,121]

# Complexity:
#   Time: O(N)
#   Space: O(N)
# Where:
#   N is the length or the input array

class Solution:
    def sortedSquares(self, A: List[int]) -> List[int]:
      neg, res = [], []
      for n in A:
        square = n * n
        if n < 0:
          neg.append(square)
        else:
          while len(neg) > 0 and square > neg[-1]:
            res.append(neg.pop())
          res.append(square)
      while len(neg) > 0:
        res.append(neg.pop())
      return res
