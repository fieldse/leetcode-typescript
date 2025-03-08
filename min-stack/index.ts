type StackVal = {
  val: number;
  min: number;
};
export class MinStack {
  stack: StackVal[];

  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    let lastMin = this.getMin();
    this.stack.push({ val, min: lastMin < val ? lastMin : val });
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1].val;
  }

  getMin(): number {
    return this.last()?.min as number; // this will never be called on an empty stack, as per constraints
  }

  last(): StackVal | undefined {
    return this.stack[this.stack.length - 1];
  }
}
