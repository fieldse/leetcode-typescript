import { merge } from '.';
import { describe, expect, test } from 'bun:test';
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

describe('merge sorted arrays', () => {
  const testCases: {
    nums1: number[];
    nums2: number[];
    m: number;
    n: number;
    expected: number[];
  }[] = [
    {
      nums1: [1, 2, 3, 0, 0, 0],
      m: 3,
      nums2: [2, 5, 6],
      n: 3,
      expected: [1, 2, 2, 3, 5, 6],
    },
    {
      nums1: [1],
      m: 1,
      nums2: [],
      n: 0,
      expected: [1],
    },
    {
      nums1: [0],
      m: 0,
      nums2: [1],
      n: 1,
      expected: [1],
    },
  ];
  testCases.map((t, i) => {
    test(`case ${i + 1}/${testCases.length}`, () => {
      expect(merge(t.nums1, t.m, t.nums2, t.n)).toEqual(t.expected);
    });
  });
});
