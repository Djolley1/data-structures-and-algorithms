// queue.test.js
const Queue = require('../queue');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueue into a queue', () => {
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
  });

  test('enqueue multiple values into a queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });

  test('dequeue out of a queue the expected value', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.peek()).toBe(2);
  });

  test('peek into a queue, seeing the expected value', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
  });

  test('empty a queue after multiple dequeues', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test('instantiate an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('dequeue on empty queue raises exception', () => {
    expect(() => queue.dequeue()).toThrow('Queue is empty');
  });

  test('peek on empty queue raises exception', () => {
    expect(() => queue.peek()).toThrow('Queue is empty');
  });
});
