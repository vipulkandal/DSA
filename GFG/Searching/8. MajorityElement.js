/**
 Given an array arr. Find the majority element in the array. If no majority exists, return -1.
 Note: A majority element in an array is an element that appears strictly more than arr.size()/2 times in the array.
 */

const majorityElement = (arr) => {
  const majority = Math.floor(arr.length / 2);
  let map = new Map();

  // Find max count
  let maxCount = 0;
  let mostFrequent = null;

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  for (let [key, value] of map.entries()) {
    if (value > maxCount) {
      maxCount = value;
      mostFrequent = key;
    }
  }

  return maxCount > majority ? mostFrequent : -1;
};

console.log("FReturns: ", majorityElement([3, 3, 3, 1, 2])); // 3
console.log("FReturns: ", majorityElement([1, 2, 3, 4])); // -1
console.log("FReturns: ", majorityElement([5, 5, 5, 5, 5])); // 5
console.log("FReturns: ", majorityElement([42])); // 42
console.log("FReturns: ", majorityElement([2, 13])); // -1
console.log("FReturns: ", majorityElement([1, 2, 3, 3, 3, 3])); // 3
console.log("FReturns: ", majorityElement([1, 1, 1, 1, 2, 3, 4, 1, 1, 5])); // 1
