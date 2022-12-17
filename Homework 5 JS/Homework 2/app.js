let arrayWithNumbers = [1, 5, 8, 25, 10, 33];
let unorderedList = document.getElementById("unorderedList");

unorderedList.innerHTML +=`<h2> A list of numbers: <h2>`

function sumNumbersFromArray(array){
    for (i=0; i < array.length; i++){
        unorderedList.innerHTML += `<li> ${array[i]} </li>`
    }
    let sum = 0;
    for (i=0; i < array.length; i++){
        sum += array[i];
    }
    // Bonus
    return `${array[0]} + ${array[1]} + ${array[2]} + ${array[3]} + ${array[4]} + ${array[5]} = ${sum} ` 
}


let sumOfNumbers = sumNumbersFromArray(arrayWithNumbers);
document.write(sumOfNumbers)

