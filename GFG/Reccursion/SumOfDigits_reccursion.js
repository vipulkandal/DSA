const sumOfDigitsUsing_reccursion = (num, sum = 0) => {
  if (num <= 0) return sum; // Base case: stop recursion when num is 0 or negative
  let lastDigit = num % 10; // Extract the last digit
  sum = sum + lastDigit; // Add the last digit to the sum
  num = Math.floor(num / 10); // Remove the last digit from num

  return sumOfDigitsUsing_reccursion(num, sum); // Recursive call
};

const sumOfDigitsUsingRecursion_Method2 = (num) => {
  // Base case: if num is a single-digit number, return num
  if (num < 10) return num;

  // Extract the last digit
  const lastDigit = num % 10;

  // Remove the last digit from num
  const remainingNum = Math.floor(num / 10);

  // Return the sum of the last digit and the result of the recursive call
  return lastDigit + sumOfDigitsUsingRecursion_Method2(remainingNum);
};

const num = 253;

console.log("FReturns: ", sumOfDigitsUsing_reccursion(num));
