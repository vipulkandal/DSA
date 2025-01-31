/**
 * 
 * Time Complexity Analysis
        Splitting the string (split('')) → O(n)O(n)O(n)
        Filtering non-space characters (filter(char => char !== ' ')) → O(n)O(n)O(n)
        Reversing the letters array (reverse()) → O(n)O(n)O(n)
        Reconstructing the result (for loop to place characters correctly) → O(n)O(n)O(n)
    Thus, the overall time complexity is O(n)O(n)O(n), which is optimal for this type of problem.

    Space Complexity Analysis
        chars array → O(n)O(n)O(n)
        letters array → O(n)O(n)O(n)
        result array → O(n)O(n)O(n)
    Since we are using three arrays of size O(n)O(n)O(n), we could aim to optimize space usage.

 */

function reverseStringPreserveSpacesBruteForce(input) {
  let chars = input.split("");
  let letters = chars.filter((char) => char !== " ").reverse();
  let result = [];
  let letterIndex = 0;

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === " ") {
      result.push(" ");
    } else {
      result.push(letters[letterIndex]);
      letterIndex++;
    }
  }

  return result.join("");
}

/**
 * 
 *  Time Complexity: O(n)O(n)O(n) (same as the original solution)
        The two-pointer approach still processes each character at most once.
    
    Space Complexity: O(1)O(1)O(1)
        We modify the input in-place rather than using extra arrays.

 */

function reverseStringPreserveSpacesOptimised(str) {
  let chars = str.split(""); // Convert to array for mutability
  let left = 0,
    right = chars.length - 1;

  while (left < right) {
    // Skip spaces
    if (chars[left] === " ") {
      left++;
      continue;
    }
    if (chars[right] === " ") {
      right--;
      continue;
    }
    // Swap characters
    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }

  return chars.join("");
}

// Example usage
console.log(reverseStringPreserveSpacesOptimised("123 4 5")); // Output: "543 2 1"

// Example usage
// console.log(reverseStringPreserveSpacesBruteForce("he llo world")); // "dl rowoll eh"
