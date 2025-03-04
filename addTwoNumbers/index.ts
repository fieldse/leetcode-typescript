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

// Convert ListNode to integer (BigInt)
// Note order is reversed
// eg:  ListNode[3,4,5] -> 543
const nodeToInt = (head: ListNode | null): bigint => {
  var strVal = '';
  var current = head;
  while (current) {
    strVal = current.val.toString() + strVal; // prepend the current node value to the string
    current = current.next;
  }
  return BigInt(strVal);
};

// Convert an integer array to a ListNode
export const arrToNode = (arr: number[]): ListNode => {
  var node = new ListNode();
  var current: ListNode | null = node;
  while (current) {
    current.val = Number(arr.pop()); // pop the last number into current node
    current.next = arr.length ? new ListNode() : null; // if we have more coming, add a new ListNode as next
    current = current.next;
  }
  return node;
};

// Convert an integer number to a ListNode
// eg: 123 -> ListNode[3,2,1]
export const intToNode = (num: number | bigint): ListNode => {
  const numArr = num
    .toString()
    .split('')
    .map((x) => Number(x)); // split num to array
  return arrToNode(numArr);
};

const sum = (n1: bigint, n2: bigint) => n1 + n2;

// Add two numbers represented as reverse-order linked lists
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode {
  const s1 = nodeToInt(l1);
  const s2 = nodeToInt(l2);
  const sum = s1 + s2;
  return intToNode(sum);
}
