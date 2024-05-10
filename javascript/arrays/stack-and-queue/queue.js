'use strict';

const LinkedList = require('./linkedList');
const Node = require('./node.js');

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
  }

  dequeue() {
    if (!this.front) {
      throw new Error('Queue is empty');
    }
    const value = this.front.value;
    this.front = this.front.next;
    if (!this.front) {
      this.back = null;
    }
    return value;
  }

  peek() {
    if (!this.front) {
      throw new Error('Queue is empty');
    }
    return this.front.value;
  }

  isEmpty() {
    return !this.front;
  }
}

module.exports = Queue;
