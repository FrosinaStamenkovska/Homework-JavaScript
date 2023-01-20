console.log("*** Exercise 1 ***");

let firstDiv = document.getElementById("firstDiv");

let requestedInfo = new XMLHttpRequest();

requestedInfo.onload = function(){
    console.log(requestedInfo);

    if(requestedInfo.status >= 200 && requestedInfo.status < 300){
        console.log(requestedInfo.responseText);

        let parsedResponse = JSON.parse(requestedInfo.responseText);
        console.log(parsedResponse);

        console.log(parsedResponse.results[0]);

        firstDiv.innerHTML +=
        ` <ul>
            <h3>The first Character is: </h3>
            <li>Character Name: ${parsedResponse.results[0].name}</li>
            <li>Character Height: ${parsedResponse.results[0].height}</li>
            <li>Character BirthYear: ${parsedResponse.results[0].birth_year}</li>
         </ul>
        `
    }
}

requestedInfo.open("GET", "https://swapi.dev/api/people");
requestedInfo.send();


console.log("*** Exercise 2 ***");

let secondDiv = document.getElementById("secondDiv");
let secondRequest = new XMLHttpRequest();

secondRequest.onload = function(){
    console.log(secondRequest);
    if(secondRequest.status >= 200 && secondRequest.status < 300){
        console.log(secondRequest.responseText);

        let parsedResponseTwo = JSON.parse(secondRequest.responseText);
        console.log(parsedResponseTwo);

        secondDiv.innerHTML += `<h3>Planets:</h3>`

        for (let planet of parsedResponseTwo.results) {
            secondDiv.innerHTML += `${planet.name} <br/>`
        }
    }
}
secondRequest.open("GET", "https://swapi.dev/api/planets");
secondRequest.send();


console.log("*** BONUS Exercise 3 ***");

let thirdDiv = document.getElementById("thirdDiv");
let printBtn = document.getElementById("printBtn");

printBtn.addEventListener("click", function(){
    let thirdRequest = new XMLHttpRequest();

    thirdRequest.onload = function(){
        console.log(thirdRequest);

        if(thirdRequest.status >= 200 && thirdRequest.status < 300){
            console.log(thirdRequest.responseText);
            let parsedResponseThree = JSON.parse(thirdRequest.responseText);
            console.log(parsedResponseThree);
            printCharacterInfo(parsedResponseThree, thirdDiv)
        }

    }
    thirdRequest.open("GET", "https://swapi.dev/api/people/11/");
    thirdRequest.send();
})

function printCharacterInfo (array, elementToPrintIn){
    let homeworld = new XMLHttpRequest();

    homeworld.onload = function(){
        let parsedHomeworld = JSON.parse(homeworld.responseText);
        console.log(parsedHomeworld);
        elementToPrintIn.innerHTML += 
    `
    Birth year: ${array.birth_year} <br/>
    Eye color: ${array.eye_color} <br/>
    Name: ${array.name} <br/>
    Homeworld: ${parsedHomeworld.name} 
    `
    }
    homeworld.open("GET", "https://swapi.dev/api/planets/1/");
    homeworld.send();
}
