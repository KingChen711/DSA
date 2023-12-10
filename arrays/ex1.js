//brute force
function solve(arr1, arr2) {
  for (const ele1 of arr1) {
    for (const ele2 of arr2) {
      if (ele1 === ele2) {
        return true;
      }
    }
  }
  return false;
}

//best solution
function solve1(arr1, arr2) {
  const uniqueElements = new Set([...arr1, ...arr2]);
  return uniqueElements.size !== arr1.length + arr2.length;
}

const arr1 = ["a", "b", "y", "c"];
const arr2 = ["x", "y", "z"];

console.log(solve(arr1, arr2));
