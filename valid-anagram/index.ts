// Naive solution: very direct, but these sorts are time-costly
export function isAnagram1(s: string, t: string): boolean {
  return s.split('').sort().toString() === t.split('').sort().toString();
}

// credit for this solution:
// https://leetcode.com/problems/valid-anagram/solutions/6149327/typescript-solution-97
export function isAnagram(s: string, t: string): boolean {
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
