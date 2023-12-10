function maxSubArray(nums: number[]): number {
  let maxSum = -10e4 - 1;
  let sum = 0;
  for (let i = 1; i <= nums.length; ++i) {
    sum += nums[i];
    maxSum = Math.max(sum, maxSum);
    if (sum < 0) sum = 0;
  }
  return maxSum;
}

console.log(maxSubArray([-2, -1]));
