const firstIndexInSorted = (arr, target) => {
  // Initialize two pointers: `left` at the start of the array and `right` at the end
  let left = 0,
    right = arr.length - 1;

  // Perform binary search while the search range is valid (left <= right)
  while (left <= right) {
    // Calculate the middle index of the current search range
    let mid = Math.floor((right + left) / 2);

    // If the middle element matches the target
    if (target == arr[mid]) {
      // Check if this is the first occurrence of the target:
      // 1. If mid is the first index (mid === 0), or
      // 2. The previous element is not equal to the target (arr[mid - 1] !== arr[mid])
      if (mid === 0 || arr[mid - 1] !== arr[mid]) {
        // If either condition is true, this is the first occurrence, so return mid
        return mid;
      } else {
        // If this is not the first occurrence, search in the left half
        // by updating the `right` pointer to mid - 1
        right = mid - 1;
      }
    }
    // If the target is greater than the middle element, search in the right half
    else if (target > arr[mid]) {
      left = mid + 1;
    }
    // If the target is less than the middle element, search in the left half
    else if (target < arr[mid]) {
      right = mid - 1;
    }
  }

  // If the target is not found in the array, return -1
  return -1;
};

// Example usage
const arr = [10, 20, 20, 20, 20, 40, 50, 60];
console.log("Returns: ", firstIndexInSorted(arr, 20)); // Output: 1
