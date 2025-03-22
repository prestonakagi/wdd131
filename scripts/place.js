// footer year and datetime last modified

// select the DOM element for year output
const year = document.getElementById("currentyear");

// use the date object
const today = new Date();

const currentYear = today.getFullYear();

// change text displayed on rendered web page
year.innerText = currentYear


// select the DOM element for last modified output
const lastMod = document.getElementById("lastModified");

// use lastModified property of document
// default format is mm/dd/yyyy hh:mm:ss
lastMod.innerText = document.lastModified;


// display windchill factor in "Weather" section (as shown in the examples)
    // calculated and display when the page loads.

// Define variables with static (set) values for temps (Celsius) and wind speed (km/h) matching the values have in weather section content.
// write function named "calculateWindChill" that returns windchill factor when passed the necessary arguments (temp and wind chill).
    // function should use one line of code.
// Do not call the function unless following conditions met:
// temp <= 10 C and wind speed > 4.8 km/h
// if not met: display "N/A"

