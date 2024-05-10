// stack.test.js
const Stack = require('../stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('push onto a stack', () => {
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });

  test('push multiple values onto a stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  test('pop off the stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.peek()).toBe(1);
  });

  test('empty a stack after multiple pops', () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  test('peek the next item on the stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  });

  test('instantiate an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test('pop on empty stack raises exception', () => {
    expect(() => stack.pop()).toThrow('Stack is empty');
  });

  test('peek on empty stack raises exception', () => {
    expect(() => stack.peek()).toThrow('Stack is empty');
  });
});
