// https://leetcode.com/problems/decode-string/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @return {string}
 */
function decodeString1(s) {
  let stack = [];
  let decoded = '';
  const closingBrace = ']';
  const openBrace = '[';
  // Push all the character unitl you get a closing brace
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== closingBrace) {
      stack.push(s[i]);
    } else {
      // Pop all the character until you reach the number
      // Ignore the opening brace
      let str = '';
      let count = '';
      let poppedChar = stack.pop();
      while (poppedChar !== openBrace) {
        str = poppedChar + str;
        poppedChar = stack.pop();
      }

      let poppedNum = stack.pop();
      while (!isNaN(poppedNum)) {
        count = poppedNum + count;
        poppedNum = stack.pop();
      }

      console.log(count, str);
      if (poppedNum !== undefined) stack.push(poppedNum);
      decoded += str.repeat(+count);
      console.log(decoded);
    }
  }
  console.log(stack);
  if (stack.length > 0) {
    decoded += stack.join('');
  }
  console.log(decoded);
}

const decodeString = (s) => {
  const stack = [];
  for (const char of s) {
    if (char !== ']') {
      stack.push(char);
      //   console.log(stack);
      continue;
    }
    let cur = stack.pop();
    let str = '';
    while (cur !== '[') {
      str = cur + str;
      cur = stack.pop();
    }
    let num = '';
    cur = stack.pop();
    while (!Number.isNaN(Number(cur))) {
      num = cur + num;
      cur = stack.pop();
    }
    stack.push(cur);
    stack.push(str.repeat(Number(num)));
    console.log(cur, str, num);
  }
  console.log(stack);
  return stack.join('');
};

let s1 = '3[a]2[bc]';
// Output: "aaabcbc"

let s2 = '3[a2[c]]';
// Output: "accaccacc"

let s3 = '2[abc]3[cd]ef';
// Output: "abcabccdcdcdef"

// decodeString(s1);
// decodeString(s2);
console.log(decodeString(s3));
