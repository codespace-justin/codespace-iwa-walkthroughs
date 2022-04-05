/*
 * Author: Justin Jenecke
 * Module: Flow and Control 
 * Chapter: If Statements 
 * App: Nebank ATM APP
 */

console.log("\t\tNedbank ATM APP:"); 
console.log("-------------------------------\n")

// get Inputs for ATM app

let balance = 150;
let bank = prompt("Which bank do you belong to?");

// Check to ensure customer is a nedbank client

/*

    Nested if-else logic here

    * check if user is nedbank customer

    * check if user has enough funds

    * default case

*/


/* --------------------------- 
   Display Functions
----------------------------- */

// success message
function withdrawFunds() {
    
    console.log("Your withdrawal was successfull");
    console.log("You current bank account balance is " + balance)
    console.log("Ejecting card..");
   
}

// funds error
function insufficientFundsError() {

    console.log("Your withdrawal was unsuccessful.. Insufficient funds.");
    console.log("Ejecting card..");

}

// bank charges funds error
function notEnoughLeftError() {

    console.log("Your withdrawal was unsuccessful.. There has to be at least R20 left in your account");
    console.log("Ejecting card..");

}

// unexpected error
function defaultError() {

    console.log("System error.. aborting transaction")
    console.log("Ejecting card..");
}

