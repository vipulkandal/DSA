/*
 * Longest Palindrome
Difficulty: Easy

Problem Statement:
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One possible longest palindrome that can be formed is "dccaccd", which has a length of 7.

Example 2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be formed is "a", which has a length of 1.

*/

const str = "abccccdd";
const longestPalindrome = (str) => {
  let charCount = {};

  let length = 0;
  let oddFound = false;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  for (let count of Object.values(charCount)) {
    length += Math.floor(count / 2) * 2;
    if (count % 2 !== 0) oddFound = true;
  }

  if (oddFound) length = length + 1;

  return length;
};

console.log(longestPalindrome(str));
