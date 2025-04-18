function isBalancedParanthesis(str) {
  const stack = [];

  // map closing brackets to their corresponding opening brackets
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of str) {
    // If it's an opening bracket, push to stack
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    }

    // If it's a closing bracket
    else if (char === ")" || char === "}" || char === "]") {
      // If stack is empty or top is not matching
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  // If stack is empty at the end → all brackets were matched
  return stack.length === 0;
}

const str = "()[]{}";

console.log("FReturns: ", isBalancedParanthesis(str));
