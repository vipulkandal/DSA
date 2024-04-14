/**
 * Finds a subarray in the given array such that the sum of elements on the left side is equal to the sum of elements on the right side.
 *
 * @param {Array} nums - The input array of numbers
 * @return {Object|String} An object with two arrays if a subarray is found, otherwise a string indicating no subarray found
 */

/**
 * This function implements a brute force algorithm to find a subarray in the given array nums
 * where the sum of the elements on the left side is equal to the sum of the elements on the right side.
 * If such a subarray is found, it returns the two subarrays that make up the split, otherwise it returns "No Subarray found".
 *
 * The function iterates through the array nums and for each index i, it divides the array into two subarrays:
 * prefexArr: The elements from the start of the array up to index i
 * arr2: The elements from index i to the end of the array
 *
 * The function calculates the sum of the elements in arr1 and arr2 using reduce() function.
 * If the sum of the elements in arr1 is equal to the sum of the elements in arr2, the function returns the two subarrays.
 * Otherwise, it moves on to the next index i and repeats the process until it reaches the end of the array.
 * If the function does not find a subarray that meets the condition, it returns "No Subarray found".
 *
 * Time complexity: O(n^2)
 * The outer loop iterates through the entire array nums once, and the inner loop iterates through half of the
 * remaining array (from index i to the end of the array) once. Therefore, the total time complexity is O(n^2)
 *
 * Space complexity of this function is O(n) because it creates two new arrays arr1 and arr2 to store the subarrays,
 * and uses additional space for the variables middleIndex, sum1, and sum2, all of which increase with the size of the input array nums.
 */
const bruteForce = (nums) => {
  // Iterate through the array nums
  let middleIndex = 1;
  while (middleIndex < nums.length - 1) {
    // Divide the array into two subarrays
    const arr1 = nums.slice(0, middleIndex); // The elements from the start of the array up to index i
    const arr2 = nums.slice(middleIndex); // The elements from index i to the end of the array

    // Calculate the sum of the elements in arr1 and arr2
    const sum1 = arr1.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const sum2 = arr2.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    // If the sum of the elements in arr1 is equal to the sum of the elements in arr2, return the two subarrays
    if (sum1 == sum2) {
      return { arr1, arr2 };
    } else middleIndex++;
  }
  // If the function does not find a subarray that meets the condition, return "No Subarray found"
  return "No Subarray found";
};

/**
 * This function implements a more efficient algorithm to find a subarray in the given array nums
 * where the sum of the elements on the left side is equal to the sum of the elements on the right side.
 * If such a subarray is found, it returns the two subarrays that make up the split, otherwise it returns "No Subarray found".
 *
 * The function calculates the sum of all the elements in the array nums using reduce() function,
 * and stores the total sum in a variable called total.
 * It then calculates the prefix sum of nums using a for loop, and stores the result in a new array prefix.
 * The prefix sum of an array is the sum of all the elements in the array up to a certain index i.
 * Therefore, the prefix sum at index i is equal to the sum of all the elements in the array from index 0 to index i.
 *
 * The function then iterates through the prefix array and for each index i, it checks if the sum of the elements
 * from index 0 to index i is equal to the sum of the elements from index i to the end of the array.
 * If such a pair is found, the function returns the two subarrays that make up the split.
 * Otherwise, it continues iterating through the prefix array until it reaches the end of it.
 * If the function does not find a subarray that meets the condition, it returns "No Subarray found".
 *
 * Time complexity: O(n)
 * The outer loop iterates through the prefix array once, and the inner loop iterates through half of the
 * remaining array (from index i to the end of the array) once. Therefore, the total time complexity is O(n)
 *
 * Space complexity of this function is O(n) because it creates a new array prefix to store the prefix sums,
 * and uses additional space for the variables i, total, and the return object.
 */
const prefixMethod = (nums) => {
  // Calculate the sum of all the elements in the array nums
  const total = nums.reduce((a, b) => a + b, 0);

  // Calculate the prefix sum of nums
  const prefix = [0];
  for (let i = 0; i < nums.length; i++) {
    prefix.push(prefix[i] + nums[i]);
  }

  // Iterate through the prefix array and find a pair of subarrays that add up to total
  for (let i = 0; i < nums.length - 1; i++) {
    if (prefix[i] + prefix[nums.length - i - 1] === total) {
      return { left: nums.slice(0, i + 1), right: nums.slice(i + 1) };
    }
  }
  // If the function does not find a subarray that meets the condition, return "No Subarray found"
  return "No Subarray found";
};

const nums = [3, 4, -2, 5, 8, 20, -10, 8];
const subarrayWithEqualSum = (nums) => {
  // return bruteForce(nums);
  return prefixMethod(nums);
};

console.log("subarrayWithEqualSum", subarrayWithEqualSum(nums));
