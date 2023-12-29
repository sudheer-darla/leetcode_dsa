// https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/description/?envType=daily-question&envId=2023-12-29

function minDifficulty(jobDifficulty, d) {
  const n = jobDifficulty.length;

  if (n < d) {
    return -1;
  }

  const dp = Array.from({ length: n + 1 }, () =>
    Array(d + 1).fill(Number.POSITIVE_INFINITY)
  );
  dp[0][0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= d; k++) {
      let maxDiff = 0;

      for (let j = i - 1; j >= k - 1; j--) {
        maxDiff = Math.max(maxDiff, jobDifficulty[j]);
        dp[i][k] = Math.min(dp[i][k], dp[j][k - 1] + maxDiff);
      }
    }
  }

  console.log(dp);
  return dp[n][d] !== Number.POSITIVE_INFINITY ? dp[n][d] : -1;
}

minDifficulty([6, 5, 4, 3, 2, 1], 2);
