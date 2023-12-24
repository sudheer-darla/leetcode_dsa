/*
You are given a string s consisting only of the characters '0' and '1'. 
In one operation, you can change any '0' to '1' or vice versa.

The string is called alternating if no two adjacent characters are equal. 
For example, the string "010" is alternating, while the string "0100" is not.

Return the minimum number of operations needed to make s alternating.
*/

function minOperations(s) {
  const n = s.length;
  if (n <= 1) return 0;
  if (n == 2) return s[0] !== s[1] ? 0 : 1;

  const helper = (input, startChar) => {
    let swapCount = 0;
    let salt = startChar;
    for (let i = 0; i < input.length; i++) {
      if (+input[i] !== salt) {
        swapCount++;
      }
      salt ^= 1;
    }
    return swapCount;
  };

  //   There are 2 possibilities, alternating string start with 0 or start with 1
  return Math.min(helper(s, 0), helper(s, 1));
}

const inputs = ['0100', '01', '00', '1', '10010100'];
for (let input of inputs) {
  console.log(input, minOperations(input));
}
