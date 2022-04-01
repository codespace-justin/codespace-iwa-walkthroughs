/* -----------------------------------------------------------
    Create Class - create business logic
----------------------------------------------------------- */

class Robot {

/* ---------- Properties ---------- */

    //private Instance Variabels - properties - data
    _name;
    _functionality;
    functionData = ["Can you create and sort an array for me?", "I need help solving a Math equation", "Whats todays date?"];

    // Constructor Function
    constructor( nameInput) {

        // initial setting values of instance variables
        this._name = nameInput;
        this._functionality = this.functionData;   
    }

/* ---------- Methods ---------- */


    // --- Getter --- //
    get getName() {
        return this._name;
    }

    get getFunctionality() {
        return this._functionality;
    }

    // --- Setter --- //
    set setName(nameInput) {
        
        this._name = nameInput;
    }


    // --- Custom Methods --- //

    // Welcome messgae when robot starts
    greet() {
        alert(`Hi there I'm ${this.getName}, a programming robot. What problem can I help you with today?`);
    }
    

    // Get input from user
    askUserFunctionality() {

        // init empty String
        let question = "";

        // add functions into String
        this.getFunctionality.forEach( (robofunction, index) => {
            question += `\n${index + 1}) - ${robofunction}`
        });

        // ask question String
        let choice = prompt(`What I can do: ${question}`);
        choice = parseInt(choice); 

        return choice;
    }

    // takes and number of args
    createAndSort(lengthInput) {

        // how many times loop will run
        let length = lengthInput;

        // variable to store array
        let answer = [];

        for (let i = 0; i < length; i++) {
            
            let input = prompt("Add something to the array!", "Add");
            
            answer.push(input);
        }

        // validate logic
        //console.log(answer)

        answer = answer.sort()
       console.log(answer)
    }

};


/* -----------------------------------------------------------
    APP - Instanciate Object
----------------------------------------------------------- */

// create Robot Object
const sonny = new Robot("Sonny");

sonny.greet();

sonny.createAndSort(3);

