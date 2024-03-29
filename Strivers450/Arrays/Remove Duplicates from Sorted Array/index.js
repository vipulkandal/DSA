/* ## Why this method is wrong
 * While this code works for LeetCode's judge, the problem description itself specifies that the solution should modify the original array in-place to remove duplicates and return the new length of the modified array.
 * This in-place modification approach is generally preferred for space efficiency, especially for larger datasets.
 *
 * Important: Remember, for LeetCode or any coding challenge, it's essential to not only solve the problem but also adhere to the specific requirements mentioned in the problem description.
 */
const bruteForceWrongMethod = (nums) => {
  let result = [];

  // Removing duplicate values and storing in result array
  for (let i = 0; i < nums.length; i++) {
    if (!result.includes(nums[i])) {
      result.push(nums[i]);
    }
  }
  return result.length;
};

const bruteForceCorrectMethod = (nums) => {
  let result = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[result] = nums[i];
      result++;
    }
  }
  return result;
};

const removeDuplicates = () => {
  const nums = [0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  //   return bruteForceWrongMethod(nums);
  return bruteForceCorrectMethod(nums);
};

console.log(removeDuplicates());
