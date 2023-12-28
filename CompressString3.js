// https://leetcode.com/problems/string-compression-ii/description/?envType=daily-question&envId=2023-12-28

function getLengthOfOptimalCompression(s, k) {
  let memTable = new Array(101).fill(null).map(() => new Array(101).fill(-1));

  const recursion = (s, i, K) => {
    const n = s.length;
    let k = K;
    if (n - i <= k) {
      return 0;
    }
    if (memTable[i][k] !== -1) {
      return memTable[i][k];
    }

    let ans = k > 0 ? recursion(s, i + 1, k - 1) : 101;
    let c = 1;
    for (let j = i + 1; j <= n; j++) {
      ans = Math.min(
        ans,
        1 + (c > 99 ? 3 : c > 9 ? 2 : c > 1 ? 1 : 0) + recursion(s, j, k)
      );
      if (j < n && s[i] === s[j]) {
        c++;
      } else if (--k < 0) {
        break;
      }
    }
    return (memTable[i][K] = ans);
  };

  return recursion(s, 0, k);
}

console.log(getLengthOfOptimalCompression('aaabcccd', 2));
