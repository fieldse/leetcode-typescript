export function canConstruct(ransomNote: string, magazine: string): boolean {
  // Use maps to get character count magazine
  const m = new Map<string, number>();
  for (let char of magazine) {
    m.set(char, (m.get(char) || 0) + 1);
  }
  // Iterate across note characters, checking magazine character count,
  // If we get to negative, we've run out of letters.
  for (let char of ransomNote) {
    let magCount = m.get(char) || 0;
    if (magCount === 0) {
      return false;
    }
    m.set(char, magCount - 1);
  }
  return true;
}
