import { twoSum } from '.';
import { describe, expect, test } from 'bun:test';

type TestCase = {
  nums: number[];
  target: number;
  expected: number[];
};
const testCases: TestCase[] = [
  { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { nums: [3, 2, 4], target: 6, expected: [1, 2] },
  { nums: [3, 3], target: 6, expected: [0, 1] },
];

describe('Find indices of two numbers giving sum', () => {
  testCases.map((t) => {
    test(`${t.nums} -> ${t.target}`, () => {
      expect(twoSum(t.nums, t.target)).toBe(t.expected);
    });
  });
});
