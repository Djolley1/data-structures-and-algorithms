# Code Challenge 17

Breadth-first Traversal.

## Whiteboard Process

[Whiteboard](./CC17.png)

## Approach & Efficiency

1. Understanding the Problem Domain
We need to perform a Breadth-First Traversal on a binary tree. The goal is to traverse the tree level-by-level and return a list of values in the order they are encountered.

2. Algorithm Design
To achieve a Breadth-First Traversal, we use a queue data structure which follows the First-In-First-Out (FIFO) principle. This helps in traversing the tree level-by-level.

Steps:
Check if the Tree is Empty:
If the input tree is null, return an empty list.
Initialize:
Create a queue and add the root node to it.
Create an empty list result to store the values of nodes as we traverse them.
Traverse the Tree:
While the queue is not empty:
Dequeue a node from the front of the queue.
Add the node’s value to the result list.
If the node has a left child, enqueue it.
If the node has a right child, enqueue it.
Return the Result:
After the queue is empty, return the result list which now contains the values in breadth-first order.
