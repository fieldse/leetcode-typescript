import { ListNode, addTwoNumbers, intToNode } from '.';
import { describe, expect, test } from 'bun:test';

type TestCase = {
  t1: ListNode | null;
  t2: ListNode | null;
  expected: ListNode;
  comment: string;
};

const listNode123 = new ListNode(3, new ListNode(2, new ListNode(1))); // 123 as int
const listNode456 = new ListNode(6, new ListNode(5, new ListNode(4))); // 456 as int
const listNode789 = new ListNode(9, new ListNode(8, new ListNode(7))); // 789 as int
const listNode0 = new ListNode(0); // 0
const listNode1001 = new ListNode(
  1,
  new ListNode(0, new ListNode(0, new ListNode(1))) // 1001 as int
);

const testCases: TestCase[] = [
  {
    // 123 + 456 = 579 -> L(9,7,5)
    t1: listNode123,
    t2: listNode456,
    expected: new ListNode(9, new ListNode(7, new ListNode(5))),
    comment: '123 + 456 = 579 -> L(9,7,5)',
  },
  {
    t1: listNode0,
    t2: listNode0,
    expected: listNode0,
    comment: '0 + 0 = L(0)',
  },
  {
    t1: listNode123,
    t2: listNode0,
    expected: listNode123,
    comment: '123 + 0 = 123 -> L(3,2,1)',
  },
  {
    t1: listNode789,
    t2: listNode1001,
    expected: new ListNode(
      0,
      new ListNode(9, new ListNode(7, new ListNode(1)))
    ),
    comment: '789 + 1001 = 1790 -> L(0,9,7,1)',
  },
];

describe('add two linked lists of integers', () => {
  testCases.map((t, index) => {
    test(t.comment, () => {
      console.log(`[${index + 1}/${testCases.length}] ${t.comment}`);
      const result = addTwoNumbers(t.t1, t.t2);
      expect(result).toMatchObject(t.expected);
    });
  });
});

describe('number to ListNode', () => {
  test('123', () => expect(intToNode(123)).toMatchObject(listNode123));
  test('456', () => expect(intToNode(456)).toMatchObject(listNode456));
  test('0', () => expect(intToNode(0)).toMatchObject(listNode0));
  test('1001', () => expect(intToNode(1001)).toMatchObject(listNode1001));
});
