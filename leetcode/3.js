/**
 * @param {string} s
 * @return {number}
 * Time: O(N)
 * Space: O(1)
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let res = [];

  for (let ch of s) { // O N
    const idx = res.indexOf(ch); // O 1 + 2 + 3 ... + N => (n * (n + 1)) / 2 256
    if (idx > -1) {
      if (max < res.length) max = res.length;
      res = res.slice(idx + 1);
    }
    res.push(ch);
  }
  return max > res.length ? max : res.length;
};