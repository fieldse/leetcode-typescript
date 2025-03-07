export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * Generate a binary tree from integer array
 */
export function arrToNodes(arr: (number | null)[]): TreeNode {
  const rootNode = new TreeNode(arr.shift() as number);
  addNodes(rootNode, arr);
  return rootNode;
}

/**
 * Add nodes to a root from array
 */
export function addNodes(root: TreeNode, arr: (number | null)[]) {
  if (!arr.length) {
    return;
  }
  let [l, r] = arr.splice(0, 2);
  if (l) {
    root.left = new TreeNode(l);
    addNodes(root.left, arr);
  }
  if (r) {
    root.right = new TreeNode(r);
    addNodes(root.right, arr);
  }
}

export function maxDepth(root: TreeNode | null): number {
  return dive(root, 0);
}

const dive = (root: TreeNode | null, depth: number = 0): number => {
  if (!root) {
    return depth;
  }
  const depthLeft = root.left ? dive(root.left, depth) : 0;
  const depthRight = root.right ? dive(root.right, depth) : 0;
  if (depthLeft > depthRight) {
    return depth + depthLeft + 1;
  }
  return depth + depthRight + 1;
};
