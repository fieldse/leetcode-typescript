import { ListNode, addTwoNumbers } from './index';
import { expect, test } from 'bun:test';

type TestCase = {
  t1: ListNode | null;
  t2: ListNode | null;
  expected: number;
};

const testCases: TestCase[] = [
  {
    // Simple list
    t1: new ListNode(12),
    t2: new ListNode(3),
    expected: 15,
  },
  {
    // Simple list
    t1: new ListNode(1),
    t2: new ListNode(4),
    expected: 5,
  },

  {
    // Linked lists
    t1: new ListNode(1, new ListNode(2, new ListNode(3))),
    t2: new ListNode(10, new ListNode(10)),
    expected: 26,
  },
];

testCases.map((t, index) => {
  test(`[${index + 1}/${
    testCases.length
  }] add two linked lists of integers`, () => {
    const result = addTwoNumbers(t.t1, t.t2)?.val;
    expect(result).toBe(t.expected);
  });
});
