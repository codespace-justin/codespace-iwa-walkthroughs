/*---------------------------
           Setup
---------------------------*/

// condtion/criteria
let loop = true;

// Menu String
const menu = "What is your favorite programming language? \n Select a Number:\n" +
    "1) JavaScript\n" +
    "2) PHP\n" +
    "3) Java\n" +
    "4) C#\n" +
    "5) Python\n" +
    "6) Exit";

// create empty String to store output snippets
let outputString = "";

let outputArea = document.getElementById("output");

/*---------------------------
    Example
---------------------------*/

do {

    // get user input
    let choice = prompt(menu)
    // convert choice into number
    choice = parseInt(choice)

    // choice as key for switch
    switch (choice) {

        // All cases replace innerHTML using assignment operator
        case 1:
            console.log('console.log("You really love JavaScript")')
            outputString += 'console.log("You really love JavaScript")<br><br>'
            // loop = false;
            break;

        case 2:
            console.log('echo "You really love PHP";')
            outputString += 'echo "You really love PHP";<br><br>'
            // loop = false;
            break;

        case 3:
            console.log('System.out.println("You really love Java");')
            outputString += 'System.out.println("You really love Java");<br><br>'
            // loop = false;
            break;

        case 4:
            console.log('Console.WriteLine("You really love C#");')
            outputString += 'Console.WriteLine("You really love C#");<br><br>'
            // loop = false;
            break;

        case 5:
            console.log("print('You really love Python')")
            outputString += "print('You really love Python')<br><br>"
            // loop = false;
            break;

        case 6:
            console.log("Exiting Program..")
            outputString += "Exiting Program.."
            loop = false;
            break;

        default:
            console.log("Error 400.. Please select a valid option")
            break
    }

} while (loop)

// print output String to DOM
outputArea.innerHTML += outputString;
