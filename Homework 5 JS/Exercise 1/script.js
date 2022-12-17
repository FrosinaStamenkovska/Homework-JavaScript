// Select the first div
let firstDiv = document.getElementById("first");
console.log(firstDiv);

// Select all paragraphs
let allParagraphs = document.getElementsByClassName("paragraph");
console.log(allParagraphs);

// Select the last div
let allDivs = document.getElementsByTagName("div");
let lastDiv = allDivs[2];
console.log(lastDiv);

// Select the header 3 in the last div
let headerThree = lastDiv.lastElementChild;
console.log(headerThree);

// Select the header 1 in the last div
let headerOne = lastDiv.firstElementChild;
console.log(headerOne);

// Get the text from the first paragraph in the second div
let firstParagSecondDiv = allParagraphs[1];
console.log(firstParagSecondDiv.innerText);

// Add the word "text" to the text element in the second div
let textElement = allDivs[1].lastElementChild;
textElement.innerText += " text "

// Change the text of the header 1 in the last div
headerOne.innerText = "This is a new changed text for h1"

// Change the text of the header 3 in the last div
headerThree.innerText = "The text for h3 is also changed"