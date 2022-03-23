/* --------Storage Key---------- */

const STORAGE_KEY = "iwa-json-walk-key";


/* --------------------------
    Variables Setup
-------------------------- */

// create references to elements:
const servicesList = document.getElementById("services-grid");

// List of services:

let fillerText =  " Lorem ipsum dolor sit amet consectetur adipisicing elit. "
                + " Fuga totam molestias obcaecati atque, laudantium quaerat, "
                + "perspiciatis ad quasi rem perferendis vitae aliquid culpa "
                + "accusantium doloribus? Consectetur suscipit nesciunt harum deleniti."


let services = [

    {
        title: "Business Storage",
        preview: null,
        description: fillerText // replace this with actual description
    },
    {
        title: "Warehouse Space",
        preview: null,
        description: fillerText // replace this with actual description
    },
    {
        title: "Private Office Space",
        preview: null,
        description: fillerText // replace this with actual description
    },
    {
        title: "Personal Storage",
        preview: null,
        description: fillerText // replace this with actual description
    },
    {
        title: "Flex Warehouse Space",
        preview: null,
        description: fillerText // replace this with actual description
    }
]


/* --------------------------
    Functions
-------------------------- */

const populateServices = () => {

    services.forEach(object => {
    
        servicesList.innerHTML+= `
        <li>
            <article class="service-component">
                <h2>
                    ${object.title}
                </h2>
                <div class="service-preview">

                </div>
                <p>
                    ${object.description}
                </p>
                <button>See More</button>
            </article>
        </li>
        `
    });

}


/* --------------------------
    Event Listeners:
-------------------------- */

document.addEventListener('DOMContentLoaded', () => {

    populateServices();

    // get JSON String from localStorage
    let activeUser = localStorage.getItem(STORAGE_KEY);
    
    // convert the user from JSON to JavaScript
    activeUser = JSON.parse(activeUser)

    // get reference to element to display
    let usernameElement = document.getElementById("name-place");

    // Display username property of js object
    usernameElement.innerHTML += activeUser.username;
})