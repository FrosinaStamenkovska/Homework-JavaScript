console.log('CONNECTED');

let yearOfBirth = prompt("What is your year of birth?");

// The user's inputed year is a STRING and it's converted to a number with parseFloat
// The formula for calculating Chinese Zodiac is: (year - 4) % 12
let chineseZodiac = (parseFloat(yearOfBirth) - 4) % 12;

console.log(chineseZodiac);

if(parseFloat(yearOfBirth) > 2022 && chineseZodiac === 0){
    alert('You are not born yet, but Your Chinese Zodiac will be Rat!');
} else if(parseFloat(yearOfBirth) > 2022 && chineseZodiac === 1){
    alert('You are not born yet, but Your Chinese Zodiac will be Ox!');
} else if(parseFloat(yearOfBirth) > 2022 && chineseZodiac === 2){
    alert('You are not born yet, but Your Chinese Zodiac will be Tiger!');
} else if(parseFloat(yearOfBirth) > 2022 && chineseZodiac === 3){
    alert('You are not born yet, but Your Chinese Zodiac will be Rabbit!');
} else if(parseFloat(yearOfBirth) > 2022 && chineseZodiac === 4){
    alert('You are not born yet, but Your Chinese Zodiac will be Dragon!');
} else if(parseFloat(yearOfBirth) > 2022 && chineseZodiac === 5){
    alert('You are not born yet, but Your Chinese Zodiac will be Snake!');
} else if(parseFloat(yearOfBirth) > 2022 && chineseZodiac === 6){
    alert('You are not born yet, but Your Chinese Zodiac will be Horse!');
} else if(parseFloat(yearOfBirth) > 2022 && chineseZodiac === 7){
    alert('You are not born yet, but Your Chinese Zodiac will be Goat!');
} else if(parseFloat(yearOfBirth) > 2022 && chineseZodiac === 8){
    alert('You are not born yet, but Your Chinese Zodiac will be Monkey!');
} else if(parseFloat(yearOfBirth) > 2022 && chineseZodiac === 9){
    alert('You are not born yet, but Your Chinese Zodiac will be Rooster!');
} else if(parseFloat(yearOfBirth) > 2022 && chineseZodiac === 10){
    alert('You are not born yet, but Your Chinese Zodiac will be Dog!');
} else if(parseFloat(yearOfBirth) > 2022 && chineseZodiac === 11){
    alert('You are not born yet, but Your Chinese Zodiac will be Pig!');
} else if(chineseZodiac === 0){
    alert('Your Chinese Zodiac is Rat');
} else if(chineseZodiac === 1){
    alert('Your Chinese Zodiac is Ox');
} else if(chineseZodiac === 2){
    alert('Your Chinese Zodiac is Tiger');
} else if(chineseZodiac === 3){
    alert('Your Chinese Zodiac is Rabbit');
} else if(chineseZodiac === 4){
    alert('Your Chinese Zodiac is Dragon');
} else if(chineseZodiac === 5){
    alert('Your Chinese Zodiac is Snake');
} else if(chineseZodiac === 6){
    alert('Your Chinese Zodiac is Horse');
} else if(chineseZodiac === 7){
    alert('Your Chinese Zodiac is Goat');
} else if(chineseZodiac === 8){
    alert('Your Chinese Zodiac is Monkey');
} else if(chineseZodiac === 9){
    alert('Your Chinese Zodiac is Rooster');
} else if(chineseZodiac === 10){
    alert('Your Chinese Zodiac is Dog');
} else if(chineseZodiac === 11){
    alert('Your Chinese Zodiac is Pig');
} else{
    alert('You entered an invalid year!');
}