const digitsInFactorial = (N) => {
  if (N === 0 || N === 1) return 1;
  let logSum = 0;

  for (let i = 2; i <= N; i++) {
    //sum stores log(i) + log(i+1) + ... + log(N)
    logSum += Math.log10(i);
  }

  return Math.floor(logSum) + 1;
};

const N = 5;

console.log("FReturns: ", digitsInFactorial(N));
