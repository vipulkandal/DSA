const bruteForce = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }

  return true;
};

const isSorted = (arr) => {
  return bruteForce(arr);
};

const nums = [1, 2, 2, 1, 3, 4, 5];
console.log(isSorted(nums));
