/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * Time: O(N + M)
 * Space: O(1)G
 */
var findMedianSortedArrays = function(nums1, nums2) {
  [nums1, nums2] = nums1.length > nums2.length
      ? [nums1, nums2]
      : [nums2, nums1];
  let i = 0, j = 0;
  let merged = [];
  while (i < nums1.length && j < nums2.length) {
      if (nums1[i] > nums2[j]) {
          merged.push(nums2[j++]);
      } else {
          merged.push(nums1[i++]);
      }
  }
  while (i < nums1.length) {
      merged.push(nums1[i++]);
  }
  while (j < nums2.length) {
      merged.push(nums2[j++]);
  }
  let middle = Math.floor(merged.length / 2);
  let median = merged[middle];
  if (merged.length % 2 === 0) {
      median = (median + merged[middle - 1]) / 2;
  }
  return median;
};
