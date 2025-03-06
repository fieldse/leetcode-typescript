/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
  // Modified: the rules say update the nums1 array, _not_ to return a value.
): number[] {
  const s1 = nums1.slice(0, m);
  const s2 = nums2.slice(0, n);
  [...s1, ...s2].sort((a, b) => a - b).map((x, i) => (nums1[i] = x));
  // We have to do this because of the weird replacement requirement at the actual Leetcode problem.
  // Replacing nums1 = [...] doesn't update the original - rather creates a copy.
  return nums1;
}
