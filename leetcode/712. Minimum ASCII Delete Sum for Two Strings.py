# 712. Minimum ASCII Delete Sum for Two Strings

# Given two strings s1, s2, find the lowest ASCII sum of deleted characters to make two strings equal.

# Example 1:
# Input: s1 = "sea", s2 = "eat"
# Output: 231
# Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
# Deleting "t" from "eat" adds 116 to the sum.
# At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.
# Example 2:
# Input: s1 = "delete", s2 = "leet"
# Output: 403
# Explanation: Deleting "dee" from "delete" to turn the string into "let",
# adds 100[d]+101[e]+101[e] to the sum.  Deleting "e" from "leet" adds 101[e] to the sum.
# At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
# If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.
# Note:

# 0 < s1.length, s2.length <= 1000.
# All elements of each string will have an ASCII value in [97, 122].

# Complexity:
#   Time: O(N * M)
#   Space: O(N * M)
# Where:
# N, M lengths of s1 and s2 accordingly

class Solution:
    def minimumDeleteSum(self, s1: str, s2: str) -> int:
      l1 = len(s1)
      l2 = len(s2)
      L = [[0 for _ in range(l2 + 1)] for _ in range(l1 + 1)]
      for i in range(1, l1 + 1):
        for j in range(1, l2 + 1):
          if s1[i - 1] == s2[j - 1]:
            L[i][j] = L[i - 1][j - 1] + ord(s1[i - 1])
          else:
            L[i][j] = max(L[i][j - 1], L[i - 1][j])
      sum1 = sum(ord(ch) for ch in s1)
      sum2 = sum(ord(ch) for ch in s2)
      return (sum1 + sum2 - L[l1][l2] * 2)