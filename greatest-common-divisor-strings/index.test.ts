import { gcdOfStrings } from '.';
import { describe, expect, test } from 'bun:test';

type TestCase = {
  s1: string;
  s2: string;
  expected: string;
};

const testCases: TestCase[] = [
  { s1: 'ABCABC', s2: 'ABC', expected: 'ABC' },
  { s1: 'ABABAB', s2: 'ABAB', expected: 'AB' },
  { s1: 'FOO', s2: 'BAR', expected: '' },
];

describe('find greatest common divisor of two substrings', () => {
  testCases.map((t) => {
    test(`${t.s1} + ${t.s2}`, () =>
      expect(gcdOfStrings(t.s1, t.s2)).toBe(t.expected));
  });
});
