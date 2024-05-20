'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  findMaximumValue() {
    const findMax = (node) => {
      if (!node) {
        return -Infinity;
      }
      const leftMax = findMax(node.left);
      const rightMax = findMax(node.right);
      return Math.max(node.value, leftMax, rightMax);
    };

    return findMax(this.root);
  }
}

// Example usage:
const root = new Node(2);
root.left = new Node(7);
root.right = new Node(5);
root.left.left = new Node(2);
root.left.right = new Node(6);
root.left.right.left = new Node(5);
root.left.right.right = new Node(11);
root.right.right = new Node(9);
root.right.right.right = new Node(4);

const tree = new BinaryTree(root);
console.log(tree.findMaximumValue());
