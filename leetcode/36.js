/**
 * 36. Valid Sudoku
 * 
 * Determine if a 9x9 Sudoku board is valid. Only the filled cells need to
 * be validated according to the following rules:
 * 
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9
 * without repetition.
 * 
 * A partially filled sudoku which is valid.
 * 
 * The Sudoku board could be partially filled, where empty cells are
 * filled with the character '.'.
 * 
 * Example 1:
 * 
 * Input:
 * [
 * ["5","3",".",".","7",".",".",".","."],
 * ["6",".",".","1","9","5",".",".","."],
 * [".","9","8",".",".",".",".","6","."],
 * ["8",".",".",".","6",".",".",".","3"],
 * ["4",".",".","8",".","3",".",".","1"],
 * ["7",".",".",".","2",".",".",".","6"],
 * [".","6",".",".",".",".","2","8","."],
 * [".",".",".","4","1","9",".",".","5"],
 * [".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: true
 * Example 2:
 * Input:
 * [
 *   ["8","3",".",".","7",".",".",".","."],
 *   ["6",".",".","1","9","5",".",".","."],
 *   [".","9","8",".",".",".",".","6","."],
 *   ["8",".",".",".","6",".",".",".","3"],
 *   ["4",".",".","8",".","3",".",".","1"],
 *   ["7",".",".",".","2",".",".",".","6"],
 *   [".","6",".",".",".",".","2","8","."],
 *  [".",".",".","4","1","9",".",".","5"],
 *   [".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: false
 * Explanation: Same as Example 1, except with the 5 in the top left
 * corner being modified to 8. Since there are two 8's in the top
 * left 3x3 sub-box, it is invalid.
 * 
 * Note:
 * 
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 * The given board contain only digits 1-9 and the character '.'.
 * The given board size is always 9x9.
 * 
 * Complexity:
 * Time: O(N)
 * Space: O(N)
 * Where N is the size of the board.
 */

function Block(minRow, maxRow, minCol, maxCol) {
  this.minr = minRow;
  this.maxr = maxRow;
  this.minc = minCol;
  this.maxc = maxCol;
  
  this.map = new Map();
  return this;
}

Block.prototype.isCellBelong = function (row, col) {
  return this.minr <= row && row <= this.maxr
      && this.minc <= col && col <= this.maxc;
}

Block.prototype.addCell = function (val) {
  if (!this.map.has(val)) {
      this.map.set(val, 1);
      return true;
  }
  return false;
}

/**
* @param {character[][]} board
* @return {boolean}
*/
var isValidSudoku = function(board) {
  const rows = [];
  const cols = [];
  const squares = [
      new Block(0, 2, 0, 2),
      new Block(0, 2, 3, 5),
      new Block(0, 2, 6, 8),
      new Block(3, 5, 0, 2),
      new Block(3, 5, 3, 5),
      new Block(3, 5, 6, 8),
      new Block(6, 8, 0, 2),
      new Block(6, 8, 3, 5),
      new Block(6, 8, 6, 8),
  ];
  
  for (let i = 0; i < 9; i++) {
      rows.push(new Block(i, i, 0, 8));
      cols.push(new Block(0, 8, i, i));
  }
  
  const blocks = [...rows, ...cols, ...squares];
  
  for (let i = 0; i < 9; i++) {
      console.log(board[i]);
      for (let j = 0; j < 9; j++) {
          const cell = parseInt(board[i][j]);
          if (!Number.isNaN(cell)) {
              for (const block of blocks) {
                  if (block.isCellBelong(i, j)) {
                      if (!block.addCell(cell)) return false;
                  }
              }
          }
      }
  }
  return true;
};
