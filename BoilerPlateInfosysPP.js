process.stdin.setEncoding("utf8"); // Set input encoding
let input = []; // Array to collect input

process.stdin.on("data", (data) => {
  input.push(...data.trim().split("\n")); // Collect input by lines
});

process.stdin.on("end", () => {
  // Parse Input
  const target = parseInt(input[0]); // First line is the target
  const n = parseInt(input[1]); // Second line is the array length
  const nums = input.slice(2, 2 + n).map(Number); // Array elements

  // Call your solution function
  const result = twoSum(nums, target);
  console.log(result);
});

// Example Solution Function
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return []; // Shouldn't happen as per constraints
}

/**
 * Input is as follows
 *  9
    5
    2
    7
    11
    15
    16

    FIRST line is target sum
    second line is arr.length
    third line there is array[0]
    fourth line there is array[1]
    .
    .
    and so on
 */
