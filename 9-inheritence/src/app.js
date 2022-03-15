
// import class using Node Modules - import/export syntax
import { Language } from "./classes/Language.js";

// constructor(id, name, uses, description)

// Instantiate Language Object:
const lang1 = new Language(
    1, 
    "Java", 
    ["Enterprise Software Development", "Banking Applications", "Web Services"], 
    "Java is a general purpose,  object-oriented programming language created by James Gosling in 1995"
);

// Test if object was instantiated correctly
console.log(lang1)

console.log('\n')


// test getters
console.log('Getters:')
console.log(lang1.getId)
console.log(lang1.getName)
console.log(lang1.getUses)
console.log(lang1.getDescription)

console.log('\n')

console.log('Setters:')
console.log(lang1.changeId = 1 )
console.log(lang1.changeName = "Python" )
console.log(lang1.changeUses = ["Machine Learning", "Data Science", "Data Analysis"])
console.log(lang1.changeDescription = "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation")


// test methods

// console test
console.log('\n')

lang1.displayUsesConsole();

// DOM test
const element = document.getElementById("example")
lang1.displayUsesDOM(element);


