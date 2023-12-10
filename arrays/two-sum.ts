function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    const idxOfDiff = map.get(diff);

    if (idxOfDiff !== undefined) {
      return [idxOfDiff, i];
    }
    map.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([3, 2, 3], 6));
