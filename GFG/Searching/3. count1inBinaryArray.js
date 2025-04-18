// Given a binary sorted non-increasing array of 1s and 0s. You need to print the count of 1s in the binary array.

const count1inBinaryArray = (arr) => {
  let left = 0,
    right = arr.length - 1,
    result = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let current = arr[mid];
    if (current == 0) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

const arr = [1, 1, 1];

console.log("FReturns: ", count1inBinaryArray(arr));
