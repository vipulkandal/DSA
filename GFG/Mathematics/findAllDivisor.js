// If we look carefully, all the divisors are present in pairs.
// For example if n = 100, then the various pairs of divisors are: (1,100), (2,50), (4,25), (5,20), (10,10)
// Using this fact we could speed up our program significantly.
// We, however, have to be careful if there are two equal divisors as in the case of (10, 10). In such case, we’d print only one of them.
//
// Time Complexity: O(sqrt(n))
// Auxiliary Space : O(1)
const allDivisorOfNum = (num) => {
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (num / i === i) {
        console.log(i);
      } else {
        console.log(i, num / i); //
      }
    }
  }
};

// Time Complexity: O(sqrt(n))
// Auxiliary Space : O(1)
const allDivisorOfNumPrintSorted = (num) => {
  let i = 1;
  for (i; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log(i);
    }
  }

  for (; i >= 1; i--) {
    if (num % i === 0 && num / i != i) {
      console.log(num / i);
    }
  }
};

const num = 36;

console.log("All Divisor are as follows: ");
// allDivisorOfNum(num);
allDivisorOfNumPrintSorted(num);
