
/* --------Storage Key---------- */
const STORAGE_KEY = "iwa-json-walk-key";


/* --------Class---------- */
class User {

    constructor(id, usernameInput, passwordInput) {

        this.id = id;
        this.username = usernameInput;
        this.password = passwordInput;
    }

    // getters here
    get getUsername() {
        return this.username;
    }

    // setters here
    set setUsername(newName) {
        this.username = newName;
    }
}


/* --------------------------
    Variables Setup
-------------------------- */

// submit button
let login = document.getElementById("submit")

/* --------------------------
    Interactivity
-------------------------- */

login.addEventListener("click",  (e) => {

    // get data of input fields once user clicks 'login'
    let usernameInput = document.getElementById('username').value;
    let passwordInput = document.getElementById('password').value;

    let user1 = new User("#A001", usernameInput, passwordInput);


    // JSON.stringify(<<data>>) - converts JS to JSON

    // JSON.parse( <<JSON>> ) - converts to JavaScript

    // convert js object to json
    // since storage api only accepts strings as arguments
    user1 = JSON.stringify(user1);

    // save JSON string to localStorage
    localStorage.setItem(STORAGE_KEY, user1)

})

