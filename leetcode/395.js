/**
 * 395. Longest Substring with At Least K Repeating Characters.
 * 
 * Find the length of A the longest substring T of a given string (consists of lowercase letters only)
 * such that every character in T appears no less than k times.
 *
 * Example 1:
 * 
 * Input:
 * s = "aaabb", k = 3
 * 
 * Output:
 * 3
 * 
 * The longest substring is "aaa", as 'a' is repeated 3 times.
 * Example 2:
 * 
 * Input:
 * s = "ababbc", k = 2
 * 
 * Output:
 * 5
 * 
 * The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
 * 
 * Complexity:
 * Time: O(N * K^2)
 * Space: O(K)
 * Where: N is length of the string and K is the length of the alphabet
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  if (s.length < k) return 0;

  const dict = {};
  for (const ch of s) // N
    !dict[ch] ? dict[ch] = 1 : dict[ch]++;
  for (const ch in dict) { // K
    if (dict[ch] < k) {
      return s.split(ch) // K
        .map(substr => longestSubstring(substr, k))
        .reduce((a, v) => a > v ? a : v);
    }
  }
  return s.length;
}
