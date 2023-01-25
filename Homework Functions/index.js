console.log("*** Exercise 1 ***");

// Anonymous function that returns how many digits the number has
let countDigits = function(num){
    let digits = 0;
    let stringifiedNumber = num.toString();
    for (let i = 0; i < stringifiedNumber.length; i++) {
        if(num < 0){
            digits = stringifiedNumber.length - 1; // subtracting the "-" in order not to be counted as a digit
        } else{
            digits = stringifiedNumber.length;
        } 
    }
    if(digits === 1){
        return `Number ${num} has ${digits} digit` // if it's 1 digit number, the word DIGIT is singular, 
    } else{
        return `Number ${num} has ${digits} digits` // otherwise is plural
    }
}

// Anonymous function that returns if the number is odd or even

let oddOrEven = function(num){
    if(num % 2 === 0){
        return `it's an even number`;
    } else {
        return `it's an odd number`;
    }
}

// Anonymous function that returns if the number is positive or negative

let positiveOrNegative = function(num){
    if(num > 0){
        return `it's a positive number`
    } else if(num < 0){
        return `it's a negative number`
    } else {
        return `it's neither positive, nor negative number`
    }
}

// Bonus: Function that calls all three functions above

let getNumberStatus = function(num){
    return `${countDigits(num)}, ${oddOrEven(num)} and ${positiveOrNegative(num)}.`
}

// Calling the function with 3 different numbers, to check all scenarios
console.log(getNumberStatus(350));
console.log(getNumberStatus(-3511));
console.log(getNumberStatus(0));



console.log("*** Exercise 2 ***");

let result = document.getElementById("result");
let wordInput = document.getElementById("wordInput");
let button = document.getElementById("button");

// An arrow function that counts the vowels of a word
let countVowels = (input) => {
    let numberOfVowels = 0;
    for (let letter of input) {
        if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
            numberOfVowels++; // increasing the number of vowels for each iteration where a vowel is found in the word
        }
    }
    if(numberOfVowels === 1){
        return `The word ${input} has ${numberOfVowels} vowel.`
    } else if(numberOfVowels === 0){
        return `The word ${input} has no vowels.`
    } else {
        return `The word ${input} has ${numberOfVowels} vowels.`
    }
}

// Bonus: An arrow function that prints the result from input
let printResult = (elementToPrintIn, input) => {
    elementToPrintIn.innerHTML = "";
    if(input === ""){
        alert("Please enter any word!"); // validation if the input is empty
    } else if(input.match(/^[A-Za-z]+$/)){
        elementToPrintIn.innerHTML += countVowels(input);
    } else{
        alert("You cannot use numbers, nor special characters!") // validation if there is a number or special character in the input
    }
}

// Event listener with arrow function
button.addEventListener("click", () => {
    printResult(result, wordInput.value);
    wordInput.value = "";
});

