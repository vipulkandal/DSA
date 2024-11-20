function sortString(str) {
  console.log("Unsorted string:", str);

  // Initialize frequency array for 26 lowercase English letters
  const freq = new Array(26).fill(0);

  // Count the frequency of each character
  for (let i = 0; i < str.length; i++) {
    freq[str.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  // Build the sorted string
  let sorted = "";
  for (let i = 0; i < 26; i++) {
    while (freq[i]-- > 0) {
      sorted += String.fromCharCode(i + "a".charCodeAt(0));
    }
  }

  console.log("Sorted string:", sorted);
  return sorted;
}

// Example usage
const input = "worldhello";
sortString(input);
