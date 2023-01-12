let buttons = document.getElementsByClassName("btn");
let output = document.getElementById("output");
let clearBtn = document.getElementById("clear");
let backBtn = document.getElementById("back");
let errorMessage  = document.getElementById("errorMessage");

// Adding event listener to all buttons
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", calculatorOperations)
}

function calculatorOperations(event){
    errorMessage.innerText = ""; // clearing the error message after the new click
    let valueOfInnerText = event.target.innerText; // getting the innerText of the clicked button
    if(valueOfInnerText === "C"){ // if the clicked button is C, clear the output field
        output.innerText = "";
    } else if(valueOfInnerText === "←"){ // if the clicked button is ←, 
        if(output.innerText.length > 0){ // and if there is more than 0 characters in the output field
            output.innerText = output.innerText.slice(0,-1) // make a new array without the last character(remove the last character)
        }
    } else if(valueOfInnerText === "+" || valueOfInnerText === "-" || valueOfInnerText === "*" || valueOfInnerText === "/"){
        output.innerText += ` ${valueOfInnerText} `; // make empty space before and after: +,-,*,/
    } else if(valueOfInnerText === "="){ // if = is clicked call the function calculations
        output.innerText = calculations(output.innerText);
    } else if(valueOfInnerText === "."){ // if . is clicked add it to the previous output character
        output.innerText += valueOfInnerText;
    } else { 
        let character = output.innerText.slice(-1);
        // if the character is +,-,*, or /, put empty space before and after it,
        // else - don't put empty space before and after numbers and decimal
        if(character === "+" || character === "-" || character === "*" || character === "/"){
            output.innerText += ` ${valueOfInnerText} `;
        } else{
            output.innerText += `${valueOfInnerText}`;
        }
    }
}

function calculations(input){
    // split the string after every empty space and make an array of strings
    let arrayOfInputs = input.split(" ");
    // convert the first string on index 0, to number
    let result = parseFloat(arrayOfInputs[0]);
    if(Number.isNaN(result)){
    // show an error message if the first input is not a number
        errorMessage.innerText = "You need to enter a number first.";
        return "";
    } else{
        // since the calculation starts with a number, which is on index 0,
        //  therefor math operators should be on the odd indexes (1,3,5...)
        for (let index = 1; index < arrayOfInputs.length; index = index + 2) {
            let mathOperation = arrayOfInputs[index];
            // the numbers should be on the even indexes (2,4,6...)
            let newNumber = parseFloat(arrayOfInputs[index + 1]);
            if(arrayOfInputs[0].length > 15 || arrayOfInputs[index + 1].length > 15 ){
                //if the number is more than 15 characters show error message
                errorMessage.innerText = "The number is too large! Please enter a number with less than 10 characters."
                return "";
            } else {
                if(!Number.isNaN(newNumber)) {
                    if(mathOperation === "+"){ //add
                        result += newNumber;
                    } else if(mathOperation === "-"){ // substract
                        result -= newNumber;
                    } else if(mathOperation === "*"){ // multiply
                        result *= newNumber;
                    } else if(mathOperation === "/"){
                         // if the number is not 0, make division, else show error message
                        if(newNumber != 0 && result != 0) {
                            result /= newNumber;
                        } else {
                            errorMessage.innerText = `You cannot divide with zero!`;
                            return "";
                        }
                    }
                 return result;
                }
                // if you click math operator more than once in a row show error message
                errorMessage.innerText = "You need to have a number after every math operation.";
                return "";
               
            }
        }  
    }
}