'use strict';

class AnimalShelter {
  constructor() {
    this.dogs = [];
    this.cats = [];
  }

  enqueue(animal) {
    if (animal.species === 'dog') {
      this.dogs.push(animal);
    } else if (animal.species === 'cat') {
      this.cats.push(animal);
    } else {
      throw new Error('Animal must be either a dog or a cat.');
    }
  }

  dequeue(pref) {
    if (pref === 'dog') {
      return this.dogs.length > 0 ? this.dogs.shift() : null;
    } else if (pref === 'cat') {
      return this.cats.length > 0 ? this.cats.shift() : null;
    } else {
      return null;
    }
  }
}


module.exports = AnimalShelter;
