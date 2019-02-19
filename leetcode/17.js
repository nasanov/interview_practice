/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const digit = digits[0];
  const letters = getLettersForDigit(digit);
  
  const res = [];
  if (digit) {
      for (let l of letters) {
          let next = letterCombinations(digits.slice(1));
          if (!next.length) {
              res.push(l);
              continue;
          }
          for (let rest of next) {
              res.push(l + rest);
          }
      }
  }
  return res
};

function getLettersForDigit(digit) {
  const map = {
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z'],
  }
  return map[digit] ? map[digit] : [];
}
