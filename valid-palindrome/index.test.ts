import { describe, expect, test } from 'bun:test';
import { isPalindrome } from '.';

const testCases: {
  s: string;
  expected: boolean;
}[] = [
  { s: 'A man, a plan, a canal: Panama', expected: true },
  { s: 'race a car', expected: false },
  { s: ' ', expected: true },
  { s: 'amalgam', expected: false },
  { s: '0P', expected: false },
  { s: '101', expected: true },
];

describe('check word is palindrome', () => {
  testCases.map((t) => {
    test(t.s, () => expect(isPalindrome(t.s)).toBe(t.expected));
  });
});
