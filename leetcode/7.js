/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x > 2147483647 || x < -2147483648) return 0;
  let tmp = Math.abs(x);
  let res = 0;
  while (tmp > 0) {
    res = res * 10 + tmp % 10;
    tmp = Math.floor(tmp / 10);
  }
  return x > 0 ? res : -res;
};
