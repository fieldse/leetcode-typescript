export function gcdOfStrings(str1: string, str2: string): string {
  // Get longer and shorter strings
  const [shorterStr, longerStr] =
    str1.length < str2.length ? [str1, str2] : [str2, str1];
  const lenLonger = longerStr.length;
  const lenShorter = shorterStr.length;

  // Start with the full shorter string
  let subStringLen = lenShorter;
  while (subStringLen > 0) {
    // If it's a divisor of both strings...
    if (lenShorter % subStringLen === 0 && lenLonger % subStringLen === 0) {
      // ... and each word is composed only of repetitions of this substring
      let subStr = shorterStr.slice(0, subStringLen);
      if (
        isComposedOfSubstring(shorterStr, subStr) &&
        isComposedOfSubstring(longerStr, subStr)
      ) {
        // ... then it's our solution
        return subStr;
      }
    }
    subStringLen -= 1; // else, shorten the substring divisor length
  }
  return '';
}

export function isComposedOfSubstring(word: string, subStr: string): boolean {
  var maxLen = word.length;
  var subLen = subStr.length;
  if (!subLen || !maxLen) {
    return false;
  }
  if (maxLen % subLen !== 0) {
    return false;
  }
  let i = 0;
  let end = i + subLen;
  while (end <= maxLen) {
    let chunk = word.slice(i, end);
    if (chunk !== subStr) {
      return false;
    }
    i += subLen;
    end += subLen;
  }
  return true;
}
