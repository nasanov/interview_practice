/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  //return 4;
  const q = [];
  const dist = new Array(nums.length).fill(0);
  
  q.push(0);
  while (q.length > 0) {
      const pos = q.shift();
      if (pos >= nums.lenght) continue ;
      const current = nums[pos];
      
      for (let i = current; i > 0; i--) {
          const newPos = pos + i;
          if (newPos >= nums.length) continue;
          if (dist[newPos] === 0) {
              dist[newPos] = dist[pos] + 1;
              if (newPos === nums.length - 1) break;
              q.push(pos + i);
          }
      }
  }
  return dist[nums.length - 1];
};
