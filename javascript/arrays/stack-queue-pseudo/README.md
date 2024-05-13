# Code Challenge 11

Implement a Queue using two Stacks.

## Whiteboard Process
[Whiteboard](./CC11.png)

## Approach & Efficiency

- For the enqueue operation, simply push elements onto the enqueueStack.
- For the dequeue operation, if the dequeueStack is empty, transfer all elements from enqueueStack to dequeueStack. Then pop from dequeueStack.
- Space Complexity: O(n) - We are using two stacks, so the space required is proportional to the number of elements in the queue.

