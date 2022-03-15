export class Language {

/* --- State and Constructor --- */

    // --- Instance variables/properties ---
    _id;
    _name;
    _uses = [];
    _description;


    // --- Constructor Function ---
    constructor(id, name, uses, description) {

        this._id = id;
        this._name = name;
        this._uses = uses;
        this._description = description;
    }

    
/* --- Getters and Setters --- */

    // --- Getters ---
    get getId() {
        return this._id;
    }
  
    get getName() {
        return this._name;
    }
    
    get getUses() {
        return this._uses;
    }

    get getDescription() {
        return this._description;
    }

    // --- Setters ---
    set changeId(newId) {

        if ( typeof newId == "number") {
            return this._id = newId;
        }
    }

    set changeName(newName) {

        if ( typeof newName == "string") {
            return this._name = newName;
        }
    }

    set changeUses(newUses) {

        if ( typeof newUses == "object") {
            return this._uses = newUses;
        }
    }

    set changeDescription(newDescription) {

        if ( typeof newDescription == "string") {
            return this._description = newDescription;
        }
    }
    

/* --- Methods --- */

    // This method takes an HTML element as an argument and appends the
    // elements of the uses into that element as list items
    displayUsesDOM(domElement) {

        domElement.innerHTML += `<h2>Use Cases for ${this._name}:</h2>`

        this._uses.forEach(useCase => {
            
            domElement.innerHTML += `<li> ${useCase} </li>`;
        });
    }

    displayUsesConsole() {

        console.log("Use cases for " + this._name)

        this._uses.forEach(useCase => {

            console.log(` -${useCase}\n`);
        });
    }
}