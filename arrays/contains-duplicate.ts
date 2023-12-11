function containsDuplicate(nums: number[]): boolean {
  const map: {[key: number]: boolean} = {};

  for (const num of nums) {
    if (map[num]) {
      return true;
    }
    map[num] = true;
  }
  return false;
}
