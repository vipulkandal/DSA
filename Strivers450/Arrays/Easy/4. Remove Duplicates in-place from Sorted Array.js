// Function to remove duplicates from a sorted array in-place, returning only the unique elements.
// This solution assumes that the input array is sorted.

// Steps & Explanation:
// 1. Initialize `uniqueIndex` to 0, which will track the last position of a unique element in the array.
//    - This pointer ensures that unique elements are grouped at the beginning of the array.
// 2. Start a loop from `currentIndex = 1` to the end of the array to check each element against the last unique element.
// 3. If the current element is not equal to `arr[uniqueIndex]`, it means we've found a new unique element.
//    - Place this new unique element at `arr[uniqueIndex + 1]` and increment `uniqueIndex`.
//    - This updates the position to include this latest unique element.
// 4. After completing the loop, all unique elements are at the start of the array up to `uniqueIndex`.
// 5. Return `arr.slice(0, uniqueIndex + 1)` to output an array containing only the unique elements.

// Complexity Analysis:
// - Time Complexity: O(n), where `n` is the length of the array, since we iterate through the array once.
// - Space Complexity: O(1), because we modify the array in-place and use only a constant amount of extra space for `uniqueIndex`.

const removeDuplicates = (arr) => {
  let uniqueIndex = 0;

  for (let currentIndex = 1; currentIndex < arr.length; currentIndex++) {
    if (arr[uniqueIndex] !== arr[currentIndex]) {
      arr[uniqueIndex + 1] = arr[currentIndex];
      uniqueIndex++;
    }
  }
  return arr.slice(0, uniqueIndex + 1);
};

let arr = [1, 2, 2, 3, 3, 4, 4, 5, 6];
console.log(removeDuplicates(arr));
