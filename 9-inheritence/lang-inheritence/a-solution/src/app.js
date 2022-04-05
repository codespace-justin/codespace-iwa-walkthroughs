
// import class using Node Modules - import/export syntax
import { Framework } from "./classes/Framework.js"; // import framework class
import { Language } from "./classes/Language.js"; // import language class


/* ---------- Instantiate Objects from classes: ---------- */

// constructor(id, name, uses, description)
const lang1 = new Language(
    1, 
    "Java", 
    ["Enterprise Software Development", "Banking Applications", "Web Services"],  
    "Java is a general purpose,  object-oriented programming language created by James Gosling in 1995"
);


const frame1 = new Framework(
    101, 
    "Laravel",
    ["Web Development"],
    "Laravel is a cross-platform, MVC PHP framework for building web applications.",
    "PHP",
    "Backend"
);


// Test if Lang object was instantiated correctly
console.log(lang1);
console.log('\n');


// Test if Frame object was instantiated correctly
console.log(frame1);
console.log('\n');




/* ------------------ Method Testing ------------------ */

// --- Language --- //

// test methods

const element = document.getElementById("example")

// DOM test
lang1.displayUsesDOM(element);


// --- Framework --- //


// DOM test
frame1.displayUsesDOM(element);

// Test if Lang object was instantiated correctly
console.log(lang1);
console.log('\n');


// Test if Frame object was instantiated correctly
console.log(frame1);
console.log('\n');


