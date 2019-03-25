# 583. Delete Operation for Two Strings

# Given two words word1 and word2, find the minimum number of steps required to make word1 and word2
# the same, where in each step you can delete one character in either string.

# Example 1:
# Input: "sea", "eat"
# Output: 2
# Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

# Complexity:
#   Time: O(N * M)
#   Space: O(N* M)
# Where:
#   N and M - lengths of the word1 and word2 accordingly

class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
      len1, len2 = len(word1), len(word2)
      L = [[0 for _ in range(len2 + 1)] for _ in range(len1 + 1)]
      for i in range(len1):
        for j in range(len2):
          #print(i, j)
          if word1[i] == word2[j]:
            L[i + 1][j + 1] = L[i][j] + 1
          else:
            L[i + 1][j + 1] = max(L[i][j + 1], L[i + 1][j])
      return len1 + len2 - 2 * L[len1][len2]
