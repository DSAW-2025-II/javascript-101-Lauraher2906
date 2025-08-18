// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Incorrect");
    return;
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    console.log("Incorrect");
    return;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Find the Largest Number
function findLargest(arr) {
if (
    !Array.isArray(arr) ||
    arr.length === 0 ||
    !arr.every((x) => typeof x === "number")
  ) {
    console.log("Incorrect");
    return;
  }
  return Math.max(...arr);
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== "string") {
    console.log("Incorrect");
    return;
  }
  const normalized = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (const char of normalized) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    console.log("Incorrect");
    return;
  }

  if (n <= 1) return false;
  if (n === 2) return true;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
