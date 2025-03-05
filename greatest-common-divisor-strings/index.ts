export function gcdOfStrings(str1: string, str2: string): string {
  let subStr: string = '';
  const [shorterStr, longerStr] =
    str1.length < str2.length ? [str1, str2] : [str2, str1];
  let start = 0;
  let end = shorterStr.length;
  let offset = 0;

  // For each substring of shorter, check if it's in longer.
  //  If not, increment offset. Start and end of slice are incremented accordingly.
  // check if new slice is in longer.
  //   no ? increment offset again.
  //  if new end value = end of shorter, then decrement maxlen and break to next loop.
  while (end > 0) {
    // Get substring
    subStr = shorterStr.slice(start + offset, end + offset);
    if (longerStr.includes(subStr)) {
      return subStr; // found the match? return it
    }

    // If our window is at last character, next loop
    if (end + offset === shorterStr.length) {
      offset = 0; // reset offsent
      end -= 1; // shorten window length
      continue;
    }
    // no match? increment offset
    offset += 1;
  }
  return '';
}
