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

let day = ``;

switch (new Date().getDay()) {
    case 0:
        day = `Sunday`;
        break;
    case 1:
        day = `Monday`;
        break;
    case 2:
        day = `Tuesday`;
        break;
    case 3:
        day = `Wednesday`;
        break;
    case 4:
        day = `Thursday`;
        break;
    case 5:
        day = `Friday`;
        break;
    case 6:
        day = `Saturday`;
}

// use lastModified property of document
// default format is mm/dd/yyyy hh:mm:ss
lastMod.innerText = `${day} ${document.lastModified}`;


// responsive hamburger effect on nav menu.

// hamburger button only show in mobile (small) view.
// clicking hamburger button toggles nav menu items from viewable to not viewable.
// use a symbol, like "X", to close hamburger menu.

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('show');
});


// function to make li elements (to put in the ul element in each not-index page)


const listsNeed = {
    companies: [`Recursion`, `Illumina`, `Agilent Technologies`, `Verge Genomics`, `Insilico Medicine`],
    software: [`BLAST (Basic Local Alignment Search Tool)`, `MAFFT (Multiple Alignment using Fast Fourier Transform)`, `AutoDock`, `GROMACS`, `BioPython`, `BioPerl`, `PyMol`, `R`]
}

// populate companies ul with li elements
let ulCompanies = document.querySelector(".list-companies");

// function to create li element
const createAddLiElement = function (ulAddTo, infoString) {
    let liCompany = document.createElement("li");
    liCompany.innerText = infoString;
    ulAddTo.appendChild(liCompany);
}

listsNeed.companies.forEach(company => createAddLiElement(ulCompanies, company));
// I think it is  .forEach(variableOfCurrentElementInArray => userMadeFunction(userArg1, userArg2= variableOfCurrentElementInArray))

// // populate software ul with li elements
// let ulSoftware = document.querySelector(".list-software");
// // let ulSoftware = document.getElementsByClassName("list-software");

// // TODO: this foreach not working 4-13-25 10 pm, but the above one for companies does!!
// listsNeed.software.forEach(oneSoftware => createAddLiElement(ulSoftware, oneSoftware));


let ulSoft = document.querySelector(".list-software");
listsNeed.software.forEach(function(oneSoftware) {
    let liSoft = document.createElement("li");
    liSoft.innerText = oneSoftware;
    ulSoft.appendChild(liSoft);
});


// test saving to and retrieving from localStorage with simple case.
// Save a number to localStorage
let numberToSave = 42;
localStorage.setItem(`myNumber`, numberToSave);
let stringToSave = `hello`;
localStorage.setItem(`myString`, stringToSave);

// Retrieve the number from localStorage
let retrievedNumber = localStorage.getItem(`myNumber`);
retrievedNumber = Number(retrievedNumber); // Convert the string back to a number.
console.log(retrievedNumber);
let retrievedString = localStorage.getItem(`myString`);
console.log(retrievedString);

// save textarea value (question) to localStorage

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the default form submission

    // get textarea value
    let textareaValue = document.getElementById("questions").value;

    localStorage.setItem(`textareaEntry`, textareaValue);

    // alert user questions have been sent
    alert(`Your questions have been sent!`);
})