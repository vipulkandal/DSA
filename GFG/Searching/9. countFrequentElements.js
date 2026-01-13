// More than n/k Occurrences
//
// Given an array arr and an element k. The task is to find the count of elements in the array that appear more than n/k times and
// n is length of arr.

const countFrequentElements = (nums, divisor) => {
  const threshold = Math.floor(nums.length / divisor);
  let frequentElementCount = 0;
  const frequencyMap = new Map();

  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  for (let freq of frequencyMap.values()) {
    if (freq > threshold) {
      frequentElementCount++;
    }
  }

  return frequentElementCount;
};

console.log("FReturns: ", countFrequentElements([3, 1, 2, 2, 1, 2, 3, 3], 4)); // 2
console.log("FReturns: ", countFrequentElements([1, 2, 3, 4, 5], 2)); // 0
console.log("FReturns: ", countFrequentElements([1, 1, 1, 2, 2, 3, 3, 3], 4)); // 2
console.log("FReturns: ", countFrequentElements([5, 5, 5, 5, 5], 3)); // 1
console.log("FReturns: ", countFrequentElements([], 1)); // 0
console.log("FReturns: ", countFrequentElements([1], 1)); // 0 (n = 1, n/k = 1, > 1 is false)
console.log("FReturns: ", countFrequentElements([1, 1, 2, 2, 3, 3], 2)); // 0
console.log(
  "FReturns: ",
  countFrequentElements([10, 10, 20, 30, 10, 20, 10], 3)
); // 1
console.log("FReturns: ", countFrequentElements([1, 2, 2, 2, 3, 3, 3, 3], 3)); // 1
