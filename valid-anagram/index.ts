// Naive solution: very direct, but these sorts are time-costly
export function isAnagram1(s: string, t: string): boolean {
  return s.split('').sort().toString() === t.split('').sort().toString();
}

// Highly optimized version
// credit for this solution:
// https://leetcode.com/problems/valid-anagram/solutions/6149327/typescript-solution-97
export function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  let charCount = new Array(26).fill(0); // create an array for each letter of the alphabet
  let a = 'a'.charCodeAt(0); // get charcode of 'a' as int
  for (let i = 0; i < s.length; i++) {
    let x = s.charCodeAt(i) - a;
    let y = t.charCodeAt(i) - a;
    charCount[x]++;
    charCount[y]--;
  }
  return charCount.every((x) => x === 0);
}

function toMap(word: string): Record<string, number> {
  const m: Record<string, number> = {};
  for (let char of word) {
    m[char] = (m[char] || 0) + 1;
  }
  return m;
}

// Build frequency map of letter, subtracing out 't' characters.
// If any non-zero values remain, it's not an anagram.
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  let m = toMap(s);
  for (let char of t) {
    m[char] = (m[char] || 0) - 1;
  }
  if (Object.values(m).find((x) => x !== 0)) {
    return false;
  }
  return true;
}
