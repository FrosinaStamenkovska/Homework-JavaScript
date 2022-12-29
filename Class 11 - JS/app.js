console.log("--- Exercise 1 ---")

let stringVariable = "Hello"
let numVariable = 5;
let booleanVar = false;
let undefinedVar
let objectVar = {firstName:"Frosina", lastName:"Stamenkovska"}
let arrayVar = [1,2,3,4,5];

console.log(stringVariable)
console.log(numVariable)
console.log(booleanVar)
console.log(undefinedVar)
console.log(objectVar)
console.log(arrayVar)

console.log("--- Exercise 2 ---")

console.log(typeof stringVariable)
console.log(typeof numVariable)
console.log(typeof booleanVar)
console.log(typeof undefinedVar)
console.log(typeof objectVar)

let firstPrompt = prompt("What is your name?")
let secondPrompt = parseFloat(prompt("How old are you?"))

console.log(typeof firstPrompt)
console.log(typeof secondPrompt)

console.log("--- Exercise 3 ---")

function exercise3(someNumber){
    if(someNumber > 13){
        let diference = someNumber - 13
        let result = diference * 2
        return `The result is: ${result}`
    }
    else{
        return `The number is smaller than 13`
    }
}

console.log(exercise3(25))
console.log(exercise3(10))

console.log("--- Exercise 4 ---")

function closerTo100(firstInt, secondInt){
    if(firstInt < 0 || secondInt < 0){
        return alert("The entered value is a negative number, please enter a positive number")
    }
    let firstNumber = 100 - firstInt;
    let secondNumber = 100 - secondInt;

    if (firstNumber > secondNumber){
        return `${secondInt} is closer to 100.`
    } else{
        return `${firstInt} is closer to 100.`
    }
}

console.log(closerTo100(70, 80));

console.log("--- Exercise 5 ---")
/*

*/

let salary = 1000;
let rent = 375;
let bills = 250;

function bobSMoney(salary, rent, bills){
    let moneyLeft = salary - rent - bills;
    let totalExpenses = rent + bills
    return (`Bob has ${moneyLeft} eur left for the rest of the month and the total amount of his expenses is: ${totalExpenses} eur.`)
}

console.log(bobSMoney(salary, rent, bills))

console.log("--- Exercise 6 ---")


let studentGrades = [10, 6, 8, 9, 6];

function passedOrFailed(array){
    let result = 0

    for(let i = 0; i < array.length; i++){
        result += array[i];
    }

    if((result / array.length) >= 8){
        return `You have passed!`
    } 
    else{
        return `You have not passed!`
    }
}

let secondStudent = [10, 10, 10, 10, 10]
console.log(passedOrFailed(studentGrades))
console.log(passedOrFailed(secondStudent))

console.log("--- Exercise 7 ---")

let arrayWithFalsy = [1, 2, 3, 4, 5, 6, "", undefined, false, NaN]

function removeFalsy(array){
    let trutyValues = [];
    for(let i = 0; i < array.length; i++){
        // if(!!array[i]){
        //     trutyValues.push(array[i])
        // }
        if (array[i] !== "" && array[i] !== false && array[i] !== undefined && array[i] && !Number.isNaN(array[i])){
            trutyValues.push(array[i])
          }
    }
    return trutyValues
}

console.log(removeFalsy(arrayWithFalsy))

console.log("--- Exercise 8 ---")

let inputs = document.getElementsByTagName("input")
let inputWho = inputs[0];
let inputWhat = inputs[1];
let inputWhen = inputs[2];
let storyBtn = document.getElementById("storyBtn");
let storyDiv = document.getElementById("storyDiv");

function storyTeller(who, what, when){
    if(who.value == "" || what.value == "" || when.value == ""){
        return alert(`You need to input all the values!`)
    }
    else{
        return `${who.value} is/was ${what.value} ${when.value}.`
    }
}

storyBtn.addEventListener("click", function(event){
    event.preventDefault();
    storyDiv.innerHTML += `<div> ${storyTeller(inputWho, inputWhat, inputWhen)} </div>`
    inputWho.value = ""
    inputWhat.value = ""
    inputWhen.value = ""
})





