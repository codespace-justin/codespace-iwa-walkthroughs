/* ---------------------------
    Variables
----------------------------- */

let balance= 112;
let bank = "NedBank";

const consoleArea = document.querySelector("#console")

const keyboardBtns = document.querySelector("#keyboard-buttons");

const withBtn = document.querySelector("#withBtn");


// -----  withdraw display functionality -----

/*

let buttons = document.querySelectorAll(".button"); // returns a nodelist

 buttons.forEach(btn => {
    
     btn.addEventListener('click',  function (e) {
        
         console.log(e.target.innerText)
     }) 
 });
 
*/

keyboardBtns.addEventListener("click", (event) => {

    if (event.target.className === "button") {

        let numInput = event.target.innerText;

        // get display area
        const withdrawAmt = document.querySelector('#withdraw-value');

        withdrawAmt.innerText += numInput;
    }
});


/* ---------------------------
    Transaction Functionality
----------------------------- */

withBtn.addEventListener("click", (e) => {

    // get display area
    let withdrawAmt = document.querySelector('#withdraw-value');
    // get num inside element
    withdrawAmt = parseFloat(withdrawAmt.innerText).toFixed(2);

    console.log(withdrawAmt)

    // ATM logic
    if (balance > withdrawAmt && bank == "NedBank") {

        balance = balance - withdrawAmt;

        consoleArea.value = `
            You have successfully withdrawn ${withdrawAmt} 
            from your account \n
            You now have R${balance} left in your accoun`;
    
    } else if (bank != "NedBank") {
        
        consoleArea.value = "You must a client of NedBank to use this application. \nPlease insert a valid NedBank card.."
    
    } else if ( bank == "NedBank" && balance < withdrawAmt) {

        consoleArea.value = `
        Insuffecient funds, you cannot draw ${withdrawAmt}
        from your account..
        `
    } /*else {

        consoleArea.value = `Unkown error in transaction, please contact Administator`
    }*/

})