// import class as module
import { Pet } from "./classes/Pet.js";

// import sub-classes
import { Dog } from "./classes/Dog.js";
import { Frog } from "./classes/Frog.js";

// (name, colour, owner) 
let kermit = new Frog("Kermit", "Green", "Justin", 4, "American Toad");
let spot = new Dog("Spot", "White w/black spots", "Dalmation", 4,"Michael");

console.log(spot.getname)


Pet.determineOlder(kermit, spot)

