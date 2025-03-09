export function isSubsequence(s: string, t: string): boolean {
  let j = 0;
  for (let i = 0; i < t.length; i++) {
    let c1 = t[i]; // character from word t
    let c2 = s[j]; // character from word s
    if (c1 === c2) {
      j++; // advance the position in word s
    }
  }
  return j === s.length;
}
