
/**
 * Implements the two pointer approach to sort an array of numbers containing 0s and 1s.
 *
 * @param {array} nums - The array of numbers to be sorted.
 * @return {array} The sorted array.
 */

/*
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 
 * This code snippet implements the two-pointer approach to move all zeros in an array to the end 
 * while maintaining the order of non-zero elements.

*/
const twoPointerApproach = (nums) => {
    let start = 0, end = nums.length - 1;
    while (start < end) {
        if (nums[start] == 0) {
            start++;
        } else { // start == 1
            if (nums[end] == 0) {
                [nums[start], nums[end]] = [nums[end], nums[start]]
            } else { // end == 1
                end--;
            }
        }
    }
    return nums;
};

const main = (nums) => {
    return twoPointerApproach(nums);
};

const nums = [0, 1, 0, 1, 0, 1, 0];
console.log(
    "Orignal Array: ",
    nums.map((x) => x)
);
console.log("Final: ", main(nums));
