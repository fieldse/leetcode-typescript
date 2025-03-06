import { gcdOfStrings, isComposedOfSubstring } from '.';
import { describe, expect, test } from 'bun:test';

type TestCase = {
  s1: string;
  s2: string;
  expected: string;
};

type TestCaseSubString = {
  s1: string;
  s2: string;
  expected: boolean;
};

const testCases: TestCase[] = [
  { s1: 'ABCABC', s2: 'ABC', expected: 'ABC' },
  { s1: 'ABABAB', s2: 'ABAB', expected: 'AB' },
  { s1: 'FOO', s2: 'BAR', expected: '' },
  { s1: 'AA', s2: 'A', expected: 'A' },
];

const subStrCases: TestCaseSubString[] = [
  { s1: 'abc', s2: 'abc', expected: true },
  { s1: 'abcd', s2: 'abc', expected: false },
  { s1: 'abcabcabc', s2: 'abc', expected: true },
  { s1: 'abcabcabc', s2: 'dog', expected: false },
  { s1: 'foobar', s2: 'foo', expected: false },
];

describe('test composed of substring', () => {
  subStrCases.map((t) => {
    const { s1, s2, expected } = t;
    test(`${s1} is composed of ${s2}: ${expected}`, () => {
      expect(isComposedOfSubstring(s1, s2)).toBe(expected);
    });
  });
});

describe('find greatest common divisor of two substrings', () => {
  testCases.map((t) => {
    test(`${t.s1} + ${t.s2}`, () => {
      let result = gcdOfStrings(t.s1, t.s2);
      expect(result).toBe(t.expected);
    });
  });
});
