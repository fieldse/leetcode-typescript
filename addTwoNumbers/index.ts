console.log('\n=== starting LeetCode problem set ===\n');

/**
 * Definition for singly-linked list.
 */
export class ListNode {
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

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  return new ListNode(sumNode(l1) + sumNode(l2));
}
