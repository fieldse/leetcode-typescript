import { isAnagram } from '.';
import { describe, expect, test } from 'bun:test';

type TestCase = {
  s1: string;
  s2: string;
  expected: any;
};
const testCases: TestCase[] = [
  { s1: 'anagram', s2: 'nagaram', expected: true },
  { s1: 'rat', s2: 'car', expected: false },
  { s1: 'wot', s2: 'twoo', expected: false },
  { s1: 'woot', s2: 'wot', expected: false },
  { s1: 'wot', s2: 'two', expected: true },
];

describe('valid anagram', () => {
  testCases.map((t) => {
    test(`${t.s1} -> ${t.s2}`, () => {
      const result = isAnagram(t.s1, t.s2);
      expect(result).toBe(t.expected);
    });
  });
});
