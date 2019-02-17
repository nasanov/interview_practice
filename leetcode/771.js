/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let res = 0;
  let hash = {};
  
  for (let ch of J) {
    hash[ch] = 1;
  }
  for (let ch of S) {
    if (hash.hasOwnProperty(ch))
      res++;
  }
  return (res);
};
