const searchInSorted = (arr, target) => {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let current = arr[mid];
    if (current === target) {
      return true;
    } else if (current > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

console.log(searchInSorted([1, 2, 3, 4, 6], 4)); // true
console.log(searchInSorted([1, 2, 3, 4, 6], 5)); // false
console.log(searchInSorted([], 1)); // false
console.log(searchInSorted([1], 1)); // true
