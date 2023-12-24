function lssdc(s, B) {
  let set = new Set();
  let max_SubString_Length = 0;
  let startIdx = 0;
  for (let endIdx = 0; endIdx < s.length; endIdx++) {
    const char = s[endIdx];
    set.add(char);
    while (set.size > B) {
      set.delete(s[startIdx]);
      // Skip Duplicates
      while (s[startIdx] === s[startIdx + 1]) {
        startIdx++;
      }
      startIdx++;
    }
    max_SubString_Length = Math.max(
      max_SubString_Length,
      endIdx - startIdx + 1
    );
  }

  console.log(max_SubString_Length);
}

const A = 'beedcface';
lssdc(A, 4);
lssdc('accab',2);
