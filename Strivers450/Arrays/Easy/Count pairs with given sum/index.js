function getPairsCount(arr, n, k) {
  let numberOfPairs = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] == k) {
        numberOfPairs++;
      }
    }
  }

  return numberOfPairs;
}

let arr = [1, 5, 7, 1];
let k = 6;
let n = arr.length;
console.log("Number of pairs are: ", getPairsCount(arr, n, k));
