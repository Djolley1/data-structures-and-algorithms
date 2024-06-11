# Challenge Title

Find common values in 2 binary trees.

## Whiteboard Process
<!-- Embedded whiteboard image -->

## Approach & Efficiency

Approach
TreeNode and BinaryTree Classes:

Define the TreeNode class to represent nodes in the binary tree with value, left, and right properties.
Define the BinaryTree class to represent the binary tree with a root property.
HashMap (Map) Implementation:

Utilize JavaScript’s Map to store and track the values of nodes from the first tree.
Traverse the first binary tree and store each value in the Map using a helper function traverseAndStore.
Finding Common Values:

Traverse the second binary tree and check if each value exists in the Map using a helper function traverseAndCheck.
If a value exists in the Map, add it to a Set of common values.
Result:

Return the Set containing values found in both binary trees.

