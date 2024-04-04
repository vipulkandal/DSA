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

// need to return same array i.e. nums
var bruteForce2 = function (nums, k) {
    let temp = [];
    for (let i = 0; i < nums.length; i++) {
        if (i <= k) {
            temp.push(nums[i])
        } else {
            nums[i - k - 1] = nums[i]
        }
    }
    console.log("temp", temp)
    for (let i = 0; i < temp.length; i++) {
        nums[k - i + 1] = temp[i]
    }

    return nums;
};



const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

// console.log(bruteForce1(nums, k));
console.log(bruteForce2(nums, k));