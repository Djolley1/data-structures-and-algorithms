// const LinkedList = require('../linkedLists');
// const zipLists = require('../zipLists');

// describe('zipLists', () => {
//     // Test case 1: Both input lists are empty
//     test('Both input lists are empty', () => {
//         const list1 = new LinkedList();
//         const list2 = new LinkedList();
//         const result = zipLists(list1, list2);
//         expect(result.head).toBeNull();
//     });

//     // Test case 2: One input list is empty
//     test('One input list is empty', () => {
//         const list1 = new LinkedList();
//         list1.append(1);
//         list1.append(3);
//         list1.append(2);
//         const list2 = new LinkedList();
//         const result = zipLists(list1, list2);
//         expect(result.head.value).toBe(1);
//         expect(result.head.next.value).toBe(3);
//         expect(result.head.next.next.value).toBe(2);
//         expect(result.head.next.next.next).toBeNull();
//     });

//     // Test case 3: Both input lists have equal length
//     test('Both input lists have equal length', () => {
//         const list1 = new LinkedList();
//         list1.append(1);
//         list1.append(3);
//         list1.append(2);
//         const list2 = new LinkedList();
//         list2.append(5);
//         list2.append(9);
//         list2.append(4);
//         const result = zipLists(list1, list2);
//         expect(result.head.value).toBe(1);
//         expect(result.head.next.value).toBe(5);
//         expect(result.head.next.next.value).toBe(3);
//         expect(result.head.next.next.next.value).toBe(9);
//         expect(result.head.next.next.next.next.value).toBe(2);
//         expect(result.head.next.next.next.next.next.value).toBe(4);
//         expect(result.head.next.next.next.next.next.next).toBeNull();
//     });

//     // Test case 4: First input list is longer than the second one
//     test('First input list is longer than the second one', () => {
//         const list1 = new LinkedList();
//         list1.append(1);
//         list1.append(3);
//         list1.append(2);
//         list1.append(6);
//         const list2 = new LinkedList();
//         list2.append(5);
//         list2.append(9);
//         const result = zipLists(list1, list2);
//         expect(result.head.value).toBe(1);
//         expect(result.head.next.value).toBe(5);
//         expect(result.head.next.next.value).toBe(3);
//         expect(result.head.next.next.next.value).toBe(9);
//         expect(result.head.next.next.next.next.value).toBe(2);
//         expect(result.head.next.next.next.next.next.value).toBe(6);
//         expect(result.head.next.next.next.next.next.next).toBeNull();
//     });

//     // Test case 5: Second input list is longer than the first one
//     test('Second input list is longer than the first one', () => {
//         const list1 = new LinkedList();
//         list1.append(1);
//         list1.append(3);
//         const list2 = new LinkedList();
//         list2.append(5);
//         list2.append(9);
//         list2.append(4);
//         list2.append(7);
//         const result = zipLists(list1, list2);
//         expect(result.head.value).toBe(1);
//         expect(result.head.next.value).toBe(5);
//         expect(result.head.next.next.value).toBe(3);
//         expect(result.head.next.next.next.value).toBe(9);
//         expect(result.head.next.next.next.next.value).toBe(4);
//         expect(result.head.next.next.next.next.next.value).toBe(7);
//         expect(result.head.next.next.next.next.next.next).toBeNull();
//     });

//     describe('LinkedList functionality test', () => {
//       test('LinkedList works as expected', () => {
//           // Create a new instance of the LinkedList
//           const list = new LinkedList();

//           // Append values to the list
//           list.append(1);
//           list.append(2);
//           list.append(3);

//           // Assert the expected behavior
//           expect(list.toString()).toBe('1 -> 2 -> 3 -> null');
//       });
//   });
// });
