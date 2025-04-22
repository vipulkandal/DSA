const squareRootUsingBinarySearch = (num) => {
  if (num === 1 || num === 0) return num;

  let left = 1,
    right = num,
    ans = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let currentSquare = mid * mid;

    if (currentSquare === num) {
      return mid;
    } else if (currentSquare > num) {
      right = mid - 1;
    } else if (currentSquare < num) {
      ans = mid; // store candidate for floor
      left = mid + 1;
    }
  }

  return ans;
};

console.log(squareRootUsingBinarySearch(25)); // 5
console.log(squareRootUsingBinarySearch(10)); // 3
console.log(squareRootUsingBinarySearch(1)); // 1
console.log(squareRootUsingBinarySearch(0)); // 0
