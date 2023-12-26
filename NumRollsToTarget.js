function numRollsToTarget(n, k, target) {
  // MOD is a constant used for taking the modulo to prevent overflow
  const MOD = 10 ** 9 + 7;

  // dp is a 2D array used for memoization to store intermediate results
  const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(-1));

  // recursion is a helper function that performs the actual recursive computation
  const recursion = (dp, n, k, target) => {
    // Base case: if both the number of dice and the target are zero, there is one way to achieve it
    if (target === 0 && n === 0) return 1;
    // Base case: if either the number of dice is zero or the target is less than or equal to zero, there are no ways
    if (n === 0 || target <= 0) return 0;

    // If the result for the current state (n, target) is already calculated, return it
    if (dp[n][target] !== -1) return dp[n][target] % MOD;

    // Initialize the ways variable to count the number of ways to achieve the target
    let ways = 0;

    // Iterate through all possible outcomes of rolling a die (from 1 to k)
    for (let i = 1; i <= k; i++) {
      // Recursively calculate the number of ways for the next state (n-1, target-i)
      ways = (ways + recursion(dp, n - 1, k, target - i)) % MOD;
    }

    // Store the result in the memoization table and return it
    dp[n][target] = ways % MOD;
    // console.log(dp);
    return dp[n][target];
};

// Start the recursion with the initial values of n, k, and target
return recursion(dp, n, k, target);
}

console.log(numRollsToTarget(2, 6, 7));
