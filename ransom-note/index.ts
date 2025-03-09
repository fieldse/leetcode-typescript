export function canConstruct(ransomNote: string, magazine: string): boolean {
  // Create maps to get character counts of ransomNote and magazine
  const m: Record<PropertyKey, number> = {};
  for (let char of magazine) {
    m[char] = (m[char] || 0) + 1;
  }
  // Iterate across note characters, removing one from magazine character count.
  // If we get to negative, we've run out of letters.
  for (let char of ransomNote) {
    let magCount = m[char] || 0;
    if (magCount === 0) {
      return false;
    }
    m[char] = magCount - 1;
  }
  return true;
}
