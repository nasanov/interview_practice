/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  console.log(n)
  const m1 = 0x55555555;
  const m2 = 0x33333333;
  const m3 = 0xf0f0f0f;
  const m4 = 0xff00ff;
  const m5 = 0xffff;
  n = (n & m1) + (n >> 1 & m1);
  n = (n & m2) + (n >> 2 & m2);
  n = (n & m3) + (n >> 4 & m3);
  n = (n & m4) + (n >> 8 & m4);
  n = (n & m5) + (n >> 16 & m5);
  return n;
};
