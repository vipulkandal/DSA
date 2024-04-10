/**   *** General ***
 * Function to move all zeros to the end of an array while maintaining the order of non-zero elements.
 *
 * @param {array} nums - the input array to be processed
 * @return {array} the array with zeros moved to the end
 */

// Time Complexity: O(n)
// Space Complexity: O(1)
var optimised = (nums) => {
  let insertPosition = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[insertPosition] = nums[i];
      insertPosition++;
    }
  }

  while (insertPosition < nums.length) {
    nums[insertPosition++] = 0;
  }
  return nums;
};

// Time Complexity: O(n)
// Space Complexity: O(n) because the result array grows linearly with the input array nums
var bruteForce = (nums) => {
  let result = [];
  result = nums.filter((item) => item !== 0);
  for (let i = result.length; i < nums.length; i++) {
    result.push(0);
  }
  for (let i = 0; i < result.length; i++) {
    nums[i] = result[i];
  }
  return nums;
};

var moveZeroes = (nums) => {
  console.log(
    "Orignal Array: ",
    nums.map((item) => item)
  );
  // return bruteForce(nums)
  return optimised(nums);
};

const nums = [2, 0, 0, 0, 1, 0, 3, 12];
console.log("Zeros at end: ", moveZeroes(nums));
