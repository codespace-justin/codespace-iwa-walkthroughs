/* -----------------------------------------
    Class - Setup
----------------------------------------- */ 
class Robot {

    /* Preoprties */

    //private Instance Variabels - properties - data
    _name;
    _age;
    _type;
    _functionality = [];

    // Constructor Function
    constructor( nameInput, functionsInput, ageInput) {

        // initial setting values of instance variables
        this._name = nameInput;
        this._age = ageInput;
        this._type = "basic";
        this._functionality = functionsInput;   

        // Since methods are in constructor, they will be called
        // as soon as object is instantiated
        this.greet();

        this.whatICanDo();
    }


    /* Methods */

    // --- Getter --- //
    get getName() {
        return this._name;
    }
    
    get getFunctionality() {
        return this._functionality;
    }

    get getType() {
        return this._type;
    }

    get getAge() {
        return this._age;
    }

    // --- Setter --- //
    set setName(nameInput) {
        
        this._name = nameInput;
    }

    /* ----- Custom Methods ------ */

    // greet on startup
    greet() {
        alert(`Hi there I am a programming robot and my name is ${this.getName}, how can I help you today?`);
    }

    // Main logic
    // Brains of class - calls other methods;
    whatICanDo() {

        let question = "";

        // loops through this._functionality array:
        this.getFunctionality.forEach( (roboFunction, index) => {
            question += `\n${index + 1}) - ${roboFunction}`
        });

        // displays functionalities in String as question to user:
        let choice = prompt(`What functionality would you like me to perform: ${question}`) 
        // convert choice to so it can be used in Switch.
        choice = parseInt(choice)
        //console.log(choice)

        // Call function to determine which method to call based on user functionality
        // passes user's choice as argument
        this.determineFunction(choice)
    }

    myAgeFunction() {
        return "I am " + this._age + " year(s) old, thank you for asking!";
    }

    // -------- array method ---------
    arrayFunction(length) {

        // empty output array
        let output = [];

        // for loop ask input and add input to array n amount of times
        for (let i = 0; i < length; i++) {
            
            let newItem = prompt("Add an item to the array:", "ADD");

            output.push(newItem);     
        }

        alert("Sorting your Array quickly! ;)");
        alert("Here is your sorted array.")

        // sort output array
        output = output.sort();
        return output;

    }

    // -------- date method --------
    dateFunction() {

        //create date object
        let todayDate = new Date();
        todayDate = todayDate.toUTCString();

        return todayDate;
    }

    // --------- math method --------
    mathFunction(expression) {

        let output = eval(expression);

        return output;
    }

    // Function that takes userInput and calls users method of choice
    // Also responsible for displaying output
    determineFunction(userChoice) {

        switch (userChoice) {

            case 1:
                // get input for number of items to be added
                let numLoops = prompt("how many items would you like to add?");
                numLoops = parseInt(numLoops);

                // calling arrayFunction() method of class
                alert(this.arrayFunction(numLoops));
                break;
        
            case 2:
                // get user input for calcualtion
                let equation = prompt("What Math problem would you like me to solve?");

                // call mathFunction() method of class
                let answer = this.mathFunction(equation)

                
                alert(`The answer to ${equation} is equal to = ${answer}`);
                break;

            case 3:
                // calling dateFunction() method
                alert(this.dateFunction());
                break;

            case 4:
                // call myAgeFunction method of class
                alert(this.myAgeFunction());
            default:
                break;
        }

    }
}


/* -----------------------------------------
    App - What happens during runtime in response to events
----------------------------------------- */ 

// external data passed to object
let functionData = ["Can you create and sort an array for me?", "I need help solving a Math equation", "Whats todays date?", "I'm curious, how old are you?"];

// Instanciation of class - creation of object
const sunny = new Robot("Sunny", functionData, 1);


// After object is created test functions:
/*
console.log( sunny.arrayFunction(3) )

console.log("" + sunny.dateFunction());

console.log( sunny.mathFunction("5*2-7*20*3/7") )
*/