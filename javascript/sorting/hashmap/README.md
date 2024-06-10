# Challenge Title

Find the first repeated word in a book.

## Whiteboard Process
<!-- Embedded whiteboard image -->

## Approach & Efficiency
Approach:
Tokenization: The function starts by tokenizing the input string into individual words. It uses a regular expression (\b\w+\b) to match word boundaries and extract words.

Set to Track Repeated Words: As it iterates over the words, it maintains a set (wordSet) to keep track of words encountered so far.

Checking for Repeated Words: For each word encountered, it checks if the word is already present in the set. If it is, it means the word has been encountered before, and it returns that word as the first repeated word found in the input string.

Efficiency: The function utilizes a set data structure to achieve constant time (O(1)) lookup for checking if a word has been encountered before. This allows the function to efficiently identify repeated words while traversing the input string once.
