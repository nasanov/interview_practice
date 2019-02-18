/**
 * @param {string} num
 * @return {boolean}
 * Time: O(N^2)
 * Space: O(N)
 * Where N is the length of the string
 */
var isAdditiveNumber = function(num) {
  for (let i = 1; i < num.length; i++) {
      let first = num.slice(0, i);
      if (first[0] === '0' && first.length > 1)
          break ;
      for (let j = i + 1; j < num.length; j++) {
          let second = num.slice(i, j);
          if (second[0] === '0' && second.length > 1)
              break ;
          if (isAdditive(num.slice(j), first, second))
              return true;
      }
  }
  return false;
};

function isAdditive(nums, first, second) {
  if (nums.length === 0) return true;
  let next = +first + +second + '';
  let idx = nums.indexOf(next);
  if (idx === 0) {
      return isAdditive(nums.slice(next.length), second, next);
  } else {
      return false;
  }
}