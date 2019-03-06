/**
 * Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 * 
 * Range Sum Query 2D
 * The above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.
 * 
 * Example:
 * Given matrix = [
 *   [3, 0, 1, 4, 2],
 *   [5, 6, 3, 2, 1],
 *   [1, 2, 0, 1, 5],
 *   [4, 1, 0, 1, 7],
 *   [1, 0, 3, 0, 5]
 * ]
 * 
 * sumRegion(2, 1, 4, 3) -> 8
 * sumRegion(1, 1, 2, 2) -> 11
 * sumRegion(1, 2, 2, 4) -> 12
 * Note:
 * You may assume that the matrix does not change.
 * There are many calls to sumRegion function.
 * You may assume that row1 ≤ row2 and col1 ≤ col2.
 * 
 * Complexity:
 *  Time: O(N * M) first time value is requested and O(1) after
 *  Space: O(N * M)
 * Where:
 *  N: number of rows
 *  M: number of cols
 */

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.m = matrix;
  this.x = matrix.length;
  this.y = matrix[0] && matrix[0].length;
  this.cache = new Array(matrix.length).fill().map(() => []);
};

/** 
* @param {number} row1 
* @param {number} col1 
* @param {number} row2 
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.getSumCache(row1, col1) - this.getSumCache(row1, col2 + 1)
      - this.getSumCache(row2 + 1, col1) + this.getSumCache(row2 + 1, col2 + 1);
};

NumMatrix.prototype.getSumCache = function(r, c) {
  if (r < 0 || r >= this.x || c < 0 || c >= this.y)
      return 0;
  if (this.cache[r][c] === undefined) {
      this.cache[r][c] = this.getSumCache(r + 1, c) + this.getSumCache(r, c + 1)
              - this.getSumCache(r + 1, c + 1) + this.m[r][c];
  }
  return this.cache[r][c];
};

/** 
* Your NumMatrix object will be instantiated and called as such:
* var obj = Object.create(NumMatrix).createNew(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/