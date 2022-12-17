// Selecting all the paragraphs and headings in different ways
let headersOne = document.querySelectorAll("h1");
console.log(headersOne);

let allParagraphs = document.getElementsByClassName("paragraph");
console.log(allParagraphs);

let headerThree = document.getElementsByTagName("h3");
console.log(headerThree);


// Different kinds of changings to the required elements

// The text of the all h1 elements is completely changed
for (let i = 0; i < headersOne.length; i++) {
 
   headersOne[i].innerHTML = "I managed to change the text of the both h1 elements. ";
}

// The original text of all paragrapgs still exists, BUT there is another text added next to the previous one.
for (let i = 0; i < allParagraphs.length; i++){
    allParagraphs[i].innerText += " I AM ADDING A NEW TEXT TO THE BOTH PARAGRAPHS!"
}

// The color of the text of h3 element is changed
headerThree[0].style.color = "green";