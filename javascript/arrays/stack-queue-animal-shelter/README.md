# Code Challenge 12

First-in, First out Animal Shelter.

## Whiteboard Process

[Whiteboard](./CC12.png)

## Approach & Efficiency

AnimalShelter Class:

Use two separate arrays to maintain queues for dogs and cats.
Implement an enqueue method to add animals to the respective queues.
Implement a dequeue method to remove animals from the respective queues based on the given preference.

Enqueue Method:

Check the species of the animal.
If the species is "dog", add the animal to the dogs queue.
If the species is "cat", add the animal to the cats queue.
Throw an error if the species is neither "dog" nor "cat".

Dequeue Method:

Check the preference.
If the preference is "dog", remove and return the first dog from the dogs queue.
If the preference is "cat", remove and return the first cat from the cats queue.
If the preference is neither "dog" nor "cat", return null.
