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

// Convert ListNode to integer
// Note order is reversed
// eg:  ListNode[3,4,5] -> 543
const nodeToInt = (head: ListNode | null): number => {
  var strVal = '';
  var current = head;
  while (current) {
    strVal = current.val.toString() + strVal; // prepend the current node value to the string
    current = current.next;
  }
  return Number(strVal);
};

// Convert an integer number to a ListNode
// eg: 123 -> ListNode[3,2,1]
export const intToNode = (num: number): ListNode => {
  var node = new ListNode();
  var current: ListNode | null = node;
  const numArr = num.toString().split(''); // split num to string array
  while (current) {
    current.val = Number(numArr.pop()); // pop the last number into current node
    current.next = numArr.length ? new ListNode() : null; // if we have more coming, add a new ListNode as next
    current = current.next;
  }
  return node;
};

// Given two linked lists, add the first number of each and return as array.
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode {
  const sum = nodeToInt(l1) + nodeToInt(l2);
  return intToNode(sum);
}
