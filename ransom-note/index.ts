const mapChars = (word: string): Map<string, number> => {
  const m = new Map<string, number>();
  word.split('').map((char) => {
    if (m.has(char)) {
      let prev = m.get(char) as number;
      m.set(char, prev + 1);
    } else {
      m.set(char, 1);
    }
  });
  return m;
};

export function canConstruct(ransomNote: string, magazine: string): boolean {
  // Create maps to get character counts of ransomNote and magazine
  const n = mapChars(ransomNote);
  const m = mapChars(magazine);

  // Iterate across note characters, ensuring we have at least its count in magazine characters
  for (let char of n.keys()) {
    let charCount = n.get(char)!;
    let magCount = m.get(char);
    if (!magCount || magCount < charCount) {
      return false;
    }
  }
  return true;
}
