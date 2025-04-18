const isSortedAndRotated = (arr) => {
  const n = arr.length;

  let inc = 0;
  let dec = 0;

  for (let i = 0; i < n; i++) {
    const next = (i + 1) % n;

    if (arr[i] > arr[next]) inc++;
    if (arr[i] < arr[next]) dec++;
  }

  return inc === 1 || dec === 1;
};

const arr = [3, 4, 1, 2];
console.log("FReturns: ", isSortedAndRotated(arr));
