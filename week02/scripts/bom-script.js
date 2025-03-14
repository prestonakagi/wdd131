const input = document.querySelector("#favchap");
const button = document.querySelector("button"); // Add chapter button
const list = document.querySelector("#list"); // selects ul element

const li = document.createElement("li");
const buttonDelete = document.createElement("button");


// Handling DOM Events

input.focus();

button.addEventListener('click', function() {
    // if input textbox not blank
    if (input.value.trim() !== "") {
        // This adds multiple li elements but code for delete button and .focus() below does not work.
        // const li = document.createElement("li");
        // const buttonDelete = document.createElement("button");

        // populate the li element variable's textContent 
        // (or innerHTML if need to include HTML tags too) with the input value.
        li.textContent = input.value;
        
        // populate button textContent with a red X
        buttonDelete.textContent = "❌";

        // append li element variable with the delete button
        li.append(buttonDelete);

        list.append(li); // TODO: NOT APPENDING MORE THAN 1 li element!

        input.value = "";
        input.focus();

    } else {
        // if input textbox is blank
        input.focus()
    }
})

buttonDelete.addEventListener('click', function() {
    list.removeChild(li);
    input.focus();
})


