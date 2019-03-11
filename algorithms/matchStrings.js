/**
 *  * Given a text and a wildcard pattern, implement wildcard pattern matching algorithm that finds
 * if wildcard pattern is matched with text. The matching should cover the entire text (not partial text).
 * 
 * The wildcard pattern can include the characters ‘?’ and ‘*’
 * ‘?’ – matches any single character
 * ‘*’ – Matches any sequence of characters (including the empty sequence)
 * 
 * For example,
 * 
 * Text = "baaabab",
 * Pattern = “*****ba*****ab", output : true
 * Pattern = "baaa?ab", output : true
 * Pattern = "ba*a?", output : true
 * Pattern = "a*ab", output : false
 * 
 * Complexity:
 * strmatch:
 *  Time: O(N * M)
 *  Space: O(N * M)
 * Where:
 *  N: length of the string
 *  M: length of the pattern
 * 
 * strmatchImproved:
 *  Time: O(N * M)
 *  Space: O(M)
 * Where:
 *  N: length of the string
 *  M: length of the patter
 */

const strmatch = (s, pattern) => {
  const n = s.length;
  const m = pattern.length; 
  const lookup = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0));

  lookup[0][0] = 1;

  if (pattern[0] === '*')
    lookup[0][1] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (pattern[j - 1] == '*') {
        lookup[i][j] = lookup[i][j - 1] || lookup[i - 1][j];
      } else if (s[i - 1] === pattern[j - 1] || pattern[j - 1] === '?') {
        lookup[i][j] = lookup[i -1][j - 1];
      }
    }
  }
  return lookup[n][m];
}

const strmatchImproved = (s, pattern) => {
  const n = s.length;
  const m = pattern.length; 

  let prev = new Array(m + 1).fill(false);

  prev[0] = true;

  if (pattern[0] === '*')
    prev[1] = true;

  for (let i = 1; i <= n; i++) {
    const curr = new Array(m + 1).fill(false);
    for (let j = 1; j <= m; j++) {
      if (pattern[j - 1] == '*') {
        curr[j] = prev[j] || curr[j - 1];
      }
      else if (s[i - 1] === pattern[j - 1] || pattern[j - 1] === '?') {
        curr[j] = prev[j - 1];
      }
    }
    prev = curr;
  }
  return prev[m];
}

let str = "abab"; 
let pattern = "*ab"; 

console.log(str);
console.log(pattern);
console.log(strmatch(str, pattern));
console.log(strmatchImproved(str, pattern));