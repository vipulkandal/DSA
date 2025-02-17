// Ques==> finding all prime numbers up to a given integer

/**
 * Generates all prime numbers up to a given number using the Sieve of Eratosthenes algorithm.
 * @param {number} limit - The upper limit up to which prime numbers are found.
 * @returns {number[]} An array containing all prime numbers up to the given limit.
 * 
 * Time Complexity: O(n*log(log(n)))
   Auxiliary Space: O(n)
 */
function findPrimesUpTo(limit) {
  // Step 1: Create an array to track prime status of numbers (true means prime)
  let isPrime = Array(limit + 1).fill(true);

  // Step 2: Mark non-prime numbers
  // iterate to sqrt i.e we don't have to interate whole arr
  for (let num = 2; num * num <= limit; num++) {
    if (isPrime[num]) {
      // Mark all multiples of num as non-prime (false)
      for (let multiple = num * num; multiple <= limit; multiple += num) {
        isPrime[multiple] = false;
      }
    }
  }

  // Step 3: Collect all prime numbers
  let primeNumbers = [];
  for (let num = 2; num <= limit; num++) {
    if (isPrime[num]) {
      primeNumbers.push(num);
    }
  }

  return primeNumbers;
}

// Driver code to test the function
const upperLimit = 30;
console.log(`Prime numbers up to ${upperLimit}:`);
console.log(findPrimesUpTo(upperLimit));
