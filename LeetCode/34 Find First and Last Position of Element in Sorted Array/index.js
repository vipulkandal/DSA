/*
 * Time Complexity: O(n) Hence not so efficient
 */

const bruteForce = (nums, target) => {
  let startIdx = -1;
  let endIdx = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      startIdx = i;
      break;
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === target) {
      endIdx = i;
      break;
    }
  }
  return [startIdx, endIdx];
};

/**
 * Binary Search on Sorted Array
 * Time Complexity: O(log n)
 * @param {number[]} nums Sorted Array of numbers
 * @param {number} target Number to be searched
 * @return {number[]} [startIdx, endIdx]
 */
const binarySearch = (nums, target) => {
  let startIdx = -1;
  let endIdx = -1;

  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor((low + high) / 2);
  let count = 0; // Avoid infinite loop

  // Find the first occurrence using binary search
  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2); // Average : (low + high) / 2
    if (nums[mid] === target) {
      startIdx = mid;
      high = mid - 1; // Move left to find the starting position
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    count++;
    if (count == 5) break;
  }

  // Find the last occurrence using binary search starting from the first found index
  low = 0;
  high = nums.length - 1;
  mid = Math.floor((low + high) / 2);

  while (low <= high) {
    mid = Math.floor((low + high) / 2); // Average : (low + high) / 2
    if (nums[mid] === target) {
      endIdx = mid;
      low = mid + 1; // Move right to find the ending position
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    count++;
    if (count == 5) break;
  }

  return [startIdx, endIdx];
};

const searchRange = function (nums, target) {
  // return bruteForce(nums, target);
  return binarySearch(nums, target); // Optimised Solution
};

const nums = [5, 7, 7, 8, 8, 10]; // Expected Ans: [3,4]
const target = 8;
console.log(searchRange(nums, target));
