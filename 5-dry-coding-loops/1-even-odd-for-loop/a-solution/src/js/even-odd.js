// ----- Even or odd example -----

// create a list of numbers
let integerList = [545, 8784, 12, 7, 2, 44, 73, 66];

// use length of array to determine how many times loops will run
let noOfLoops = integerList.length;

for (let i = 0; i < noOfLoops; i++) {

    //console.log(integerList[i])

    if (integerList[i] % 2 == 0) {

        console.log("even\n");
        document.body.innerHTML += "<b> EVEN </b> <br>"

    } else {

        console.log("odd");
        document.body.innerHTML += "<i> ODD </i> <br>"
    }

}