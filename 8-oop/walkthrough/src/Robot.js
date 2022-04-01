/* -----------------------------------------
    Class - Setup
----------------------------------------- */ 
class Robot {

    /* Preoprties */

    //private Instance Variabels - properties - data
    _name;
    _functionality = [];

    // Constructor Function
    constructor( nameInput, functionsInput) {

        // initial setting values of instance variables
        this._name = nameInput;
        this._functionality = functionsInput;   
        this.greet();
    }


    /* Methods */

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


    /* Custom Methods */


    // greet on startup
    greet() {
        alert(`Hi there I am a programming robot and my name is ${this.getName}, how can I help you today?`);
    }

    // main logic
    whatICanDo() {

        let question = "";

        this.getFunctionality.forEach( (roboFunction, index) => {
            question += `\n${index + 1}) - ${roboFunction}`
        });

        let choice = prompt(`What functionality would you like me to perform: ${question}`) 
        choice = parseInt(choice)

        console.log(choice)
    }

    // array
    arrayFunction(length) {

        let output = [];

        for (let i = 0; i < length; i++) {
            
            let newItem = prompt("Add an item to the array:", "ADD");

            output.push(newItem);     
        }

        output = output.sort();

        return output;

    }

    // date
    dateFunction() {

        let todayDate = new Date();
        todayDate = todayDate.toUTCString();

        return todayDate;
    }

    //math
    mathFunction(expression) {

        let output = eval(expression);

        return output;
    }
}


/* -----------------------------------------
    App
----------------------------------------- */ 

let functionData = ["Can you create and sort an array for me?", "I need help solving a Math equation", "Whats todays date?"];

const sunny = new Robot("Sunny", functionData);


console.log( sunny.arrayFunction(3) )

console.log("" + sunny.dateFunction());

console.log( sunny.mathFunction("5*2-7*20*3/7") )