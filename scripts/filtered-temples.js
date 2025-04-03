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


// for temple pictures/figures/cards

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    // Draper Utah  area = square feet
    {
        templeName: "Draper Utah",
        location: "Draper, Utah",
        dedicated: "2009, March, 20",
        area: 58300,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/draper-utah-temple/draper-utah-temple-38937-main.jpg"
      },
    // Tokyo Japan
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",// original or 1st dedication
        area: 53997,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
      },
    // Apia Samoa
    {
        templeName: "Apia Samoa",
        location: "Apia, Samoa",
        dedicated: "1983, August, 5",// original or 1st dedication
        area: 18691,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg"
      }
  ];

  let templeNames = [];
  temples.forEach(tempObj => {
    templeNames.push(tempObj.templeName);
  });

//   console.log(templeNames);

let locations = [];
temples.forEach(tempObj => {
  locations.push(tempObj.location);
});

let dedicatedDates = [];
temples.forEach(tempObj => {
    dedicatedDates.push(tempObj.dedicated);
});

let areas = [];
temples.forEach(tempObj => {
    areas.push(tempObj.area);
});

let imageUrls = [];
temples.forEach(tempObj => {
    imageUrls.push(tempObj.imageUrl);
});

const dedicatedYears = [2005, 1888, 2015, 2020, 1974, 1986, 1983, 2009, 1980, 1983];


// select the DOM element for card_ id
// const card1 = document.getElementById("card1");
// const card2 = document.getElementById("card2");
// const card3 = document.getElementById("card3");
// const card4 = document.getElementById("card4");
// const card5 = document.getElementById("card5");
// const card6 = document.getElementById("card6");
// const card7 = document.getElementById("card7");
// const card8 = document.getElementById("card8");
// const card9 = document.getElementById("card9");
// const card10 = document.getElementById("card10");
// let cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];

// value is string with all the tags and text, use template literals ` ` for multiple lines.
// for (let i = 0; i < cards.length; i++) {
//   cards[i].innerHTML = `
//   <div class="card">
//   <div class="container">
//   <h3><b>${templeNames[i]}</b></h3>
//   <p>
//   Location: ${locations[i]}<br>
//   Dedicated: ${dedicatedDates[i]}<br>
//   Size: ${areas[i]} sq ft
//   </p>
//   </div>
//   <img src="${imageUrls[i]}" alt="${templeNames[i]} Temple" loading="lazy">
//   </div>
//   `;
// }

// createFilteredTempleCards(dedicatedYears, value => value > 1);

// filtering helps select index(es) and filtering creates an array,
// then loop thru that array.

function getAllIndexes(array, arrowCondition) {
  const indexes = [];
  for (let i = 0; i < array.length; i++) {
    if (arrowCondition(array[i])) {
      indexes.push(i);
    }
  }
  return indexes;
}

console.log(dedicatedDates);
const testConditionedArray = getAllIndexes(dedicatedYears, value => value > 1);
console.log(testConditionedArray);
console.log(testConditionedArray[0]);


// test for adding just 1 card! and it shows the first temple for each tab.

// document.querySelector(".cards-grid").innerHTML = "";

// let cardsGrid = document.querySelector(".cards-grid");
// while (cardsGrid.firstChild) {
//   cardsGrid.removeChild(cardsGrid.firstChild);
// }
//  // make a new <div class="card">
//  let divCard = document.createElement('div');
//  divCard.className = "card";
//  // set innerHTML to temple info
//  divCard.innerHTML = `
//  <div class="container">
//  <h3><b>${templeNames[0]}</b></h3>
//  <p>
//  Location: ${locations[0]}<br>
//  Dedicated: ${dedicatedDates[0]}<br>
//  Size: ${areas[0]} sq ft
//  </p>
//  </div>
//  <img src="${imageUrls[0]}" alt="${templeNames[0]} Temple" loading="lazy">
//  `;
//  // append divCard to parent of cardsGrid
//  console.log(divCard);
//  cardsGrid.appendChild(divCard);


// could try following recommendation from Microsoft Teams:
// use querySelectorAll() to select all navigation buttons at once 
// and proceed with if else condition to address each buttons event. 
// Don't forget when you use querySelectorAll() to use a data-filter attribute 
// on the html button element in your case the <li data-filter="old"> the same for others.

// to change the string of a date to a Date obj, then get the full year so can use in condition
// new Date(temple.dedicated).getFullYear() < 1900

function createFilteredTempleCards(listToFilter, arrowCondition) {
  // document.querySelector(".cards-grid").innerHTML = ""; // dots are classes!! # are ids!!

  // let filteredArray = listToFilter.filter(arrowCondition);
  // let toUseIndexes = [];
  // let counter = 0;
  // for (let j = 0; j < listToFilter.length; j++) {
  //   if (filteredArray[counter] === listToFilter[j]) {
  //     toUseIndexes.push(j);
  //     counter += 1;
  //   }
  //   else {
  //     counter += 1;
  //   }
  // }

  let cardsGrid = document.querySelector(".cards-grid");

  while (cardsGrid.firstChild) {
      cardsGrid.removeChild(cardsGrid.firstChild);
    }

  let filteredArrayIndexes = getAllIndexes(listToFilter, arrowCondition);

  for (let i = 0; i < filteredArrayIndexes.length; i++) {
    // make a new <div class="card">
    let divCard = document.createElement('div');
    divCard.className = "card";
    // set innerHTML to temple info
    divCard.innerHTML = `
    <div class="container">
    <h3><b>${templeNames[i]}</b></h3>
    <p>
    Location: ${locations[i]}<br>
    Dedicated: ${dedicatedDates[i]}<br>
    Size: ${areas[i]} sq ft
    </p>
    </div>
    <img src="${imageUrls[i]}" alt="${templeNames[i]} Temple" loading="lazy">
    `;
    // append divCard to parent of cardsGrid
    console.log(divCard);
    cardsGrid.appendChild(divCard);
  }
};

// when page first loads
createFilteredTempleCards(dedicatedYears, value => value > 1);

// filtered example
// const filtered = employees.filter(e => e.sal >= 20000)
// console.log(filtered);

// DOM event click response effect on nav menu options.

const homeLink = document.getElementById('home');
homeLink.addEventListener('click', () => {
  createFilteredTempleCards(dedicatedYears, value => value > 1);
});

const oldLink = document.getElementById('old');
oldLink.addEventListener('click', () => {

})
// oldLink.addEventListener('click', () => {
//   createFilteredTempleCards(dedicatedYears, value => value < 1900);
// });

// const hamButton = document.querySelector('#menu');
// const navigation = document.querySelector('.navigation');

// hamButton.addEventListener('click', () => {
//     navigation.classList.toggle('show');
//     hamButton.classList.toggle('show');
// });