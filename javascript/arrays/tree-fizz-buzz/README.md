# Code Challenge 18

Conduct “FizzBuzz” on a k-ary tree while traversing through it to create a new tree.

Set the values of each of the new nodes depending on the corresponding node value in the source tree.

## Whiteboard Process

[Whiteboard](./CC18.png)

## Approach & Efficiency

Data Structure Definition:

Define a KaryNode class that represents each node in the tree with a value and a list of children.
Define a KaryTree class that represents the k-ary tree, initialized with a root node.
Transformation Function:

Define a fizzBuzzTransform function that takes an integer value and returns a string based on the FizzBuzz rules:
If divisible by 3 and 5, return "FizzBuzz".
If divisible by 3, return "Fizz".
If divisible by 5, return "Buzz".
Otherwise, return the value as a string.
Main Function:

Define the fizzBuzzTree function that takes a k-ary tree as input and returns a new k-ary tree with transformed values:
If the input tree is empty, return a new empty tree.
Initialize the new root with the transformed value of the original root.
Use a queue for a breadth-first traversal of the tree:
Dequeue the current node and process its children.
Transform each child node’s value using fizzBuzzTransform and add it to the new tree.
Enqueue the original and new child nodes to continue the traversal.
