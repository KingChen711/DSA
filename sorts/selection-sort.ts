function selectionSort(arr: number[]): number[] {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the unsorted part of the array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element
    const temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

// Example usage:
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(unsortedArray.slice());
console.log("Original Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
