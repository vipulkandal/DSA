let str = "abcba";

const palindromes = (str) => {
  let start = 0,
    end = str.length - 1;
  while (start <= end) {
    if (str[start] == str[end]) {
      start++;
      end--;
    } else return false;
  }
  return true;
};

// Test Cases
console.log(palindromes("abcba")); // true
console.log(palindromes("abccba")); // true
console.log(palindromes("abcd")); // false
console.log(palindromes("a")); // true
console.log(palindromes("")); // true
