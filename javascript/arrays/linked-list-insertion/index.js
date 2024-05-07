class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  // Method to append a new node to the end of the linked list
  append(value) {
      const newNode = new Node(value);
      if (!this.head) {
          this.head = newNode;
          return;
      }
      let current = this.head;
      while (current.next) {
          current = current.next;
      }
      current.next = newNode;
  }

  // Method to insert a new node before the first occurrence of a given value
  insertBefore(value, newValue) {
      const newNode = new Node(newValue);
      if (!this.head) {
          throw new Error('List is empty');
      }
      if (this.head.value === value) {
          newNode.next = this.head;
          this.head = newNode;
          return;
      }
      let current = this.head;
      while (current.next) {
          if (current.next.value === value) {
              newNode.next = current.next;
              current.next = newNode;
              return;
          }
          current = current.next;
      }
      throw new Error('Value not found');
  }

  // Method to insert a new node after the first occurrence of a given value
  insertAfter(value, newValue) {
      const newNode = new Node(newValue);
      if (!this.head) {
          throw new Error('List is empty');
      }
      let current = this.head;
      while (current) {
          if (current.value === value) {
              newNode.next = current.next;
              current.next = newNode;
              return;
          }
          current = current.next;
      }
      throw new Error('Value not found');
  }
}

// Testing the implementation
const linkedList = new LinkedList();

// Testing append
linkedList.append(1);
linkedList.append(3);
linkedList.append(2);
console.log(linkedList);

// Testing insertBefore
linkedList.insertBefore(3, 5);
console.log(linkedList);

// Testing insertAfter
linkedList.insertAfter(3, 4);
console.log(linkedList);
