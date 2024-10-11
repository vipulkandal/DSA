// Bubble Sort
const arr = [2, 7, 9, 1, 45, 0, 67];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      // Swap elements if they are out of order
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}

console.log(arr)