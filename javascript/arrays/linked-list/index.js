'use strict';

class Node {
  constructor( value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next
    }
    return false;
  }

  toString() {
    let result = '';
    let current = this.head;
    while (current) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    result += 'NULL';
    return result;
  }
}

module.exports = { Node, LinkedList };

