export function isAnagram(s: string, t: string): boolean {
  return s.split('').sort().toString() === t.split('').sort().toString();
}
