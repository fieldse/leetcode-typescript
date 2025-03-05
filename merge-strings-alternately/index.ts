export function mergeAlternately(word1: string, word2: string): string {
  var merged = '';
  let arr1 = word1.split('');
  let arr2 = word2.split('');

  while (arr1.length || arr2.length) {
    let c1 = arr1.shift() || '';
    let c2 = arr2.shift() || '';
    merged = merged + c1 + c2;
  }
  return merged;
}
