const bruteForce = (nums) => {
  const slices = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      slices.push(nums.slice(i, j + 1));
    }
  }

  return slices;
};

const allPossibleSubarray = (nums) => {
  return bruteForce(nums);
};

var nums = [1, 2, 3, 4, 5];
console.log(
  "Orignal Array: ",
  nums.map((x) => x)
);
console.log("Final: ", allPossibleSubarray(nums));
