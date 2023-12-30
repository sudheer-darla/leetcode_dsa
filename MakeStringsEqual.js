/*
You are given an array of strings words (0-indexed).

In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, 
and move any character from words[i] to any position in words[j].

Return true if you can make every string in words equal using any number of operations, and false otherwise.

 https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/description/?envType=daily-question&envId=2023-12-30 
*/

var makeEqual = function (words) {
  if (!Array.isArray(words) || words.some((word) => typeof word !== 'string')) {
    // Input validation: words should be an array of strings
    return false;
  }

  const wordCount = words.length;

  if (wordCount === 1) {
    // If there's only one word, the condition is always true
    return true;
  }

  const allChars = words.join('');
  const totalChars = allChars.length;

  if (totalChars % wordCount !== 0) {
    // If the total character count is not divisible by the word count, return false
    return false;
  }

  const charFrequencyMap = {};

  for (let char of allChars) {
    charFrequencyMap[char] = (charFrequencyMap[char] || 0) + 1;
  }

  // Check if all chars frequency is divisible by no of words
  for (let char in charFrequencyMap) {
    if (charFrequencyMap[char] % wordCount !== 0) {
      // We cannot distribute this character across the words
      return false;
    }
  }

  // All conditions passed, characters can be distributed equally
  return true;
};

console.log(makeEqual(['abc', 'aabc', 'bc']))

console.log(makeEqual(['abc', 'aabc', 'abc']));
