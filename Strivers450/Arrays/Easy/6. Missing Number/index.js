/*
    * Time Complexity: O(n^2)
        * this bruteForce function is O(n^2) because for each element in the nums array, 
        * it checks if the array includes that element, which is an O(n) operation.

    * Space Complexity: O(1)
        * because the function uses a constant amount of extra space regardless of the input size.
*/
const bruteForce = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(i)) {
      //
      return i;
    }
  }
  return nums.length;
};

/*
 This function uses a formula to calculate the missing number in an array.
 The formula is: (n * (n+1)) / 2
 where n is the number of elements in the array.

 The expected sum is calculated by using the formula above.
 The actual sum is calculated by adding up all the elements in the array.

 The difference between expected and actual sum is the missing number.


  * Time Complexity: O(n)

    * Space Complexity: O(1)


 */
const formulaBased = (nums) => {
  let totalLength = nums.length;
  let expectedSum = (totalLength * (totalLength + 1)) / 2; // Sum
  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum = actualSum + nums[i];
  }

  return expectedSum - actualSum;
};

/*
    ********************
    *** XOR Approach ***
    ********************

    Two important properties of XOR are the following:

    1. XOR of two same numbers is always 0 i.e. a ^ a = 0. ←Property 1.
    2. XOR of a number with 0 will result in the number itself i.e. 0 ^ a = a.  ←Property 2

    Now, let’s XOR all the numbers between 1 to N.
    xor1 = 1^2^.......^N

    Let’s XOR all the numbers in the given array.
    xor2 = 1^2^......^N (contains all the numbers except the missing one).

    Now, if we again perform XOR between xor1 and xor2, we will get:
    xor1 ^ xor2 = (1^1)^(2^2)^........^(missing Number)^.....^(N^N)

    Here all the numbers except the missing number will form a pair and each pair will result in 0 according to the XOR property. The result will be = 0 ^ (missing number) = missing number (according to property 2).

    So, if we perform the XOR of the numbers 1 to N with the XOR of the array elements, we will be left with the missing number.


    *   Time Complexity: O(N)
    *   Space Complexity: O(1)

*/
const XORMethod = (nums) => {
  if (nums.length == 0) return 0;

  let missing = nums.length; // Initialize with length for the missing element at the end
  for (let i = 0; i < nums.length; i++) {
    missing = missing ^ i ^ nums[i];
  }
  return missing;
};

const missingNumber = (nums) => {
  return bruteForce(nums);
};

const nums = [];
console.log(XORMethod(nums));
