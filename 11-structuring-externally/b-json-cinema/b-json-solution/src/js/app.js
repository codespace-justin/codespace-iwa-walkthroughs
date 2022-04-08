/* ---------------------------------------
    Setup:
--------------------------------------- */

import { Movie } from "../classes/Movie.js";

// Key for accessing localStorage
const CinemaAppKey = "cinema-app-storage-key";
// create empty list of movies
let movieList = [];


// Check if Movies are created
if (!localStorage.getItem(CinemaAppKey)) {

    // create items if they dont exist
    movieList = [
        new Movie(
            "a010",
            "Initial B",
            "The story focuses on the world of illegal South African bicycle racing, where all the action is concentrated in the mountain passes and rarely in cities or urban areas, and with the drifting racing style emphasized in particular.",
            "21/04/2022",
            11,
            90
        ),
        new Movie(
            "a011",
            "The Bake Knight Rises",
            "Sane, an imposing terrorist, attacks Rotham Bakery and disrupts its eight-year-long period of peace. This forces Cruise Mayne to come out of hiding and don the cape and cowl of Cakeman again.",
            "30/04/2022",
            18,
            120
        ),
        new Movie(
            "b010",
            "Rising up with the Smardashians",
            "High-profile Scientests of the University Reseach clas give an insight into their personal lives and reveal various secrets pertaining to their knowledge and experiments.",
            "30/04/2022",
            7,
            90
        ),
        new Movie(
            "b012",
            "The Winder Mingler",
            "A group of men who were the friend of a dating app based mingler join together in an attempt to find the person in real-life.",
            "25/04/2022",
            22,
            90
        )
    ];

    movieList = JSON.stringify(movieList)

    localStorage.setItem(CinemaAppKey, movieList)

    movieList = JSON.parse(localStorage.getItem(CinemaAppKey))

} else {

    // get items if they exist
    movieList = JSON.parse(localStorage.getItem(CinemaAppKey))
}

/* ---------------------------------------
    App:
--------------------------------------- */

/* ----- Functions ----- */

const populateMovies = (moviesArray) => {

    // get display element
    let movieDisplay = document.querySelector("#movie-display")

    moviesArray.forEach(movie => {

        movieDisplay.innerHTML += `
        <article class="movie-card" id="${movie._id}">
            <span>${movie._name}</span>
            <span>${movie._description}</span>
            <span>${movie._availDate}</span>
            <span>${movie._seatsAvail}</span>
            <span>${movie._duration}</span>
            <input class="inputs" type="number" name="" id="" placeholder="0">
            <button class="inputs">Book</button>
        </article>
        `
    });
}

const create = () => {

    // getting inputs
    let code = document.getElementById( "movieCode" ).value
    let name = document.getElementById( "movieName" ).value
    let description = document.getElementById( "movieDescription" ).value
    let date = document.getElementById( "movieDate" ).value
    let duration = document.getElementById( "movieDuration" ).value

    // class and object stuff
    let createdMovie = new Movie(code,name, description, date, 50, duration)
    movieList.push(createdMovie);
    console.log(createdMovie)

    // storage stuff
    movieList = JSON.stringify(movieList)
    localStorage.setItem(CinemaAppKey, movieList)
    movieList = JSON.parse(localStorage.getItem(CinemaAppKey))
}


/* ---------------------------------------
    Event-Driven:
--------------------------------------- */

// vars
let createMovieBtn = document.getElementById('createMovie')

// functions

populateMovies(movieList);

createMovieBtn.addEventListener("click", () => {

    create();
})


