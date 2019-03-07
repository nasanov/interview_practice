/**
 * Given an array of integers and given value k determine the number of distinct
 * pairs of elements which sum equal to k
 */

 /**
  * Returns number of distinct pairs from arr which sum is equal to k
  * @param {Number} k desired sum
  * @param {Number[]} arr array of numbers
  */
function pairs(k, arr) {
  let count = 0;
  const hashmap = {};

  for (const n of arr) {
    hashmap[n] = hashmap[n] ? hashmap[n] + 1 : 1;
  }
  for (const key in hashmap) {
    const comp = k - key;
    if (hashmap[comp] && comp != key) {
      count++;
    }
  }
  count += k % 2 === 0 && hashmap[k / 2] > 2 && 2;
  return Math.floor(count / 2);
}

console.log(pairs(10, [1, 5, 7, -1, 5, 5, 5]));