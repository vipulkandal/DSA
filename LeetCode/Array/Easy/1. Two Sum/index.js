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

// Time Complexity: O(N*LogN)
// Space Complexity: O(1)
const binarySearch = (nums, target) => {
  nums = nums.map((val, index) => [val, index]); // Create pairs of values and their original indices
  nums.sort((a, b) => a[0] - b[0]); // Sort the array based on the values

  for (let i = 0; i < nums.length; i++) {
    let startIdx = i + 1,
      endIdx = nums.length - 1;

    while (startIdx <= endIdx) {
      const midIdx = Math.floor((startIdx + endIdx) / 2);
      const sum = nums[i][0] + nums[midIdx][0]; // Calculate the sum of current element and mid element

      if (sum === target) {
        return [nums[i][1], nums[midIdx][1]]; // Return the original indices
      } else if (sum < target) {
        startIdx = midIdx + 1;
      } else {
        endIdx = midIdx - 1;
      }
    }
  }
  return [-1, -1];
};

// Time Complexity: O(n)
// Space Complexity: O(1)
const twoPointerBruteForce = (nums, target) => {
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

// Time Complexity: O(n)
// Space Complexity: O(1)
// Only for sorted array
const twoPointerEfficient = (nums, target) => {
  let startIdx = 0,
    endIdx = nums.length - 1;
  while (startIdx < endIdx) {
    if (nums[startIdx] + nums[endIdx] == target) {
      return [startIdx, endIdx];
    } else if (nums[startIdx] + nums[endIdx] > target) {
      endIdx--;
    } else {
      startIdx++;
    }
  }
  return [-1, -1];
};

const twoSum = (nums, target) => {
  // return bruteForce(nums, target);
  // return twoPointerBruteForce(nums, target);
  // return binarySearch(nums, target);
  return twoPointerEfficient(nums, target);
};

const nums = [0, 1, 3, 4, 5, 7];
const target = 6;
console.log(
  "Orignal Array: ",
  nums.map((x) => x)
);
console.log("Final: ", twoSum(nums, target));


//---------------------------------
// var twoSum = function (nums, target) {
//   let numMaps = {};
//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];
//     if (complement in numMaps) return [numMaps[complement], i];
//     else numMaps[nums[i]] = i;
//   }

//   return [];
// };

// console.log(twoSum([3,3], 6));


//-----------------------------------------------------
// var twoSum = function (nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], i);
//   }
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement) && map.get(complement) !== i) {
//       return [i, map.get(complement)];
//     }
//   }
//   // If no valid pair is found, return an empty array
//   return [];
// };
// console.log(twoSum([3,3], 6));