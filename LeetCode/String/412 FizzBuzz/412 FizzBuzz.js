const chooseWord = (num) => {
  if (num % 5 == 0 && num % 3 == 0) return "FizzBuzz";
  else if (num % 3 == 0) return "Fizz";
  else if (num % 5 == 0) return "Buzz";
  else return `${num}`;
};

const fizzBuzz = (n) => {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result[i - 1] = chooseWord(i);
  }
  return result;
};

console.log(fizzBuzz(15));
