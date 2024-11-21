const MaximumConsecutiveOne = (arr) => {
  let max = 0, // Stores the maximum length of consecutive 1s
    currentMax = 0; // Tracks the current streak of consecutive 1s

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      // Increment current streak if the current element is 1
      currentMax++;
    } else {
      // Update max with the larger value between currentMax and max
      max = Math.max(max, currentMax);
      currentMax = 0; // Reset current streak
    }
  }

  // Final update to account for a streak ending at the end of the array
  max = Math.max(max, currentMax);

  return max;
};

// Example usage
const arr = [1, 1, 0, 1, 1, 1];
console.log("Maximum Consecutive 1s: ", MaximumConsecutiveOne(arr)); // Output: 3
