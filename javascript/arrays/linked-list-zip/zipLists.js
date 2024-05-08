'ust strict';
const LinkedList = require('./linkedLists');

function zipLists(list1, list2) {
  const mergedList = new LinkedList();
  let current1 = list1.head;
  let current2 = list2.head;

  while (current1 || current2) {
    if (current1) {
      mergedList.append(current1.value);
      current1 = current1.next;
    }
    if (current2) {
      mergedList.append(current2.value);
      current2 = current2.next;
    }
  }
  return mergedList;
}

module.exports = zipLists;
