/**
 * Find two numbers in the array that add up to the target using brute force.
 *
 * @param {Array} nums - The array of numbers
 * @param {number} target - The target sum
 * @return {Array} An array containing the indices of the two numbers that add up to the target
 */

// Time Complexity: O(n^2)
// Space Complexity: O(1)
const bruteForce = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};

// Time Complexity: O(n)
// Space Complexity: O(1)
const twoPointer = (nums, target) => {
  let start = 0,
    end = nums.length - 1,
    currentIndex = 1;
  while (start < end) {
    // 2 == 9-7
    if (nums[currentIndex] == target - nums[start]) {
      return [start, currentIndex];
    } else currentIndex++;

    if (currentIndex > end) {
      start++;
      currentIndex = start + 1;
    }
  }
  return [-1, -1];
};

const twoSum = (nums, target) => {
  // return bruteForce(nums, target);
  return twoPointer(nums, target);
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(
  "Orignal Array: ",
  nums.map((x) => x)
);
console.log("Final: ", twoSum(nums, target));
