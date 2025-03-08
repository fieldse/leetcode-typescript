export class MinStack {
  stack: number[];

  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    this.stack.push(val);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return Math.min(...this.stack);
  }
  // return this.stack.reduce((x, acc) => (x <= acc ? x : acc), this.stack[0]);
}
