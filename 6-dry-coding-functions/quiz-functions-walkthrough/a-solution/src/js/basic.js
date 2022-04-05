// -------- Questins -----------

// list of questions for js quiz
let questions = [

    "JavaScript is strongly typed language",
    "JavaScript is object orientated ",
    "Java is the same as JavaScript",
    "JavaScript is used for client-side programming",
    "Is HTML a programming language"
];

// correct answers for js quiz
let correctAnswers = [1, 1, 1, 2, 1];

// array to store user input
let userAnswers = [];

// Mark variables
let jsMarks = 0;
let phpMarks = 3;
let htmlMarks = 5;

// button to start app
let startQuiz = document.getElementById('start-quiz');


// ----- functions -----

// Displays one of the marks variables in the DOM
const displayInDOM = (integer) => {

    let answerElem = document.getElementById("answers");

    answerElem.innerText += "You scored " + integer + "/5 for the quiz"
}

// loops through questions
const askQuestions = () => {

    // Ask Questions
    for (let i = 0; i < questions.length; i++) {

        // ask question each time the loop runs
        let answerInput = parseInt(prompt(questions[i] + "\n 1) FALSE \n 2) TRUE"));

        // save answer to userAnswers array
        userAnswers.push(answerInput)

    }

}

// adds to jsMarks
const calculateMarks = () => {

    // Add answers to marks
    for (let i = 0; i < correctAnswers.length; i++) {

        if (correctAnswers[i] === userAnswers[i]) {

            jsMarks++
        }
    }

}

// Chooses mark variable
const selectMarksToDisplay = () => {

    let choice = prompt("Which marks would you like to display?\n1 : JS \n2 : PHP\n3 : HTML")

    if (choice == 1) {
        
        return jsMarks

    } else if (choice == 2) {
        
        return phpMarks
    
    } else {

        return htmlMarks
    }

}

// -------- Start App ------------


startQuiz.onclick = () => {

    // ask questions
    askQuestions();

    // calculate
    calculateMarks();

    //let markChoice = selectMarksToDisplay()
    let markChoice = jsMarks;

    //display results in DOM
    displayInDOM(markChoice);

}