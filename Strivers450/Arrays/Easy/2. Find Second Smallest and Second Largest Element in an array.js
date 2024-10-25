const secondSmallest = (arr) => {
  let small = Infinity,
    sSmall = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      sSmall = small;
      small = arr[i];
    }

    if (arr[i] < sSmall && arr[i] != small) {
      sSmall = arr[i];
    }
  }
  return sSmall;
};

const secondLargest = (arr) => {
  let large = -Infinity,
    slarge = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      slarge = large;
      large = arr[i];
    }

    if (arr[i] > slarge && arr[i] != large) {
      slarge = arr[i];
    }
  }
  return slarge;
};

let arr = [7, 8, 4, 6, 3];

console.log("secondLargest: ", secondLargest(arr));
console.log("secondSmallest: ", secondSmallest(arr));
