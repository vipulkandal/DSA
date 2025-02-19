// Time complexity: O(log n)

const squareRoot_BinarySearch = (num) => {
  // Handle edge cases: if num is 0 or 1, return num itself
  if (num === 0 || num === 1) {
    return num;
  }

  // Initialize search boundaries
  let left = 1, // Start from 1 (since 0 is already handled)
    right = num, // The max possible square root could be num itself
    res = 1; // Variable to store the floor value of square root

  // Apply binary search
  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // Find the middle element
    //   console.log("left", left);
    //   console.log("mid", mid);
    //   console.log("right", right);

    // If mid*mid equals num, we found the exact square root
    if (mid * mid === num) {
      return mid;
    }
    // If mid squared is greater than num, reduce the search range
    else if (mid * mid > num) {
      right = mid - 1;
    }
    // If mid squared is less than num, move to the right half
    else {
      res = mid; // Store the current mid as the possible floor value
      left = mid + 1; // Narrow the search to the right side
    }
  }

  // Return the floor value of the square root (integer part)
  return res;
};

const num = 25;
console.log("Returns: ", squareRoot_BinarySearch(num));
