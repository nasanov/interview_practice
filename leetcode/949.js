/**
 * 949. Largest Time for Given Digits
 * Task:
 * Given an array of 4 digits, return the largest 24 hour time that can be made.
 * 
 * The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a 
 * time is larger if more time has elapsed since midnight.
 * 
 *  Return the answer as a string of length 5.  If no valid time can be made, return an empty string.
 * 
 * Example 1:
 * 
 * Input: [1,2,3,4]
 * Output: "23:41"
 * 
 * Complexity:
 * Time: O(N)
 * Space: O(1)
 * Where N = 4!
 */
/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
  let time = -1;
  
  function permute(arr, s, e) {
      let res = [];
      if (s === e) {
          const tmp = getTimeFromA(arr);
          tmp > time ? time = tmp : void 0;
      } else {
          for (let i = s; i <= e; i++) {
              swap(arr, s, i);
              res = res.concat(permute([...arr], s + 1, e));
              swap(arr, s, i);
          }
      }
      return res;
  }
  permute(A, 0, A.length - 1);
  
  return time >= 0
      ? `${format(Math.floor(time / 60))}:${format(time % 60)}`
      : '';
};

function getTimeFromA(a) {
  let [h1, h2, m1, m2] = a;
  const hours = h1 * 10 + h2;
  const minutes = m1 * 10 + m2;
  if (0 <= hours && hours <= 23
      && 0 <= minutes && minutes <= 59) {
      return hours * 60 + minutes;
  }
  return -1;
}

function format (val) {
return ('0' + val).slice(-2);
}

function swap(a, i, j) {
  const tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
}
