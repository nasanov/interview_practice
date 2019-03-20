# 856. Score of Parentheses
# Given a balanced parentheses string S, compute the score of the string based on the following rule:

# () has score 1
# AB has score A + B, where A and B are balanced parentheses strings.
# (A) has score 2 * A, where A is a balanced parentheses string.
 
# Example 1:

# Input: "()"
# Output: 1
# Example 2:

# Input: "(())"
# Output: 2
# Example 3:

# Input: "()()"
# Output: 2
# Example 4:

# Input: "(()(()))"
# Output: 6
 
# Note:
# S is a balanced parentheses string, containing only ( and ).
# 2 <= S.length <= 50

# Complexity:
#   Time: O(N)
#   Space: O(N/2)
# Where:
#   N is the length of the stack

def scoreOfParentheses(self, s: str) -> int:
    stack = []
    for c in s:
      if c == '(':
        stack.append(c)
      elif c == ')':
        _sum = 0
        while stack[-1] != '(':
          _sum += stack.pop()
        stack.pop()
        if _sum == 0:
          stack.append(1)
        else:
          stack.append(_sum * 2)
    return sum(stack)
