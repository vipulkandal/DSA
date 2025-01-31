/**
 *  Time Complexity: O(n)
 *  Space Complexity: O(1)
 */

const moveZerosToEnd = (arr) => {
  let lastZeroIndex = -1;

  // Find first zero element
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      lastZeroIndex = i;
      break;
    }
  }

  if (lastZeroIndex == -1) return arr; // no element with zero

  // Note: If last element is 0 then (i = lastZeroIndex + 1) condition will not be valid and will not enter in for loop,
  //       in the end arr will return with last element 0.
  for (let i = lastZeroIndex + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[lastZeroIndex]] = [arr[lastZeroIndex], arr[i]]; // swap
      lastZeroIndex++;
    }
  }

  return arr;
};
let arr = [1, 0, 2, 3, 0, 4, 0, 1];
console.log("Result: ", moveZerosToEnd(arr));
