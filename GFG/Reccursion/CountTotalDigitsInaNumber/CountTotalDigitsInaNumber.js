const countDigits = (n, count = 0) => {
  if (n <= 0) return count;
  n = Math.floor(n / 10);
  count++;

  return countDigits(n, count);
};

const num = 9999;

console.log("FReturns: ", countDigits(num));
