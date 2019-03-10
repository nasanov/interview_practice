/**
 * 967. Numbers With Same Consecutive Differences
 * 
 * Return all non-negative integers of length N such that the absolute difference between every two consecutive digits is K.
 * 
 * Note that every number in the answer must not have leading zeros except for the number 0 itself. For example, 01 has one leading zero and is invalid, but 0 is valid.
 * 
 * You may return the answer in any order.
 * 
 *  
 * 
 * Example 1:
 * 
 * Input: N = 3, K = 7
 * Output: [181,292,707,818,929]
 * Explanation: Note that 070 is not a valid number, because it has leading zeroes.
 * Example 2:
 * 
 * Input: N = 2, K = 1
 * Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
 *  
 * 
 * Note:
 * 
 * 1 <= N <= 9
 * 0 <= K <= 9
 * 
 * Complexity:
 *  Time: O(N)
 *  Space: O(N)
 */

/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, K) {
  const res = [];
  
  const rec = (s) => {
    if (s.length === N) {
      if (s.length === 1 || (s[0] !== '0' && s.length > 1))
        res.push(Number.parseInt(s));
      return;
    }
    const n = Number.parseInt(s[s.length - 1]);
    if (n + K <= 9) rec(s + (n + K));
    if (n - K >= 0 && n - K !== n + K) rec(s + (n - K));
  }
  for (let i = 0; i < 10; i++)
    rec(i.toString());
  return res;
}
