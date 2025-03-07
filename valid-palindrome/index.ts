export function isPalindrome(s: string): boolean {
  const stripped = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let j = 0;
  let q = stripped.length - 1;
  while (j <= q) {
    if (stripped[j] !== stripped[q]) {
      return false;
    }
    j++;
    q--;
  }
  return true;
}
