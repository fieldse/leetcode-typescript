import { MinStack } from '.';
import { describe, expect, test } from 'bun:test';

describe('Minimum stack tests', () => {
  test('test push operations', () => {
    let m = new MinStack();
    m.push(1);
    m.push(2);
    m.push(3);
    expect(m.stack.length).toEqual(3);
    expect(m.top()).toEqual(3);
  });

  test('test top operations', () => {
    let m = new MinStack();
    m.push(1);
    m.push(2);
    expect(m.top()).toEqual(2);
    m.push(3);
    expect(m.top()).toEqual(3);
    m.push(-1);
    expect(m.top()).toEqual(-1);
  });

  test('test pop operations', () => {
    let m = new MinStack();
    m.push(1);
    m.push(2);
    m.push(3);
    expect(m.top()).toEqual(3);
    m.pop();
    expect(m.top()).toEqual(2);
    m.pop();
    expect(m.top()).toEqual(1);
  });

  test('test min operations', () => {
    let m = new MinStack();
    m.push(5);
    m.push(1);
    m.push(2);
    m.push(3);
    expect(m.getMin()).toEqual(1);
    m.push(-2);
    expect(m.getMin()).toEqual(-2);
  });
});
