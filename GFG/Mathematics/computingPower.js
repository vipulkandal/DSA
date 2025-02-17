/**
 * 
 * Problem Statement
      Write a function that calculates num^power (num raised to the power of power) 
      using Exponentiation by Squaring. The function should be efficient, 
      handling large values of power in O(log power) time complexity.

    Function Signature:
      const computingPower = (num, power) => { ... };
 */

// Time Complexity: O(power)
// Space Complexity: O(1) (Constant)
const computingPowerBruteForce = (num, power) => {
  let result = 1,
    count = 1;
  if (power === 0) {
    return 1;
  }
  while (count <= power) {
    result = result * num;
    count++;
  }

  return result;
};

/**
 * Algorithm Steps
    1.	Base Case:
      o	If power == 0, return 1 (since any number raised to power 0 is 1).
    2.	Recursive Case:
      o	If power is even: Compute num^(power/2), then square it:
            computingPower(num, power) = computingPower(num, power / 2) * computingPower(num, power / 2)
      o	If power is odd: Reduce power by 1 to make it even, then multiply by num:
            computingPower(num, power) = num * computingPower(num, power - 1)

    Time Complexity of Optimized Approach: O(log power)
    Space Complexity: O(1) (if iterative) or O(log power) (if recursive due to function calls).

 */
const computingPower = (num, power) => {
  if (power === 0) return 1; // Base case

  if (power % 2 === 0) {
    let half = computingPower(num, power / 2);
    return half * half; // Square the half result
  } else {
    return num * computingPower(num, power - 1); // Reduce odd power
  }
};

const num = 2,
  power = 4;

// console.log("FReturns: ", computingPowerBruteForce(num, power));
console.log("FReturns: ", computingPower(num, power));
