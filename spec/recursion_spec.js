const recursiveCount = (arr, i) => {
  return i == 0 ? 1 : recursiveCount(arr, i - 1) + 1;
}

const arr = ["a", "b", "c"];

// console.log(recursiveCount(arr, arr.length-1))

const getFactorial = n => {
  return n <= 1 ? 1 : getFactorial(n-1) * n;
}

// console.log(getFactorial(7));
let count = 0
let memo = new Map();

const getNthFib = (n) => {
  if(n == 1 || n == 2) return 1;

  const n1 = memo.has(n-1) ? memo.get(n-1) : getNthFib(n-1);
  const n2 = memo.has(n-2) ? memo.get(n-2) : getNthFib(n-2);

  memo.set(n-1, n1);
  memo.set(n-2, n2);

  return n1 + n2;
}

console.log(getNthFib(25));
console.log(`called func ${count} times`) //150049 for n=25
