import { removeElement } from '.';
import { describe, expect, test } from 'bun:test';

describe('remove elements from array', () => {
  const testCases: {
    nums: number[];
    val: number;
    expected: number[];
    expectedLen: number;
  }[] = [
    { nums: [3, 2, 2, 3], val: 3, expectedLen: 2, expected: [2, 2] },
    {
      nums: [0, 1, 2, 2, 3, 0, 4, 2],
      val: 2,
      expected: [0, 1, 4, 0, 3],
      expectedLen: 5,
    },
    { nums: [1], val: 1, expectedLen: 0, expected: [] },
  ];
  testCases.map((t, i) => {
    test(`${i + 1}: ${t.nums}: val ${t.val}`, () => {
      const result = removeElement(t.nums, t.val);
      t.nums.sort();
      t.expected.sort();
      expect(result).toEqual(t.expectedLen);
      expect(t.nums.slice(0, t.expectedLen)).toEqual(t.expected);
    });
  });
});
