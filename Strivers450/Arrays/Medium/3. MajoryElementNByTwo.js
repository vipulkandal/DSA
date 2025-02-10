// Problem Statement: Given an array of N integers,
// write a program to return an element that occurs more than N/2 times in the given array.
// You may consider that such an element always exists in the array.

const majorityElementNby2 = (arr) => {
  let occurence = new Map();
  let maxCount = 0;
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    occurence.set(
      arr[i],
      occurence.has(arr[i]) ? occurence.get(arr[i]) + 1 : 1
    );
  }

  for (const [key, value] of occurence) {
    if (value > maxCount) {
      maxCount = value;
      result = key;
    }
  }

  // Validate if the result is indeed the majority element
  if (maxCount > Math.floor(arr.length / 2)) {
    return result;
  } else {
    return -1; // Indicates no majority element exists
  }

  return result;
};

const arr = [1, 2, 2, 5, 5, 5, 5, 5, 5];

console.log("FReturns: ", majorityElementNby2(arr));
