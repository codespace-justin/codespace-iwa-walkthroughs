/* ------------------------------------------
 
 * Author  : Justin Jenecke
 * Module  : Object Orientated Programming
 * Chapter : Classes
 * App     : Car Sales App
 
 * Topics Covered :
      - ES6 Modules
      - Classes
      - Static Methods
      - POJO (plain old JavaScript class)
  
----------------------------------------- */

export class Car {

    // ----- Properties Section -----

    // declare properties
    _id;
    _name;
    _manufacturer;
    _colour;
    _drivetrain;
    _power;
    _price;


    // constructor - set initial values
    constructor(id, nameInput, manInput, colInput, driveInput, powerInput, priceInput) {
        this._id = id;
        this._name = nameInput;
        this._manufacturer = manInput;
        this._colour = colInput;
        this._drivetrain = driveInput;
        this._power = powerInput;
        this._price = priceInput;

    }

    // ----- Methods Section -----

    // getters and setters

    get getName() {
        return this._name;
    }
    set setName(value) {
        this._name = value;
    }

    get getManufacturer() {
        return this._manufacturer;
    }
    set setManufacturer(value) {
        this._manufacturer = value;
    }

    get getColour() {
        return this._colour;
    }
    set setColour(value) {
        this._colour = value;
    }

    get getDrivetrain() {
        return this._drivetrain;
    }
    set setDrivetrain(value) {
        this._drivetrain = value;
    }

    get getPower() {
        return this._power;
    }
    set setPower(value) {
        this._power = value;
    }

    get getPrice() {
        return this._price;
    }
    set setPrice(value) {
        this._price = value;
    }

    // user methods

    // takes in Car instance and adds % of markup
    static addSaleMarkup(carObject) {

        // markup is 22%
        let markup = carObject.getPrice / 100 * 22;

        let salePrice = carObject.getPrice + markup;

        return salePrice;
    }

    // toString method to display object as DOM element
    toString() {
        return `
            <li id="${id}">
                <span>${this._name}</span>
                <span>${this._manufacturer}</span>
                <span>${this._colour}</span>
                <span>${this._drivetrain}</span>
                <span>${this._power}</span>
                <span>${Car.addSaleMarkup(this)}</span>
            </li>
        `;
    }
}