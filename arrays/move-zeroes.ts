function moveZeroes(nums: number[]): void {
  let currInx = 0;
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    nums[i] = 0;
    if (val !== 0) {
      nums[currInx] = val;
      currInx++;
    }
  }
}

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
