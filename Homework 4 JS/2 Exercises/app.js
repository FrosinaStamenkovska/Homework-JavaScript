// Exercise #1
console.log("***Exercise #1***");

function findNumber(searchedNumber, array){
  occurrences = 0
  for(i = 0; i < array.length; i++){
    if(array[i] === searchedNumber){
      occurrences ++;
    }
  }
  return `There is ${occurrences} occurrences of number ${searchedNumber} in the array.`
}

// Calling the function with 3 different arrays
let arrayOfNumbersOne = [9, 5, 8, 15, 25, 10, 8, 1, 8, 6, 25,];
console.log(findNumber(8, arrayOfNumbersOne));

let arrayOfNumbersTwo = [1, 6, 1, 2, 9, 3, 3, 8];
console.log(findNumber(3, arrayOfNumbersTwo));

let arrayOfNumbersThree = [5, 10, 15, 20];
console.log(findNumber(5, arrayOfNumbersThree));

// Exercise #2
console.log("***Exercise #2***")

let oddOrEven = prompt (`For all even numbers to be displayed enter even,
or for all odd numbers enter odd.`)

// Way 1 - with SWITCH CASE

function findOddEvenNumber(array, type){
    result = []
    switch(type){
        case "even":
            for(i = 0; i < array.length; i++){
                if(array[i] % 2 == 0){
                result.push(array[i]);
                }
            } 
            return `Even numbers are: ${result}`;
        break;
        case "odd":
            for(i = 0; i < array.length; i++){
                if(array[i] % 2 !== 0){
                result.push(array[i]);
                }
            }       
            return `Odd numbers are: ${result}`
        break;
        default:
            alert ("Error! You need to enter odd or even!");
        break; 
    }
}

let arrayOfOddAndEvenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findOddEvenNumber(arrayOfOddAndEvenNumbers, oddOrEven));

// Way 2 - with IF Statement
// function findOddEvenNumber(array, type){
//     result = []
//     if(type === "even"){
//         for(i = 0; i < array.length; i++){
//             if(array[i] % 2 == 0){
//             result.push(array[i]);
//             }
//         }
//         return `Even numbers are: ${result}`
//     }
//     else if(type === "odd"){
//         for(i = 0; i < array.length; i++){
//             if(array[i] % 2 !== 0){
//             result.push(array[i]);
//             }
//         }
//         return `Odd numbers are: ${result}`
//     }
//     else
//     alert ("Error! You need to enter odd or even!");    
    
// }