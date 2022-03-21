/* --------------------------
    Variables Setup
-------------------------- */

// Main Focus : localStorage
const STORAGE_KEY = "iwa-json-walk-key";

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

const createService = () => {

}