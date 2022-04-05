// import Pet class
import { Pet } from "./Pet.js";

export class Dog extends Pet{

    _breed;

    constructor(name, colour, owner, age, breed) {

        super(name, colour, owner, age);
        this._breed = breed;
    }

    bark() {
        console.log(`Woof!`);
    }

    run() {
        console.log(`${this._name} is running!`);
    }
}