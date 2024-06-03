# Code challenge 26

## Pseudocode

Insert(int[] sorted, int value)
  initialize i to 0
  WHILE value > sorted[i]
    set i to i + 1
  WHILE i < sorted.length
    set temp to sorted[i]
    set sorted[i] to value
    set value to temp
    set i to i + 1
  append value to sorted

InsertionSort(int[] input)
  LET sorted = New Empty Array
  sorted[0] = input[0]
  FOR i from 1 up to input.length
    Insert(sorted, input[i])
  return sorted

## Trace

Let's trace the algorithm step-by-step with the sample array [8, 4, 23, 42, 16, 15].

Initial Array: [8, 4, 23, 42, 16, 15]

Step 1: Start with the first element.

sorted = [8]
Step 2: Insert 4 into sorted.

value = 4
Find position: 4 < 8
Insert 4:
sorted = [4, 8]
Step 3: Insert 23 into sorted.

value = 23
Find position: 23 > 4, 23 > 8
Insert 23:
sorted = [4, 8, 23]
Step 4: Insert 42 into sorted.

value = 42
Find position: 42 > 4, 42 > 8, 42 > 23
Insert 42:
sorted = [4, 8, 23, 42]
Step 5: Insert 16 into sorted.

value = 16
Find position: 16 > 4, 16 > 8, 16 < 23
Insert 16:
sorted = [4, 8, 16, 23, 42]
Step 6: Insert 15 into sorted.

value = 15
Find position: 15 > 4, 15 > 8, 15 < 16
Insert 15:
sorted = [4, 8, 15, 16, 23, 42]
Final Sorted Array
[4, 8, 15, 16, 23, 42]


## Testing

Reverse-sorted: [20, 18, 12, 8, 5, -2]
console.log(insertionSort([20, 18, 12, 8, 5, -2]));

Few uniques: [5, 12, 7, 5, 5, 7]
console.log(insertionSort([5, 12, 7, 5, 5, 7]));

## Efficiency

Time Complexity: O(n^2)

- The basic operation of this algorithm is comparison. This will happen n * (n-1) number of times, concluding the algorithm to be n squared.

Space Complexity: O(n)

- An additional array is created to hold the sorted values. This space complexity can be reduced to O(1) by sorting in place.
