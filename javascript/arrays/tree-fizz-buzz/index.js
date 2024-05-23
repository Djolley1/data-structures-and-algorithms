'use strict';

class KaryNode {
  constructor(value) {
      this.value = value;
      this.children = [];
  }
}

class KaryTree {
  constructor(root = null) {
      this.root = root;
  }
}

function fizzBuzzTransform(value) {
  if (value % 3 === 0 && value % 5 === 0) {
      return "FizzBuzz";
  } else if (value % 3 === 0) {
      return "Fizz";
  } else if (value % 5 === 0) {
      return "Buzz";
  } else {
      return value.toString();
  }
}

function fizzBuzzTree(tree) {
  if (!tree.root) return new KaryTree();

  const newRoot = new KaryNode(fizzBuzzTransform(tree.root.value));
  const newTree = new KaryTree(newRoot);

  const queue = [{ oldNode: tree.root, newNode: newRoot }];

  while (queue.length > 0) {
      const { oldNode, newNode } = queue.shift();

      for (let child of oldNode.children) {
          const newChild = new KaryNode(fizzBuzzTransform(child.value));
          newNode.children.push(newChild);
          queue.push({ oldNode: child, newNode: newChild });
      }
  }

  return newTree;
}

function addChildren(node, children) {
  for (let child of children) {
      const childNode = new KaryNode(value);
      node.children.push(child);
  }
}

module.exports = { KaryNode, KaryTree, fizzBuzzTree }
