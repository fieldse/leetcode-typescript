import { merge } from '.';
import { describe, expect, test } from 'bun:test';

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
