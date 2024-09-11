const isPangram = (str) => {
    const englishDic = new Set([
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ]);
  
    // Convert the input string to lowercase for case-insensitive comparison
    str = str.toLowerCase();
  
    // Iterate through each character in the input string
    for (let char of str) {
      // If the character is in the alphabet set, remove it
      englishDic.delete(char);
  
      // If the set is empty, the string is a pangram
      if (englishDic.size === 0) {
        return true;
      }
    }
  
    // If the set is not empty, the string is not a pangram
    return false;
  };
  
  // Example usage:
  console.log(isPangram("the quick brown fox jumps over the lazy dog")); // true
  console.log(isPangram("hello world")); // false
  