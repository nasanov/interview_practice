/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * Time: O(log(min(N, M)))
 * Space: O(1)
 * Where N and M lengths of the first and second arrays accordingly
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length)
      return findMedianSortedArrays(nums2, nums1);
  
  const x = nums1.length;
  const y = nums2.length;
  const totalLen = x + y;
  const half = Math.floor((x + y + 1) / 2);
  let low = 0;
  let high = x;
  
  while (low <= high) {
      let px = Math.floor((high + low) / 2);
      let py = half - px;
      if (px < x && nums2[py - 1] > nums1[px])
          low = px + 1;
      else if (px > 0 && nums1[px - 1] > nums2[py])
          high = px - 1;
      else {
          let maxLeft, minRight;
          if (px === 0) maxLeft = nums2[py - 1]
          else if (py === 0) maxLeft = nums1[px - 1]
          else maxLeft = Math.max(nums1[px - 1], nums2[py - 1]);

          if (px === x) minRight = nums2[py]
          else if (py === y) minRight = nums1[px]
          else minRight = Math.min(nums1[px], nums2[py]);
          if (totalLen % 2 === 1)
              return maxLeft;
          else
              return (maxLeft + minRight) / 2
      }
  }
  return -1;
};
