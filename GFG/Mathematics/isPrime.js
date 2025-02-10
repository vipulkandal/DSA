const isPrimeBruteForce = (num) => {
  if (num < 2) return false; // Handle numbers less than 2

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const isPrimeEfficient = (num) => {
  if (num < 2) return false; // Handle numbers less than 2
  if (num === 2 || num === 3) return true; // 2 and 3 are prime
  if (num % 2 === 0 || num % 3 === 0) return false; // Eliminate multiples of 2 and 3

  for (let i = 5; i * i <= num; i += 6) {
    // Check factors of the form 6k ± 1
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

const num = 1009;

console.log("Returns: ", isPrimeEfficient(num));
// console.log("Returns: ", isPrimeBruteForce(num)); // Should return true for 23
