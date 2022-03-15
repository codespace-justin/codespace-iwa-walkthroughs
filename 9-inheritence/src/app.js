
// import class using Node Modules - import/export syntax
import { Framework } from "./classes/Framework.js";
import { Language } from "./classes/Language.js";


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


/* ----------------- Property Testing ----------------- */

// --- Language --- //

// test getters
console.log('\nLanguage Getters:')
console.log(lang1.getId)
console.log(lang1.getName)
console.log(lang1.getUses)
console.log(lang1.getDescription)

console.log('\n')

// test setters
console.log('Language Setters:')
console.log(lang1.changeId = 1 )
console.log(lang1.changeName = "Python" )
console.log(lang1.changeUses = ["Machine Learning", "Data Science", "Data Analysis"])
console.log(lang1.changeDescription = "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation")


// --- Framework --- //

// test getters
console.log('\nFramework Getters:')
console.log(frame1.getId)
console.log(frame1.getName)
console.log(frame1.getUses)
console.log(frame1.getDescription)
console.log(frame1.getSet)
console.log(frame1.getStack)

// test setters
console.log('\nFramework Setters:')
console.log(frame1.changeId = 101 )
console.log(frame1.changeName = "Vue.js" )
console.log(frame1.changeUses = ["Web Development", "Bulding Frontends", "Bulding Single-Page Applications"])
console.log(frame1.changeDescription = `Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.`)
console.log(frame1.changeSet = "JavaScript")
console.log(frame1.changeStack = "Frontend")



/* ------------------ Method Testing ------------------ */

// --- Language --- //

// test methods

const element = document.getElementById("example")

// console test
console.log('\n')
lang1.displayUsesConsole();

// DOM test
lang1.displayUsesDOM(element);


// --- Framework --- //

// console test
console.log('\n')
frame1.displayUsesConsole();

// DOM test
frame1.displayUsesDOM(element);


