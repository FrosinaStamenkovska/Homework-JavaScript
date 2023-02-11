const randomJokeApi = "https://api.chucknorris.io/jokes/random";
const retrieveCategories = "https://api.chucknorris.io/jokes/categories";
const generateJoke = document.getElementById("generateJoke");
const printJoke = document.getElementById("printJoke");
const dropDownList = document.getElementById("dropDownList");
let chosenCategory = "";

let makeJokeRequest = async (url) => {
    try{
        let response = await fetch(url);
        let result = await response.json();
        console.log(result);
        return result;
    }
    catch(error){
        console.log(error)
    }
}

let displayCategories = async () =>{
    let result = await makeJokeRequest(retrieveCategories);
    result.forEach(category => {
        dropDownList.innerHTML += `
        <li><a class="dropdown-item" href="#">${category}</a></li>`
    });
}

displayCategories();


let displayJoke = async(api) =>{
    let joke = await makeJokeRequest(api);
    printJoke.innerHTML += ` ${joke.value}
    <img id= "chuckNorrisApproved" height="150px" src="https://i.pinimg.com/originals/13/f4/09/13f4093020fc96ba87eae8221d071af7.jpg">`;
    console.log(joke.value)
};

dropDownList.addEventListener("click", (event) =>{
    chosenCategory = event.target.innerText;
    console.log(chosenCategory)
});

generateJoke.addEventListener("click", () =>{
    printJoke.innerHTML = "";
    if (chosenCategory === ""){
        displayJoke(randomJokeApi); 
    } else {
        displayJoke(`https://api.chucknorris.io/jokes/random?category=${chosenCategory}`)
    }
    chosenCategory.innerHTML = "";
});

