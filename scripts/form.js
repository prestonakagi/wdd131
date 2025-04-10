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


// to fill select element's drop down list options

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

// create option elements and append to class="select"

products.forEach(function(product) {
    let select = document.querySelector(".select");
    let option = document.createElement('option');
    option.value = product.id; // .value is the value attribute.
    option.text = product.name; // .text is what is seen.
    select.appendChild(option);
});


const form = document.getElementById("form");

form.addEventListener("submit", () => {

    // 1️⃣ Initialize display element variable
    const visitsDisplay = document.querySelector(".sent-reviews");
      
    // 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
    let numVisits = parseInt(localStorage.getItem("numVisits-ls")) || 0;
    // pageLoadCount = pageLoadCount ? parseInt(pageLoadCount) : 0;
      
    // 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
    if (numVisits !== 0) {
     visitsDisplay.textContent = numVisits;
    } else {
     visitsDisplay.textContent = `Hi! This is your first visit.`;
    }
    
    // 4️⃣ increment the number of visits by one.
    numVisits++;
    
    // 5️⃣ store the new visit total into localStorage, key=numVisits-ls
    localStorage.setItem("numVisits-ls", numVisits);
    
    // 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

    // window.location.href = "review.html";
  });
