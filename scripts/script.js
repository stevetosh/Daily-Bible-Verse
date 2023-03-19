//
var currentDate = document.getElementById("date");
// date=new Date();
// // console.log(date);

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
currentDate.innerHTML = day + "/" + month + "/" + year;
// currentDate.innerHTML = day + "/" + month + "/" + year;

console.log(currentDate);

// Set the API endpoint URL
const API_URL = "https://bible-api.com/random";

// Get the HTML elements where the verse text and reference will be displayed
const verseText = document.getElementById("verse-text");
const verseRef = document.getElementById("verse-ref");

// Function to fetch a new verse from the API and update the page
function updateVerse() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      // Update the HTML elements with the new verse text and reference
      verseText.innerText = data.text;
      verseRef.innerText = data.reference;
    })
    .catch((error) => console.error(error));
}

// Call the updateVerse function initially to show the first verse
updateVerse();

// Call the updateVerse function every 24 hours to automatically update the verse
setInterval(updateVerse, 24 * 60 * 60 * 1000);

// Add an event listener to the "Next Verse" button to update the verse on click
const nextVerseBtn = document.getElementById("next-verse-btn");
nextVerseBtn.addEventListener("click", updateVerse);
