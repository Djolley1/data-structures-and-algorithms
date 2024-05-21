'use strict';

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function breadthFirst(tree) {
  if (!tree) return [];

  let queue = [tree];
  let result = [];

  while (queue.length > 0) {
    let currentNode = queue.shift();
    result.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  return result
}

module.exports = { TreeNode, breadthFirst };
