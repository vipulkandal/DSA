function slidingWindow(arr) {
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    // swapping
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
}

function recursion(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return arr;
  }
  // Swapping using temp variable
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
  return recursion(arr, start + 1, end - 1);
}

function reverseArray(arr) {
  // slidingWindow(arr);
  return recursion(arr);
}
const arr = [1, 2, 3, 4, 5, 6];
console.log("Orginal array: ", arr);
console.log("Reversed array: ", reverseArray(arr));
