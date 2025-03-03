console.log('\n=== starting LeetCode problem set ===\n');

/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function sumNode(x: ListNode | null, acc: number = 0): number {
  acc += x?.val || 0;
  if (x?.next) {
    return sumNode(x.next, acc);
  }
  return acc;
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  return new ListNode(sumNode(l1) + sumNode(l2));
}

// ------------------------ //
//          TESTS           //
// ------------------------ //

type TestCase = {
  t1: ListNode | null;
  t2: ListNode | null;
  expected: number;
};
function runTest() {
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

  testCases.map((t) => {
    const result = addTwoNumbers(t.t1, t.t2)?.val;
    console.log(
      `result: ${result} -- expected: ${t.expected}\t[${
        result == t.expected ? 'OK' : 'fail'
      }]`
    );
  });
}

// Run
runTest();
