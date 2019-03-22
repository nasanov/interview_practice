# 200. Number of Islands
# Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
# An island is surrounded by water and is formed by connecting adjacent lands horizontally or
# vertically. You may assume all four edges of the grid are all surrounded by water.

# Example 1:

# Input:
# 11110
# 11010
# 11000
# 00000

# Output: 1
# Example 2:

# Input:
# 11000
# 11000
# 00100
# 00011

# Output: 3

# Complexity:
#   Time: O(N*M)
#   Space: O(N*M)
# Where:
#   NxM - grid dimensions

class Solution:
    def safe_get(self, grid: List[List[str]], row: int, col: int) -> str:
      height = len(grid)
      if row < 0 or row >= height: return '0'
      width = len(grid[0])
      if col < 0 or col >= width: return '0'
      return grid[row][col]
    
    def bfs(self, grid: List[List[str]], i: int, j: int):
      grid[i][j] = '0'
      self.safe_get(grid, i - 1, j) != '0' and self.bfs(grid, i - 1, j)
      self.safe_get(grid, i, j + 1) != '0' and self.bfs(grid, i, j + 1)
      self.safe_get(grid, i + 1, j) != '0' and self.bfs(grid, i + 1, j)
      self.safe_get(grid, i, j - 1) != '0' and self.bfs(grid, i, j - 1)
    
    def numIslands(self, grid: List[List[str]]) -> int:
      count = 0
      h = len(grid)
      w = len(grid[0]) if h > 0 else 0
      for i in range(0, h):
        for j in range(0, w):
          if grid[i][j] == '1':
            count += 1
            self.bfs(grid, i, j)
      return count