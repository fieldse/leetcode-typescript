import { describe, expect, test } from 'bun:test';
import { kidsWithCandies } from '.';

const testCases: {
  candies: number[];
  extraCandies: number;
  expected: boolean[];
}[] = [
  {
    candies: [4, 2, 1, 1, 2],
    extraCandies: 1,
    expected: [true, false, false, false, false],
  },
  {
    candies: [2, 3, 5, 1, 3],
    extraCandies: 3,
    expected: [true, true, true, false, true],
  },
  { candies: [12, 1, 12], extraCandies: 10, expected: [true, false, true] },
];

describe('check kids with highest number of candies', () => {
  testCases.map((t, i) => {
    let result = kidsWithCandies(t.candies, t.extraCandies);
    test(`case ${i + 1} of ${testCases.length}`, () =>
      expect(result).toBe(t.expected));
  });
});
