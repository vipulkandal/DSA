/**
 * @description Given an array of integers, find the one that appears only once.
 * @param {number[]} nums - The input array of integers.
 * @return {number} - The integer that appears only once.
 */

/**
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */
const BitwiseOperator = (nums) => {
  /**
   * XOR (^) is a bitwise operator that takes two integers as operands and returns their bitwise exclusive OR.
   *
   * The bitwise exclusive OR (XOR) of two integers is a new integer that has each bit set to 1 if the corresponding bits of its input integers
   * are different, and 0 if the corresponding bits of its input integers are the same.
   *
   * When we apply the XOR operator to all the elements in the input array, the result will be the integer that appears only once in the array,
   * because XOR is commutative, associative, and has the property that  a ^ b ^ b = a. This means that if we XOR an element with itself,
   * the result will be 0, which effectively removes that element from the XOR operation.
   */
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
};

/**
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */
const hashing = (nums) => {
  // Hash map to keep track of the counts of each integer
  const hash = {};

  // Loop through the input array and increment the count of each integer
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hash[num] === undefined) {
      hash[num] = 1; // First time we encounter the integer, set count to 1
    } else {
      delete hash[num]; // We have encountered the integer before, so it's a duplicate, remove it from the hash
    }
  }

  // Find the key with a count of 1 (the single element)
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hash[num] === 1) {
      return num;
    }
  }
};

const MaximumDifferenceBetweenTwoElements = (nums) => {
  // return BitwiseOperator(nums);
  return hashing(nums);
};

var nums = [1, 2, 2, 1, 3];
console.log(
  "Orignal Array: ",
  nums.map((x) => x)
);
console.log("Final: ", MaximumDifferenceBetweenTwoElements(nums));
