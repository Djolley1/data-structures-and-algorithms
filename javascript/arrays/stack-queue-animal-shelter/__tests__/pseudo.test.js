'use strict';

const AnimalShelter = require('../index.js');

describe('AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test('should enqueue dogs and cats correctly', () => {
    shelter.enqueue({ species: 'dog', name: 'Rex' });
    shelter.enqueue({ species: 'cat', name: 'Whiskers' });

    expect(shelter.dogs.length).toBe(1);
    expect(shelter.cats.length).toBe(1);
    expect(shelter.dogs[0]).toEqual({ species: 'dog', name: 'Rex' });
    expect(shelter.cats[0]).toEqual({ species: 'cat', name: 'Whiskers' });
  });

  test('should dequeue dogs and cats correctly based on preference', () => {
    shelter.enqueue({ species: 'dog', name: 'Rex' });
    shelter.enqueue({ species: 'cat', name: 'Whiskers' });
    shelter.enqueue({ species: 'dog', name: 'Fido' });
    shelter.enqueue({ species: 'cat', name: 'Mittens' });

    const firstDog = shelter.dequeue('dog');
    const firstCat = shelter.dequeue('cat');
    const secondCat = shelter.dequeue('cat');
    const secondDog = shelter.dequeue('dog');

    expect(firstDog).toEqual({ species: 'dog', name: 'Rex' });
    expect(firstCat).toEqual({ species: 'cat', name: 'Whiskers' });
    expect(secondCat).toEqual({ species: 'cat', name: 'Mittens' });
    expect(secondDog).toEqual({ species: 'dog', name: 'Fido' });
  });

  test('should return null for unknown preferences', () => {
    shelter.enqueue({ species: 'dog', name: 'Rex' });
    shelter.enqueue({ species: 'cat', name: 'Whiskers' });

    const result = shelter.dequeue('bird');

    expect(result).toBeNull();
  });

  test('should return null if no animals of the preferred type are available', () => {
    shelter.enqueue({ species: 'dog', name: 'Rex' });

    const resultCat = shelter.dequeue('cat');
    const resultDog = shelter.dequeue('dog');

    expect(resultCat).toBeNull();
    expect(resultDog).toEqual({ species: 'dog', name: 'Rex' });
  });
});
