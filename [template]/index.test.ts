import { exampleFunc } from '.';
import { describe, expect, test } from 'bun:test';

type TestCase = {
  s1: string;
  s2: string;
  expected: any;
};
const testCases: TestCase[] = [
  { s1: '', s2: '', expected: true },
  { s1: '', s2: '', expected: true },
  { s1: '', s2: '', expected: true },
  { s1: '', s2: '', expected: true },
];

describe('EXAMPLE PROBLEM', () => {
  testCases.map((t) => {
    test(`${t.s1} -> ${t.s2}`, () => {
      const result = exampleFunc(t.s1, t.s2);
      expect(result).toBe(t.expected);
    });
  });
});
