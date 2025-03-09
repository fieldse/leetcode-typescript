import { canConstruct } from '.';
import { describe, expect, test } from 'bun:test';

type TestCase = {
  s1: string;
  s2: string;
  expected: boolean;
};
const testCases: TestCase[] = [
  { s1: 'a', s2: 'b', expected: false },
  { s1: 'aa', s2: 'ab', expected: false },
  { s1: 'aa', s2: 'aab', expected: true },
];

describe('test can construct string from characters of second string', () => {
  testCases.map((t) => {
    test(`${t.s1} -> ${t.s2}`, () => {
      expect(canConstruct(t.s1, t.s2)).toBe(t.expected);
    });
  });
});
