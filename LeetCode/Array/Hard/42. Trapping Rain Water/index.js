const bruteForce = (heights) => {
  const maxLeftArr = [],
    maxRightArr = [],
    trappedWaterArr = [];

  let maxLeft = 0,
    maxRight = 0,
    trappedWater = 0;

  for (let i = 0; i < heights.length; i++) {
    maxLeftArr[i] = maxLeft;
    if (heights[i] > maxLeft) {
      maxLeft = heights[i];
    }
  }

  for (let i = heights.length - 1; i >= 0; i--) {
    maxRightArr[i] = maxRight;
    if (heights[i] > maxRight) {
      maxRight = heights[i];
    }
  }

  for (let i = 0; i < heights.length; i++) {
    if (maxLeftArr[i]) {
    }
  }

  return maxLeftArr;
};

const TrappingRainWater = (nums) => {
  return bruteForce(nums);
};

var nums = [4, 2, 0, 5, 2, 6, 2, 3];
console.log(
  "Orignal Array: ",
  nums.map((x) => x)
);
console.log("Final: ", TrappingRainWater(nums));
