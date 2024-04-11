/**
 * Find two numbers in the array that add up to the target using brute force.
 *
 * @param {Array} nums - The array of numbers
 * @param {number} target - The target sum
 * @return {Array} An array containing the indices of the two numbers that add up to the target
 */

// Time Complexity: O(n)
// Space Complexity: O(1)
// Only for sorted array
const twoPointerEfficient = (nums, target) => {
  let startIdx = 0,
    endIdx = nums.length - 1;
  while (startIdx < endIdx) {
    if (nums[startIdx] + nums[endIdx] == target) {
      return [startIdx + 1, endIdx + 1];
    } else if (nums[startIdx] + nums[endIdx] > target) {
      endIdx--;
    } else {
      startIdx++;
    }
  }
  return [-1, -1];
};

const twoSum = (nums, target) => {
  return twoPointerEfficient(nums, target);
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(
  "Orignal Array: ",
  nums.map((x) => x)
);
console.log("Final: ", twoSum(nums, target));
