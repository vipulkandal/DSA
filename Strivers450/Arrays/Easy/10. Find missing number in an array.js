const findMissingNumber = (numbers, n) => {
  // Calculate the expected sum of the first N natural numbers
  let expectedSum = (n * (n + 1)) / 2;

  // Calculate the actual sum of the elements in the array
  let actualSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    actualSum += numbers[i]; // Add each element to actualSum
  }

  // The missing number is the difference between the expected and actual sums
  return expectedSum - actualSum;
};

// Example usage
const numbers = [1, 2, 4, 5];
const n = 5;
console.log("Missing number:", findMissingNumber(numbers, n)); // Missing number: 3
