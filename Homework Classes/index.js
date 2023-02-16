class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }

    eat(input) {
        if (input instanceof Animal) {
            if (this.type === "herbivore") {
                console.log(`The animal ${this.name} is a herbivore and doesn't eat other animals.`)
            }
            else {
                if (input.size >= this.size * 2) {
                    console.log(`The animal ${this.name} tried to eat the ${input.name}, but it was too large.`)
                } else {
                    input.isEaten = true;
                    console.log(`The animal ${this.name} ate the ${input.name}.`)
                }
            }

        } else {
            console.log(`The animal ${this.name} is eating the ${input}.`)
        }
    }
}

let animalOne = new Animal("Lion", "carnivore", 5, 250,);
let animalTwo = new Animal("Elephant", "herbivore", 20, 4000);
let animalThree = new Animal("Sheep", "herbivore", 3, 70);
let animalFour = new Animal("Bear", "omnivore", 15, 350);
let food = "honey";

animalOne.eat(animalTwo);
console.log(`The ${animalThree.name} object has it's "isEaten" property set to: ${animalThree.isEaten} as a default`);
animalOne.eat(animalThree);
console.log(`The ${animalThree.name} object now has it's "isEaten" property set to: ${animalThree.isEaten}`);
animalTwo.eat(animalFour);
animalFour.eat(food);