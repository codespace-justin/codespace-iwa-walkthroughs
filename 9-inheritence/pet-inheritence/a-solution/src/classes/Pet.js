export class Pet {

    _name;
    _colour;
    _owner;
    _age;


    constructor (name, colour, owner, age) {

        this._name = name;
        this._colour = colour;
        this._owner = owner;
        this._age = age;
    }

    // GETTERS & SETTERS

    //name
    get getname() {
        return this._name;
    }
    set setname(value) {
        this._name = value;
    }

    //colour
    get getColour() {
        return this._colour;
    }
    set setColour(value) {
        this._colour = value;
    }

    // owner
    get getowner() {
        return this._owner;
    }
    set setowner(value) {
        this._owner = value;
    }

    //age
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }

    // USER METHODS

    // methods takes 2 pet instances as arguments, returns whichever is older
    static determineOlder(Pet1, Pet2) {

        if (Pet1._age > Pet2._age) {
            console.log(`${Pet1._name} is older than ${Pet2._name}`);
        }
        else if (Pet1._age < Pet2._age) {
            console.log(`${Pet2._name} is older than ${Pet1._name}`);
        } else {
            console.log(`${Pet2._name} and ${Pet1._name} are the same age!`);
        }

    }

}