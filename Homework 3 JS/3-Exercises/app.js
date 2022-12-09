// Exercise 1 - Age calculation
function calculateAge(birthYear, currentYear = new Date().getFullYear()){
    let result = currentYear - birthYear;
    return `You are ${result} years old` ;
}

let firstCalculation = calculateAge(1990);
console.log(firstCalculation);

let secondCalculation = calculateAge(2000);
console.log(secondCalculation);

let thirdCalculation = calculateAge(1968);
console.log(thirdCalculation);



//Exercise 2 - Dog-human age conversion

function humanToDogYears(humanYears){
    let result = humanYears * 7;
    return `${humanYears} human year/s is equivalent to ${result} dog year/s`;
}

function dogToHumanYears(dogYears){
    let result = dogYears / 7;
    return `${dogYears} dog year/s is equivalent to ${result} human year/s`;
}

let humanToDogYearsConversion = humanToDogYears(5);
console.log(humanToDogYearsConversion);

let dogToHumanYearsConversion = dogToHumanYears(70);
console.log(dogToHumanYearsConversion);



//Exercise 3 - 5 different types of parameters

function typeDetermination(type){
    let result = typeof type;
    console.log(" The type of the parameter is:", result);
    return result;
}

typeDetermination (false); // Boolean
typeDetermination ("Javascript"); // String
typeDetermination (8);  // Number
typeDetermination (); // Undefined
typeDetermination ({firstName:"Frosina", lastName:"Stamenkovska"}); // Object
