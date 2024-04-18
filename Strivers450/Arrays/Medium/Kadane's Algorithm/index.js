/**
 * Implements Kadane's Algorithm to find the maximum sum of a subarray within the given array.
 *
 * @param {Array} nums - The input array of numbers
 * @return {number} The maximum sum of a subarray within the input array
 */

/**
 * Implements Kadane's Algorithm to find the maximum sum of a subarray within the given array.
 *
 * The algorithm works by keeping track of two values, one that represents the maximum sum of all elements seen so far
 * (initially set to -Infinity), and another that represents the maximum sum of elements seen so far, including the current element (initially set to 0).
 *
 * If the maximum sum of elements seen so far including the current element is greater than the maximum sum of all elements seen so far,
 * we update the maximum sum of all elements seen so far to the maximum sum of elements seen so far including the current element.
 *
 * If the maximum sum of elements seen so far including the current element is less than or equal to 0, we know that the maximum sum of elements
 * seen so far including the current element will never be greater than 0, so we reset the prefix sum to 0 to avoid unnecessary computations.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */
const KadaneAlgorithm = (nums) => {
  // prefix represents the maximum sum of elements seen so far, including the current element
  let prefix = 0;
  let maxSumFromSubarray = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    prefix = prefix + nums[i];
    if (prefix > maxSumFromSubarray) {
      maxSumFromSubarray = prefix;
    }

    // if the maximum sum of elements seen so far including the current element is less than or equal to 0,
    // we know that the maximum sum of elements seen so far including the current element will never be greater
    // than 0, so we reset the prefix sum to 0 to avoid unnecessary computations
    if (prefix < 0) {
      prefix = 0;
    }
  }

  return maxSumFromSubarray;
};

const KadaneAlgorithmLessVerbose = (nums) => {
  let prefix = 0;
  let maxSumFromSubarray = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    prefix = Math.max(0, prefix + nums[i]);
    maxSumFromSubarray = Math.max(maxSumFromSubarray, prefix);
  }

  return maxSumFromSubarray;
};

var nums = [-1, -2, -3, -4];
// expected output: 9
console.log(
  "Orignal Array: ",
  nums.map((x) => x)
);
console.log("Final: ", KadaneAlgorithm(nums));
