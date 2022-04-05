// import Pet
import { Pet } from "./Pet.js";

export class Frog extends Pet {

    _species;

    constructor(name, colour, owner, age, species) {

        super(name, colour, owner, age);
        this._species = species;
    }

    croak() {
        console.log("CROAAK!")
    }

    jump() {
        console.log(`${this._name} is busy jumping`)
    }
}