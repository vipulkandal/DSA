// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// New array is created and returned
var bruteForce1 = function (nums, k) {
  let rotatedArr = [];
  for (let i = k + 1; i < nums.length; i++) {
    rotatedArr.push(nums[i]);
  }
  for (let i = 0; i <= k; i++) {
    rotatedArr.push(nums[i]);
  }
  return rotatedArr;
};

/*
 * Time Complexity: O(n) since one loop
 * Space Complexity: O(n)
 */
var bruteForce2 = function (nums, k) {
  let temp = [];
  for (let i = 0; i < nums.length; i++) {
    // Mod gives result between 0 to (denominator -1) i.e nums.length
    temp[(i + k) % nums.length] = nums[i];
  }

  // copy data from temp to nums
  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }

  // using spread operator
  // nums = [...temp];

  // using slice
  // nums = temp.slice();
  return nums;
};

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

console.log(
  "Orignal Array:",
  nums.map((x) => x)
);

// console.log("Rotated Array: ", bruteForce1(nums, k));
console.log("Rotated Array: ", bruteForce2(nums, k));
