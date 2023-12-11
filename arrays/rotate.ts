function rotate(nums: number[], k: number): void {
    const res = [
      ...nums.slice(-k % nums.length),
      ...nums.slice(0, nums.length - (k % nums.length)),
    ];
    for (let i = 0; i < nums.length; i++) {
      nums[i] = res[i];
    }
  }