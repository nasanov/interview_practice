/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let res = 0;
  str = str.trim();
  const sign = str[0] === '-' ? -1 : 1;
  let i = '-+'.includes(str[0]) ? 1 : 0;
  for (i; '0' <= str[i] && str[i] <= '9'; i++) {
    const n = str[i] - '0';
    if (n >= 0)
      res = res * 10 + n;
    else
      break;
  }
  res = res * sign;
  res = res > 2147483647 ? 2147483647 : res;
  res = res < -2147483648 ? -2147483648 : res;
  return res;
};
