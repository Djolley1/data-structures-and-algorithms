'use strict';

const LinkedList = require('./linkedList');
const Node = require('./node.js');

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (!this.top) {
      throw new Error('Stack is empty');
    }
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  peek() {
    if (!this.top) {
      throw new Error('Stack is empty');
    }
    return this.top.value;
  }

  isEmpty() {
    return !this.top;
  }
}

module.exports = Stack;
