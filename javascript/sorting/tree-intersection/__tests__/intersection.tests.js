const { TreeNode, BinaryTree } = require('../index');
const tree_intersection = require('../treeIntersection');

function testTreeIntersection() {
  const node1 = new TreeNode(1);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);
  const node4 = new TreeNode(4);
  const node5 = new TreeNode(5);

  node1.left = node2;
  node1.right = node3;
  node2.left = node4;
  node2.right = node5;

  const tree1 = new BinaryTree(node1);

  const node6 = new TreeNode(3);
  const node7 = new TreeNode(5);
  const node8 = new TreeNode(6);
  const node9 = new TreeNode(7);
  const node10 = new TreeNode(4);

  node6.left = node7;
  node6.right = node8;
  node7.left = node9;
  node7.right = node10;

  const tree2 = new BinaryTree(node6);

  const result = tree_intersection(tree1, tree2);
  console.log(result); // Should output Set { 3, 4, 5 }

  // Assertions
  console.assert(result.has(3), "Test Case 1 Failed");
  console.assert(result.has(4), "Test Case 2 Failed");
  console.assert(result.has(5), "Test Case 3 Failed");
  console.assert(!result.has(1), "Test Case 4 Failed");
  console.assert(!result.has(6), "Test Case 5 Failed");

  console.log("All test cases pass");
}

testTreeIntersection();
