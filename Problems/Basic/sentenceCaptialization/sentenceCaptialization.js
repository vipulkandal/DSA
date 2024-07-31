let str = "multiple     spaces";

const sentenceCaptialization = (str) => {
  if (str == "") return "";

  return str
    .split(/(\s+)/) // Split by spaces, capturing the spaces
    .map((item) =>
      item.trim().length > 0 ? item[0].toUpperCase() + item.slice(1) : item
    ) // Capitalize words, leave spaces intact
    .join("");
};

console.log(sentenceCaptialization(str)); // "Multiple     Spaces"

// ANSI escape codes for colors
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
};

// Test cases
const testCases = [
  {
    input: "hello world",
    expected: "Hello World",
  },
  {
    input: "this is a test",
    expected: "This Is A Test",
  },
  {
    input: "capitalize each word",
    expected: "Capitalize Each Word",
  },
  {
    input: "a",
    expected: "A",
  },
  {
    input: "test",
    expected: "Test",
  },
  {
    // This case need special attention
    // otherwise black space will create error.
    // Thats why we have used  .split(/(\s+)/) // Split by spaces, capturing the spaces
    input: "multiple     spaces",
    expected: "Multiple     Spaces",
  },
  {
    input: "123 test",
    expected: "123 Test",
  },
  {
    input: "",
    expected: "",
  },
];

testCases.forEach(({ input, expected }, index) => {
  const result = sentenceCaptialization(input);
  const passed = result === expected;
  const color = passed ? "" : colors.red;
  console.log(
    `${color}Test Case ${index + 1}: ${passed ? "Passed" : "Failed"}`
  );
  console.log(`  Input: "${input}"`);
  console.log(`  Expected: "${expected}"`);
  console.log(`  Result: "${result}"`);
});
