/**
 * @param {number} n
 * @return {boolean}
 * Time: O(1)
 * Space: O(1)
 */
const hasAlternatingBits = (n) => {
  const x = (n | (n >> 1));
  return (n & (n >> 1)) === 0 && ((x + 1) & x) === 0;
}
