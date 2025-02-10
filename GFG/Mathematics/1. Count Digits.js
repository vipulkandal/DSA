const countDigits = (num) => {
  if (num === 0) return 1; // Handle zero case
  num = Math.abs(num); // Handle negative numbers

  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
};

console.log("FReturns: ", countDigits(91920)); // 5
console.log("FReturns: ", countDigits(0)); // 1
console.log("FReturns: ", countDigits(-91920)); // 5
