// Filename: complexApplication.js

/*
This code is a complex and elaborate JavaScript application that simulates a virtual pet game.
It includes various features such as feeding, grooming, playing, and taking care of your virtual pet.
The code is structured using multiple classes and utilizes object-oriented programming principles.
*/

// Define the Pet class
class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.hunger = 50; // Initial hunger level
    this.cleanliness = 100; // Initial cleanliness level
    this.happiness = 100; // Initial happiness level
  }

  feed() {
    if (this.hunger >= 10) {
      this.hunger -= 10;
      console.log(`${this.name} is now full!`);
    } else {
      console.log(`${this.name} is not hungry right now.`);
    }
  }

  groom() {
    if (this.cleanliness < 100) {
      this.cleanliness += 10;
      console.log(`${this.name} is now clean and groomed.`);
    } else {
      console.log(`${this.name} doesn't need grooming right now.`);
    }
  }

  play() {
    if (this.happiness < 100) {
      this.happiness += 10;
      console.log(`${this.name} is having fun playing.`);
    } else {
      console.log(`${this.name} doesn't want to play right now.`);
    }
  }

  checkStatus() {
    console.log(`${this.name}'s hunger level: ${this.hunger}`);
    console.log(`${this.name}'s cleanliness level: ${this.cleanliness}`);
    console.log(`${this.name}'s happiness level: ${this.happiness}`);
  }
}

// Define the VirtualPet class
class VirtualPet {
  constructor() {
    this.pets = [];
  }

  addPet(name, type) {
    const pet = new Pet(name, type);
    this.pets.push(pet);
    console.log(`${name} (${type}) added to the virtual pet game.`);
  }

  feedAllPets() {
    this.pets.forEach((pet) => {
      pet.feed();
    });
  }

  groomAllPets() {
    this.pets.forEach((pet) => {
      pet.groom();
    });
  }

  playWithAllPets() {
    this.pets.forEach((pet) => {
      pet.play();
    });
  }

  showAllPetsStatus() {
    this.pets.forEach((pet) => {
      pet.checkStatus();
    });
  }
}

// Create a new VirtualPet game
const virtualPetGame = new VirtualPet();

// Add pets to the game
virtualPetGame.addPet("Fluffy", "Cat");
virtualPetGame.addPet("Buddy", "Dog");
virtualPetGame.addPet("Nibbles", "Rabbit");

// Interact with pets
virtualPetGame.feedAllPets();
virtualPetGame.groomAllPets();
virtualPetGame.playWithAllPets();

// Check pets' status
virtualPetGame.showAllPetsStatus();