// import Pet
import { Pet } from "./Pet.js";

// Frog extends from Pet class
export class Frog extends Pet {

    _species;

    constructor(name, colour, owner, age, species) {

        this._species = species;
        // super keyword calls parent constructor
        super(name, colour, owner, age);
    }

    croak() {
        console.log("CROAAK!")
    }

    jump() {
        console.log(`${this._name} is busy jumping`)
    }
}