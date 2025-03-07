function maxIndexDiff(arr) {
  console.log("Orginal arr", arr);
  let n = arr.length;
  if (n < 2) return 0;

  // Step 1: Create minLeft array
  let minLeft = new Array(n);
  minLeft[0] = arr[0];
  for (let i = 1; i < n; i++) {
    minLeft[i] = Math.min(minLeft[i - 1], arr[i]);
  }

  console.log("minLeft", minLeft);

  // Step 2: Create maxRight array
  let maxRight = new Array(n);
  maxRight[n - 1] = arr[n - 1];
  for (let j = n - 2; j >= 0; j--) {
    maxRight[j] = Math.max(maxRight[j + 1], arr[j]);
  }

  console.log("maxRight", maxRight);

  // Step 3: Two-pointer traversal to find max (j - i)
  let i = 0,
    j = 0,
    maxDiff = 0;
  while (i < n && j < n) {
    if (minLeft[i] < maxRight[j]) {
      maxDiff = Math.max(maxDiff, j - i);
      console.log(`in if case ${minLeft[i]} - ${maxRight[j]}`);
      j++; // Expand the window
    } else {
      console.log(`In else case ${minLeft[i]} - ${maxRight[j]}`);
      i++; // Move i forward to find a smaller minLeft
    }
  }

  return maxDiff;
}

// Example cases:
// console.log(maxIndexDiff([1, 10])); // Output: 1
console.log(maxIndexDiff([34, 8, 10, 3, 2, 80, 30, 33, 1])); // Output: 6

// Orginal arr [
//   34,  8, 10, 3, 2,
//   80, 30, 33, 1
// ]
// minLeft [
//   34, 8, 8, 3, 2,
//    2, 2, 2, 1
// ]
// maxRight [
//   80, 80, 80, 80, 80,
//   80, 33, 33,  1
// ]
// 6
