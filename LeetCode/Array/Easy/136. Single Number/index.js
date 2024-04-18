const bruteForce = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        console.log(nums.slice(i + 1, nums.length))
        nums.slice(i, nums.length)
        // if (nums) {

        // }        
    }
    return "bruteForce";
};

const FindSingleNumber = (nums) => {
    return bruteForce(nums);
};

var nums = [1, 2, 1, 2, 4]
console.log(
    "Orignal Array: ",
    nums.map((x) => x)
);
console.log("Final: ", FindSingleNumber(nums));
