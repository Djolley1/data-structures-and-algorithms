// 'use strict';

// function testLinkedList() {
//   const linkedList = new LinkedList();

//   // Testing append
//   linkedList.append(1);
//   assert(linkedList.head.value === 1, "Append: Value should be 1");

//   linkedList.append(2);
//   assert(linkedList.head.next.value === 2, "Append: Next node value should be 2");

//   // Testing insertBefore
//   linkedList.insertBefore(2, 3);
//   assert(linkedList.head.next.value === 3, "InsertBefore: Value should be 3");

//   linkedList.insertBefore(1, 0);
//   assert(linkedList.head.value === 0, "InsertBefore: Head value should be 0");

//   // Testing insertAfter
//   linkedList.insertAfter(3, 4);
//   assert(linkedList.head.next.next.next.value === 4, "InsertAfter: Value should be 4");

//   console.log("All tests passed successfully");
// }

// function assert(condition, message) {
//   if (!condition) {
//       throw new Error(message);
//   }
// }

// testLinkedList();
