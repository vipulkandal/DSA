/*  *** Explaination ***
 *
 * This code checks if an array is sorted and possibly rotated.
 * It counts the number of times the array is not in ascending order.
 * If the count is at most 1, it returns true, indicating the array is either sorted or sorted and rotated.
 */

const isArraySortedAndRotated = (nums) => {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      // check if the array is not in ascending order
      count++; // increment the count
    }
  }
  if (nums[nums.length - 1] > nums[0]) count++; // check if the array is not in ascending order
  return count <= 1; // if count is at most 1, the array is either sorted or sorted and rotated
};

const nums = [3, 4, 5, 1, 2];

console.log(isArraySortedAndRotated(nums));
