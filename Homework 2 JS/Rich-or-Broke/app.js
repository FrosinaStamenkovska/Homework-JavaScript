console.log("CONNECTED");

// Way #1
let fridayCash = 50;

if (fridayCash >= 50){
    console.log('You should go out on a dinner and a movie.');
} else if (fridayCash >= 35 && fridayCash < 50){
    console.log('You should go out on a fine meal.');
} else if (fridayCash >= 12 && fridayCash < 35){
    console.log('You should go see a movie.');
} else{
    console.log("Looks like you'll be watching TV.");
}

// Way #2 with PROMPT
let fridayCashPrompt = prompt('How much money do you have?');

if (parseFloat(fridayCashPrompt) >= 50){
    alert('You should go out on a dinner and a movie.');
} else if (parseFloat(fridayCashPrompt) >= 35 && parseFloat(fridayCashPrompt) < 50){
    alert('You should go out on a fine meal.');
} else if (parseFloat(fridayCashPrompt) >= 12 && parseFloat(fridayCashPrompt) < 35){
    alert('You should go see a movie.');
} else{
    alert("Looks like you'll be watching TV.");
}