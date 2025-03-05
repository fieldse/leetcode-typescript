import { mergeAlternately } from '.';
import { describe, expect, test } from 'bun:test';

type TestCase = {
  s1: string;
  s2: string;
  expected: string;
};

const testCases: TestCase[] = [
  { s1: 'abc', s2: 'pqr', expected: 'apbqcr' },
  { s1: 'ab', s2: 'pqrs', expected: 'apbqrs' },
  { s1: 'abcd', s2: 'pq', expected: 'apbqcd' },
];

describe('merge two strings alternately', () => {
  testCases.map((t) => {
    const { s1, s2, expected } = t;
    test(`${s1} + ${s2}`, () =>
      expect(mergeAlternately(s1, s2)).toBe(expected));
  });
});
