console.log("Hello guys, this is my first JS homework ;) ");

// First exercise: Calculate area of a circle

let pi = 3.14159;
let radius = 5;

let area = pi * (radius * radius);
console.log ("The result of the first exercise is:", area);


// Second exercise: Calculate the price of 30 phones

let phoneAmount = 30; //Total amount of phones
let phonePrice = 119.95; //Price per phone (without tax)
let taxPercentage = 5; //The tax is 5%

// 1st way of calculating 5% out of $119.95
// Not sure why the result is not correct
let taxRate = taxPercentage % phonePrice;
console.log ("Seems like the following result is not correct", taxRate);

// 2nd way of calculating 5% out of $119.95 (My approach)
let taxRate2 = (phonePrice * taxPercentage) / 100;
console.log ("The tax rate per phone is: $", taxRate2);

// The full price of one phone including the tax
let fullPrice = phonePrice + taxRate2; 
console.log ("The full price of one phone is: $", fullPrice);

// The total price of 30 phones = Number of phones * Full price per phone
let totalPriceOfPhones = phoneAmount * fullPrice;
console.log ("The total price of 30 phones is: $", totalPriceOfPhones);
