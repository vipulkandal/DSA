/**
 * Finds the maximum number of consecutive ones in an array.
 *
 * @param {array} nums - The input array to search for consecutive ones
 * @return {number} The maximum number of consecutive ones found
 */

// Time Complexity: O(n)
// Space Complexity: O(1)
const findMaxConsecutiveOnes = (nums) => {
  let maxConsecutiveOnes = 0;
  let currentConsecutiveOnes = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      currentConsecutiveOnes++;
      if (currentConsecutiveOnes > maxConsecutiveOnes) {
        maxConsecutiveOnes++;
      }
    } else currentConsecutiveOnes = 0;
  }

  return maxConsecutiveOnes;
};

const nums = [1, 0, 1, 1, 0, 1];
console.log(
  "Orignal Array: ",
  nums.map((x) => x)
);
console.log("Final: ", findMaxConsecutiveOnes(nums));
