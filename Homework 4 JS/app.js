// Homework #1
console.log("*** Homework #1 ***");

function tellStory(array){
return `${array[0]} is very devoted to her/his job and she/he is always ${array[1]} when she/he is ${array[2]}. `;
}

let arrayOfStrings = ["Aneta", "happy", "reviewing the homework"];
console.log(`The story for today is about ${arrayOfStrings[0]}. ${tellStory(arrayOfStrings)}`);

let arrayOfStringsTwo = ["George", "excited", "giving a lot of homework"];
console.log(`Let's not make ${arrayOfStringsTwo[0]} feel bad and tell a story about him as well.
${tellStory(arrayOfStringsTwo)}`);

// Homework #2
console.log("*** Homework #2 ***")

function sumOfNumbers(arrayOfNumbers){
    let i = 0;
    let sum = 0;
    
    while(i < arrayOfNumbers.length){
      sum += arrayOfNumbers[i];
      i++;
    }
    return `Sum of 5 numbers from an array is ${sum}`;
}

let arrayofNumbers = [1, 3, 5, 8, 9];
console.log(sumOfNumbers(arrayofNumbers));

let arrayOfNumbersTwo = [1, 2, 3, 4, '5'];
console.log(sumOfNumbers(arrayOfNumbersTwo));

// Bonus for Homework #2
console.log("*** Bonus Homework #2 ***")

function validateNumber(array){
  let i = 0;

  while(i < array.length){
    let result = typeof array[i];
    
    if (result == "number"){
    console.log (`${array[i]} is a ${result}`);
    } else{
      console.log(`Error, ${array[i]} is not a number, it's a ${typeof array[i]}!`);
    }
    i++;
  }
}

validateNumber(arrayOfNumbersTwo);

// Homework #3
console.log("*** Homework #3 ***")

function bigString(array){
  let i = 0;
  let sum = "";
  
  while(i < array.length){
    sum += array[i] + " "; 
    i++;
  }
  return sum;
}

let arrayOfWords = ["Hello", "Aneta.", "How", "are", "you", "today?"];
console.log(bigString(arrayOfWords));

// Homework #4
console.log("*** Homework #4 ***")

let i = 1;
while(i <= 20){
  if(i % 2 == 0){
    console.log(`${i} is even number and there is a new line after it. \n `);

  } else if(i % 2 !== 0){
    console.log(`${i} is odd number and there is only empty space after it. `)
  }
  i++
}

// Homework #5
console.log("*** Homework #5 ***")

function sumOfMaxAndMin(array){
  for(i = 0; i < array.length; i++){
    let minNumber = Math.min.apply(0, array);
    let maxNumber = Math.max.apply(0, array);
    let minAndMaxSum = minNumber + maxNumber;
    return `Min number: ${minNumber}, Max number: ${maxNumber}, Sum: ${minAndMaxSum}`;
  }
}
let minAndMaxArray = [10, 21, 8, 100, 25];
console.log(sumOfMaxAndMin(minAndMaxArray));

// Homework #6
console.log("*** Homework #6 ***")

firstName = ["Bob", "John", "Frosina"]
lastName = ["Bobski", "Doe", "Stamenkovska"]

function concatenateArrays(arrayFirst, arrayLast){
  let fullName = []
  for( i = 0; i < arrayFirst.length; i++){
    fullName.push((i + 1) + "." + " " + arrayFirst[i] + " " + arrayLast[i]);
  }
  return fullName;
}
let arrayOfFullNames = [concatenateArrays(firstName, lastName)];
console.log(arrayOfFullNames);






