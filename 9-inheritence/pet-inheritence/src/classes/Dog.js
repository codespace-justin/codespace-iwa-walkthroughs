// import Pet class
import { Pet } from "./Pet.js";

export class Dog extends Pet{

    _breed;

    constructor(name, colour, owner, age, breed) {

        this._breed = breed;
        // super keyword calls parent constructor
        super(name, colour, owner, age);        
    }

    bark() {
        console.log(`Woof!`);
    }

    run() {
        console.log(`${this._name} is running!`);
    }
}