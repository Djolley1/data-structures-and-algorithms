'use strict';

const { KaryNode, KaryTree, fizzBuzzTree } = require('../index.js');

// Helper function to add children to a node
function addChildren(node, childrenValues) {
    for (let value of childrenValues) {
        const childNode = new KaryNode(value);
        node.children.push(childNode);
    }
}

describe('FizzBuzz K-ary Tree', () => {
    test('should return an empty tree when input tree is empty', () => {
        const emptyTree = new KaryTree();
        const newTree = fizzBuzzTree(emptyTree);
        expect(newTree.root).toBeNull();
    });

    test('should transform a tree with only the root node', () => {
        const root = new KaryNode(1);
        const tree = new KaryTree(root);
        const newTree = fizzBuzzTree(tree);
        expect(newTree.root.value).toBe('1');
    });

    test('should transform a tree with multiple nodes correctly', () => {
        const root = new KaryNode(1);
        addChildren(root, [3, 5, 15, 4]);
        const tree = new KaryTree(root);
        const newTree = fizzBuzzTree(tree);

        expect(newTree.root.value).toBe('1');
        expect(newTree.root.children[0].value).toBe('Fizz');
        expect(newTree.root.children[1].value).toBe('Buzz');
        expect(newTree.root.children[2].value).toBe('FizzBuzz');
        expect(newTree.root.children[3].value).toBe('4');
    });

    test('should handle a deeper tree structure', () => {
        const root = new KaryNode(1);
        const child1 = new KaryNode(3);
        const child2 = new KaryNode(5);
        const child3 = new KaryNode(15);
        const child4 = new KaryNode(4);
        addChildren(root, [child1, child2, child3, child4]);
        addChildren(child1, [9, 10, 12]);
        addChildren(child2, [20]);
        addChildren(child3, [30, 45]);
        const tree = new KaryTree(root);
        const newTree = fizzBuzzTree(tree);

        expect(newTree.root.value).toBe('1');
        expect(newTree.root.children[0].value).toBe('Fizz');
        expect(newTree.root.children[0].children[0].value).toBe('Fizz');
        expect(newTree.root.children[0].children[1].value).toBe('Buzz');
        expect(newTree.root.children[0].children[2].value).toBe('Fizz');
        expect(newTree.root.children[1].value).toBe('Buzz');
        expect(newTree.root.children[1].children[0].value).toBe('Buzz');
        expect(newTree.root.children[2].value).toBe('FizzBuzz');
        expect(newTree.root.children[2].children[0].value).toBe('FizzBuzz');
        expect(newTree.root.children[2].children[1].value).toBe('FizzBuzz');
        expect(newTree.root.children[3].value).toBe('4');
    });
});
