/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = [];
  nums.sort((a,b) => a - b);
  
  for (let i = 0; i < nums.length - 2; i++) {
    if(i == 0 || nums[i] > nums[i-1]){
      let start = i + 1;
      let end = nums.length - 1;

      while (start < end) {
        let sum = nums[i] + nums[start] + nums[end];
        if (sum == 0) {
          res.push([ nums[i], nums[start], nums[end] ]);
        }
        if (sum < 0) {
          let currentStart = nums[start];
          while (currentStart == nums[start] && start < end) start++;
        } else {
          let currentEnd = nums[end];
          while (currentEnd == nums[end] && start < end) end--;
        }
      }
    }
  }
  return res;
};
