const twoSum = (arr, target) => {
  let numMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (numMap.has(target - arr[i])) {
      return [numMap.get(target - arr[i]), i];
    } else {
      numMap.set(arr[i], i);
    }
  }

  return [-1, -1];
};

const arr = [2, 6, 5, 8, 11],
  target = 14;

console.log("FReturns: ", twoSum(arr, target));
