// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  let favoriteFood1 = document.createElement("li");
  favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  let favoriteFood2 = document.createElement("li");
  favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  let favoriteFood3 = document.createElement("li");
  favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  let favoriteFood4 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[3];
 
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  document.querySelector("#favorite-foods").appendChild(favoriteFood3);
  document.querySelector("#favorite-foods").appendChild(favoriteFood4);

  
    // .forEach()
    // const foodsElement = document.querySelector('#favorite-foods');
    // function createandAppendFoodItem(food) {
    //   let favoriteFood = document.createElement('li');
    //   favoriteFood.textContent = food;
    //   foodsElement.appendChild(favoriteFood);
    // }
    // myInfo.favoriteFoods.forEach(createandAppendFoodItem);
  
    // .map() but doesn't really work!!
    // const foodsElementmap = document.querySelector('#favorite-foods');
    // function mapFoodItem(food) {
    //   let favoriteFoodmap = document.createElement('li');
    //   favoriteFoodmap.textContent = food;
    //   return favoriteFoodmap;
    // }
  
    // const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
    // // we need to flatten the array of strings into one big string. .join does this.
    // foodsElement.innerHTML = foodListElements.join('');

    // map simplified, BUT THIS ONE WORKS!
    document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
        .map((food) => `<li>${food}</li>`)
        .join("");





// Check Understanding Activity

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// Write a for loop that will iterate through the studentReport array 
// and print to the console the current array value if it is below 30.

for (let i=0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
}

// while loop

let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

// forEach loop

studentReport.forEach(function(item) {
    if (item < LIMIT) {
        console.log(item);
    }
});

// for...in loop

for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}