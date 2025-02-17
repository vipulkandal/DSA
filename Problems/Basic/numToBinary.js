const toBinary_Iteration = (num) => {
  if (num === 0) return "0"; // Edge case for 0

  let binary = "";
  while (num > 0) {
    binary = (num % 2) + binary; // Get remainder and prepend to result
    num = Math.floor(num / 2); // Divide by 2
  }

  return binary;
};

const toBinary_Recursive = (num) => {
  if (num === 0) return "0"; // Edge case for 0
  if (num === 1) return "1"; // Base case

  return toBinary_Recursive(Math.floor(num / 2)) + (num % 2);
};

const toBinary_BuiltIn = (num) => num.toString(2);

// console.log(toBinary_Iteration(10));
// console.log(toBinary_Recursive(10));
console.log(toBinary_BuiltIn(10));
