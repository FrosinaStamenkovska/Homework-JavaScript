let inputWeight = parseFloat(prompt("Please enter your weight in kilograms"));

function weightInChickens(input){
let result = input * 2;
return result;
}
let paragraph = document.getElementById("paragraph")

let chickenWeight = weightInChickens(inputWeight);
console.log(chickenWeight);
if(isNaN(inputWeight)){
    alert `You entered an invalid number!`
} 
else{
paragraph.innerText = ` You weigh ${chickenWeight} chickens!`
}