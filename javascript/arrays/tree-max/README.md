# Code Challenge 16

Find the Maximum Value in a Binary Tree

## Whiteboard Process

[Whiteboard](./CC16.png)

## Approach & Efficiency

- Define Node Class: Each node has a value, and left and right children.

- Define BinaryTree Class:

Contains the root of the tree.
Has a method findMaximumValue to find the maximum value in the tree.

- Recursive Helper Function (findMax):

If the current node is null, return -Infinity.
Recursively find the maximum value in the left subtree.
Recursively find the maximum value in the right subtree.
Return the maximum of the current node's value, left subtree's maximum, and right subtree's maximum.
