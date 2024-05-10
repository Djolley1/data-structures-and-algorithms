// linkedList.js
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  removeHead() {
    if (!this.head) {
      throw new Error('Linked list is empty');
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return value;
  }

  peekHead() {
    if (!this.head) {
      throw new Error('Linked list is empty');
    }
    return this.head.value;
  }

  isEmpty() {
    return !this.head;
  }
}

module.exports = LinkedList;
