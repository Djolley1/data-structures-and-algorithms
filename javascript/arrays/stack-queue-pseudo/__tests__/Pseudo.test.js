// const { PseudoQueue } = require('../index.js');

// describe('PseudoQueue', () => {
//   let pseudoQueue;

//   beforeEach(() => {
//     pseudoQueue = new PseudoQueue();
//   });

//   test('enqueue adds elements to the queue', () => {
//     pseudoQueue.enqueue(10);
//     pseudoQueue.enqueue(15);
//     pseudoQueue.enqueue(20);
//     expect(pseudoQueue.dequeue()).toBe(10);
//     expect(pseudoQueue.dequeue()).toBe(15);
//     expect(pseudoQueue.dequeue()).toBe(20);
//   });

//   test('dequeue returns elements in FIFO order', () => {
//     pseudoQueue.enqueue(10);
//     pseudoQueue.enqueue(15);
//     pseudoQueue.enqueue(20);
//     expect(pseudoQueue.dequeue()).toBe(10);
//     expect(pseudoQueue.dequeue()).toBe(15);
//     expect(pseudoQueue.dequeue()).toBe(20);
//   });

//   test('dequeue returns null if queue is empty', () => {
//     expect(pseudoQueue.dequeue()).toBeNull();
//   });
// });
