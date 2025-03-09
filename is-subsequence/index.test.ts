import { isSubsequence } from '.';
import { describe, expect, test } from 'bun:test';

type TestCase = {
  s1: string;
  s2: string;
  expected: boolean;
};
const testCases: TestCase[] = [
  { s1: 'abc', s2: 'ahbgdc', expected: true },
  { s1: 'axc', s2: 'ahbgdc', expected: false },
  { s1: 'omg', s2: 'moog', expected: false },
  { s1: 'orly', s2: 'ohreally', expected: true },
];

describe('test is subsquence of string', () => {
  testCases.map((t) => {
    test(`${t.s1} -> ${t.s2}`, () => {
      expect(isSubsequence(t.s1, t.s2)).toBe(t.expected);
    });
  });
});
