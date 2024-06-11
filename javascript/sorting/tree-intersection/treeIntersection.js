function tree_intersection(tree1, tree2) {
  if (!tree1.root || !tree2.root) {
      return new Set();
  }

  const hashMap = new Map();
  const commonValues = new Set();

  function traverseAndStore(node, map) {
      if (node === null) return;
      map.set(node.value, (map.get(node.value) || 0) + 1);
      traverseAndStore(node.left, map);
      traverseAndStore(node.right, map);
  }

  function traverseAndCheck(node, map, commonSet) {
      if (node === null) return;
      if (map.has(node.value)) {
          commonSet.add(node.value);
      }
      traverseAndCheck(node.left, map, commonSet);
      traverseAndCheck(node.right, map, commonSet);
  }

  traverseAndStore(tree1.root, hashMap);
  traverseAndCheck(tree2.root, hashMap, commonValues);

  return commonValues;
}

module.exports = tree_intersection;
