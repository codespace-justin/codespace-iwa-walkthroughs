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
if (bank === "Nedbank" || bank === "nedbank" || bank === "NEDBANK") {

    // get amount user wants to withdraw
    let withdrawalAmt = parseInt(prompt("how much would you like to withdraw?"));

    // how much will be left in account
     let remainder = balance - withdrawalAmt;

     console.log("amount that would be left in account " + remainder)

    // check 2 conditions: enough funds, must leave r20 in their acc
    if (withdrawalAmt < balance && remainder >= 20)  {

        balance = balance - withdrawalAmt;

        withdrawFunds();
        

    // Condition returns true if user tries to withdraw more than what is avail in their account
    } else if (balance < withdrawalAmt) {

        insufficientFundsError();

    // condition returns true if there is less than 20 left in account after withdrawal
    } else if (remainder <= 20) {

        notEnoughLeftError();

    // default system error in case of unexpected error/input
    }  else {

       defaultError();
    }


// If user is not nedbank customer, logic never runs
} else {

    console.log("You must be a netbank client to use this machine");
    console.log("Ejecting card..");
}

// outside of If-Statement and end of app
console.log("\ncontinue with our day..")



/* --------------------------- 
   Display Functions
----------------------------- */

function withdrawFunds() {
    
    console.log("Your withdrawal was successfull");
    console.log("You current bank account balance is " + balance)
    console.log("Ejecting card..");
   
}


function insufficientFundsError() {

    console.log("Your withdrawal was unsuccessful.. Insufficient funds.");
    console.log("Ejecting card..");

}


function notEnoughLeftError() {

    console.log("Your withdrawal was unsuccessful.. There has to be at least R20 left in your account");
    console.log("Ejecting card..");

}


function defaultError() {

    console.log("System error.. aborting transaction")
    console.log("Ejecting card..");
}

