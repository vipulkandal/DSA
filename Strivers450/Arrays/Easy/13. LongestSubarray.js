const longestSubarray = (arr, sum) => {
  let left = 0,
    right = 0,
    maxLength = 0,
    currentSum = 0;

  while (right < arr.length) {
    // Add the current element to currentSum
    currentSum += arr[right];

    // Shrink the window from the left if the currentSum exceeds the target sum
    while (currentSum > sum && left <= right) {
      currentSum -= arr[left];
      left++;
    }

    // Check if the current window matches the target sum
    if (currentSum === sum) {
      maxLength = Math.max(maxLength, right - left + 1);
    }

    // Expand the window by moving the right pointer
    right++;
  }

  return maxLength;
};

const arr = [11, 3, 5, 1, 9],
  sum = 10;

console.log("FReturns: ", longestSubarray(arr, sum));

/**
 * Initialization:
- left = 0: Start of the window.
- right = 0: End of the window (iterator).
- maxLength = 0: Length of the longest subarray found so far.
- currentSum = 0: Sum of the current window.

Iteration 1: right = 0 (Value = 11)
- Add arr[right] to currentSum:
  currentSum = 0 + 11 = 11.
- Check if currentSum > sum:
  Yes, 11 > 10. Shrink the window by moving left.
- Subtract arr[left] (11) from currentSum:
  currentSum = 11 - 11 = 0.
- Increment left: left = 1.
- Result: No subarray found with sum 10. Continue.

Iteration 2: right = 1 (Value = 3)
- Add arr[right] to currentSum:
  currentSum = 0 + 3 = 3.
- Check if currentSum == sum:
  No, 3 < 10. Expand the window by incrementing right.

Iteration 3: right = 2 (Value = 5)
- Add arr[right] to currentSum:
  currentSum = 3 + 5 = 8.
- Check if currentSum == sum:
  No, 8 < 10. Expand the window by incrementing right.

Iteration 4: right = 3 (Value = 1)
- Add arr[right] to currentSum:
  currentSum = 8 + 1 = 9.
- Check if currentSum == sum:
  No, 9 < 10. Expand the window by incrementing right.

Iteration 5: right = 4 (Value = 9)
- Add arr[right] to currentSum:
  currentSum = 9 + 9 = 18.
- Check if currentSum > sum:
  Yes, 18 > 10. Shrink the window by moving left:
  - Subtract arr[left] (3) from currentSum:
    currentSum = 18 - 3 = 15.
  - Increment left: left = 2.
- Still 15 > 10:
  - Subtract arr[left] (5) from currentSum:
    currentSum = 15 - 5 = 10.
  - Increment left: left = 3.
- Check if currentSum == sum:
  Yes, 10 == 10. Update maxLength:
  maxLength = max(0, 4 - 3 + 1) = 2.

Final Result:
- The longest subarray with sum 10 is [1, 9], and its length is 2.

Debugging Output (Iteration by Iteration):
- Iteration 1: left = 1, right = 0, currentSum = 0.
- Iteration 2: left = 1, right = 1, currentSum = 3.
- Iteration 3: left = 1, right = 2, currentSum = 8.
- Iteration 4: left = 1, right = 3, currentSum = 9.
- Iteration 5: left = 3, right = 4, currentSum = 10, maxLength = 2.

 */
