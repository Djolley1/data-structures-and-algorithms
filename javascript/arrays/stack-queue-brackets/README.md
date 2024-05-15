# Code Challenge 13

Multi-bracket Validation.

## Whiteboard Process

[Whiteboard](./CC13.png)

## Approach & Efficiency

To validate whether the brackets in a string are balanced, we can use a stack data structure. Here's a concise breakdown:

Use a Stack: Initialize an empty stack.
Matching Brackets Map: Create a map to associate each closing bracket with its corresponding opening bracket.
Iterate Through the String:
Push opening brackets onto the stack.
For closing brackets, check if the stack is empty or if the top of the stack is not the matching opening bracket, return false.
If it matches, pop the stack.
Final Check: After the loop, if the stack is empty, return true (all brackets are matched); otherwise, return false.
