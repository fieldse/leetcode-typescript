import { exampleFunc } from '.';
import { describe, expect, test } from 'bun:test';

type TestCase = {
  s1: any;
  s2: any;
  expected: any;
};
const testCases: TestCase[] = [
  { s1: '', s2: '', expected: undefined },
  { s1: '', s2: '', expected: undefined },
  { s1: '', s2: '', expected: undefined },
  { s1: '', s2: '', expected: undefined },
];

describe('EXAMPLE PROBLEM', () => {
  testCases.map((t) => {
    test('test label', () => {
      expect(exampleFunc(t.s1, t.s2)).toBe(t.expected);
    });
  });
});
