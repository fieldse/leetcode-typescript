import { describe, expect, test } from 'bun:test';
import { addNodes, arrToNodes, maxDepth, TreeNode } from '.';

describe('get maximum depth of binary tree', () => {
  const testCases: { root: TreeNode; expected: number }[] = [
    {
      root: arrToNodes([3, 9, 20, null, null, 15, 7]),
      expected: 3,
    },
    {
      root: arrToNodes([1, null, 2]),
      expected: 2,
    },
  ];

  testCases.map((t, i) => {
    const result = maxDepth(t.root);
    test(`test ${i}`, () => expect(result).toBe(t.expected));
  });
});

describe('test generate tree nodes', () => {
  const arr = [3, 9, 20, null, null, 15, 7];
  const rootnode = new TreeNode(arr.shift() as number);
  addNodes(rootnode, arr);
  console.log('rootnode:', rootnode);
});
