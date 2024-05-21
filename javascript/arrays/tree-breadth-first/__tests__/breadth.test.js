'use strict';

const { TreeNode, breadthFirst } = require('../index.js');

function createSampleTree() {
    let root = new TreeNode(2);
    root.left = new TreeNode(7);
    root.right = new TreeNode(5);
    root.left.left = new TreeNode(2);
    root.left.right = new TreeNode(6);
    root.left.right.left = new TreeNode(5);
    root.left.right.right = new TreeNode(11);
    root.right.right = new TreeNode(9);
    root.right.right.right = new TreeNode(4);
    return root;
}

test('Breadth-first traversal on a sample tree', () => {
    const tree = createSampleTree();
    const result = breadthFirst(tree);
    expect(result).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
});

test('Breadth-first traversal on an empty tree', () => {
    const result = breadthFirst(null);
    expect(result).toEqual([]);
});

test('Breadth-first traversal on a single-node tree', () => {
    const tree = new TreeNode(1);
    const result = breadthFirst(tree);
    expect(result).toEqual([1]);
});
