// Top-Down Approach
function fibRecursive(n: number, memo = {}) {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibRecursive(n - 1, memo) + fibRecursive(n - 2, memo);
  return memo[n];
}

console.log(fibRecursive(5));
console.log(fibRecursive(100));

// Bottom-Up Approach
function fibIterative(n: number) {
  if (n <= 2) return 1;
  const table = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  return table[n];
}

console.log(fibIterative(5));
console.log(fibIterative(100));
