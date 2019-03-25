# 72. Edit Distance

# Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

# You have the following 3 operations permitted on a word:

# Insert a character
# Delete a character
# Replace a character
# Example 1:

# Input: word1 = "horse", word2 = "ros"
# Output: 3
# Explanation: 
# horse -> rorse (replace 'h' with 'r')
# rorse -> rose (remove 'r')
# rose -> ros (remove 'e')
# Example 2:

# Input: word1 = "intention", word2 = "execution"
# Output: 5
# Explanation: 
# intention -> inention (remove 't')
# inention -> enention (replace 'i' with 'e')
# enention -> exention (replace 'n' with 'x')
# exention -> exection (replace 'n' with 'c')
# exection -> execution (insert 'u')

# Complexity:
#   Time: O(N * M)
#   Space: O(N* M)
# Where:
#   N and M - lengths of the word1 and word2 accordingly

class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
      len1, len2 = len(word1), len(word2)
      L = [[i or j if i == 0 or j == 0 else 0 for j in range(len2 + 1)] for i in range(len1 + 1)]
      for i in range(len1):
        for j in range(len2):
          if word1[i] == word2[j]:
            L[i + 1][j + 1] = L[i][j]
          else:
            L[i + 1][j + 1] = min(L[i][j], L[i + 1][j], L[i][j + 1]) + 1
      return L[-1][-1]
