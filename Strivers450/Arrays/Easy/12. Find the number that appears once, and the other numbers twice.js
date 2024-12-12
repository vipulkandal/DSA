/**
 * Time and Space Complexity: O(n)
 */

const numberAppearsOnce = (arr) => {
  // Create a map to store the occurrence count of each number
  let numbersOccurance = new Map();

  // Populate the map with the count of each number
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    numbersOccurance.set(item, (numbersOccurance.get(item) || 0) + 1);
  }

  // Iterate over the map to find the number with occurrence 1
  for (const [num, occurance] of numbersOccurance) {
    // Chat gpt suggested to use ==> for (const [num, occurance] of numbersOccurance.entries()
    if (occurance === 1) {
      return num; // Return the number that appears only once
    }
  }

  return -1; // Return -1 if no such number is found
};

// Test case
const arr = [4, 1, 2, 1, 2];
console.log("Returns:", numberAppearsOnce(arr)); // Expected output: 4
