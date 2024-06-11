'use strict';

class TreeNode {
  constructor(value = null, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
      this.root = root;
  }
}

module.exports = { TreeNode, BinaryTree };
