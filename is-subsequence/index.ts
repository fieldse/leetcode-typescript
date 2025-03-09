export function isSubsequence(s: string, t: string): boolean {
  const sChars = s.split('').reverse();
  for (let i = 0; i < t.length; i++) {
    let c1 = t[i]; // character from t
    let c2 = sChars[sChars.length - 1]; // character from s
    if (c1 === c2) {
      sChars.pop();
    }
  }
  return sChars.length === 0;
}
