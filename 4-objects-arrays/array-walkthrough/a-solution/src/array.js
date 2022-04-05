/* ----------------------------------------------------
    Object vs Array Example
---------------------------------------------------- */

console.log("\nObject Example")

// create dog object
let dog1 = {

    name : "spot",
    breed : "german shepard",
    age : 2,
    forSale : true

};

// Check to ensure object is created as expected
// console.log(dog1)

console.log("\nArray Example")

// String Array
// 0 indexed
let pets = [ "dog", "cat", "hamster", "bird", "spider", "fish", "snake" ]; 

console.log(pets)


/* ----------------------------------------------------
    4 Basic Array Methos/Functions
---------------------------------------------------- */

// ---------- push() ----------
// adds to array
pets.push("lizard")
pets.push("snail")
console.log(pets)


// ---------- pop() ----------
// removes from array
pets.pop()
pets.pop()
pets.pop()
console.log(pets)


// ---------- splice() ----------
// custom modifications

/* 
 * index where you want to change something
 * how many elements you want to change
 * what you want to replace the changed elements with
 */

// add
pets.splice(0, 0, "**mouse**")
console.log(pets)


// delete
pets.splice(2, 1)
console.log(pets)


// update
pets.splice(3, 1, "**tortoise**")
console.log(pets)
