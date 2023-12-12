function quickSort(nums: number[]): number[] {
  if (nums.length < 2) return nums;

  const less: number[] = [];
  const greater: number[] = [];
  const pivot = nums[0];

  for (const num of nums) {
    if (num < pivot) {
      less.push(num);
    } else if (num > pivot) {
      greater.push(num);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort([5, 12, 3, 8, 21, 7, 14, 9, 17, 2]));
