
var bruteForce = (nums) => {
    let result = []
    result = nums.filter((item) => item !== 0)
    for (let i = result.length; i < nums.length; i++) {
        result.push(0)
    }
    for (let i = 0; i < result.length; i++) {
        nums[i] = result[i]
    }
    return nums;
}

var moveZeroes = (nums) => {
    console.log("Orignal Array: ", nums.map(item => item))
    return bruteForce(nums)
}

const nums = [0, 1, 0, 3, 12]
console.log("Zeros at end: ", moveZeroes(nums))