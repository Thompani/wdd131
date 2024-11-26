// const input = document.querySelector('#favchap');
// const button = document.querySelector('button');
// const list = document.queryselector('_________');


// const li = document.createElement('li');

// const deleteButton = createElement('button');

// li.textContent = input.value;

// deleteButton.textContent = 'X';

// li.append(deleteButton);
// list.append(li);

// button.addEventListener('click', function(){

    

//     if (input.value.trim() !== '') { 
//          alert("Chapter name cannot be blank.");
//         input.focus()
//         return; 
//      }
//      console.log("Chapter added: " + input);

// });

// deleteButton.addEventListener('click', function () {
//     list.removeChild(li);
//     input.focus();
//   });

//   input.value = '';
//   input.focus();


// Declare references to the input, button, and list elements
var chapterInput = document.getElementById("chapterInput");
var addChapterBtn = document.getElementById("addChapterBtn");
var chapterList = document.getElementById("chapterList");

// Function to add a new chapter to the list
function addChapter() {
    // Get the chapter title from the input
    var chapterTitle = chapterInput.value.trim();

    // Check if the input is blank
    if (chapterTitle === "") {
        alert("Chapter name cannot be blank.");
        chapterInput.focus(); // Focus back on the input field
        return; // Exit the function if input is blank
    }

    // Create a new li element for the chapter
    var li = document.createElement("li");

    // Create a text node with the chapter title and append it to the li
    var textNode = document.createTextNode(chapterTitle);
    li.appendChild(textNode);

    // Create the delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "❌"; 
    deleteButton.className = "delete-btn"; // Add a class to style the button

    // Add an event listener to the delete button to remove the chapter when clicked
    deleteButton.addEventListener("click", function() {
        chapterList.removeChild(li); // Remove the li element (chapter) from the list
    });

    // Append the delete button to the li element
    li.appendChild(deleteButton);

    // Append the li to the chapter list
    chapterList.appendChild(li);

    // Clear the input field after adding the chapter (optional)
    chapterInput.value = "";
}

// Add event listener to the "Add Chapter" button
addChapterBtn.addEventListener("click", addChapter);

// Allow pressing 'Enter' to add the chapter as well
chapterInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addChapter();
    }
});