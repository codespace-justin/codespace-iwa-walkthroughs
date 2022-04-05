// litres of fuel
let fuel = 36;

let startingFuel = fuel;

// km's
let distanceTravelled = 0;

// no of iterations
let counter = 0;


// convert from litres to ml
while (fuel > 0) {

    // Updating Variable
    distanceTravelled = distanceTravelled + 16
    //distanceTravelled += 13
    console.log(distanceTravelled);

    // exit statement
    fuel--;
    counter++;
}


// display in console
console.log("\nOn " + startingFuel + "L of fuel your car travelled " + distanceTravelled + " Kilometres");
console.log("loop ran " + counter)


// display in DOM
document.body.innerHTML += "\nOn " + startingFuel + "L of fuel your car travelled " + distanceTravelled + " Kilometres <br><br>";
document.body.innerHTML += "loop ran " + counter;
