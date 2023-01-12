let arrayOfTvShows = ["game of thrones", "house of the dragon", "breaking bad", "the big bang theory", "how i met your mother", "two and a half men", "sex and the city", "the blacklist", "vikings", "the last kingdom", "friends", "wednesday", "suits" ]
let letters = document.getElementsByClassName("letters");
let hintBtn = document.getElementById("hintBtn");
let playAgainBtn = document.getElementById("playAgainBtn");
let displayAnswer = document.getElementById("displayAnswer");
let displayLivesLeft = document.getElementById("displayLivesLeft");
let displayClue = document.getElementById("displayClue");
let displayFinishGame = document.getElementById("displayFinishGame");

let totalLives = 6;
let livesLeft = 6;
let underscores = [];
let maxHint = 2;
let tvShow = "";
let wordsOfTvShow = [];

function newGame(){
    // random choosing a tv show from the array of tv shows
    tvShow = arrayOfTvShows[Math.floor(Math.random() * arrayOfTvShows.length)];
    // splitting the chosen tv show into letters and makeing an array of strings, where every letter and empty space is a new string
    wordsOfTvShow = tvShow.split("");

    for (let i = 0; i < wordsOfTvShow.length; i++) {
        if(wordsOfTvShow[i] == " "){ // if there is an empty space in the tv show, display the empty space
            let blank = '\xa0'; // a code for empty space
            underscores.push(blank);
        } else { // if there are letters display underscores for each letter
            underscores.push("_");
        }
    }

    for (const iterator of letters) {
        iterator.disabled = false;
    }
    // display the underscores on the screen
    displayAnswer.innerHTML = underscores.join(" ");
}

newGame(); // calling the function

for (let i = 0; i < letters.length; i++) {
    //adding event listener to all letters
    letters[i].addEventListener("click", function(event){
        let guess = event.target.innerText;
        if(wordsOfTvShow.includes(guess)){ // checking if the tv show contains the clicked letter
            for (let index = 0; index < wordsOfTvShow.length; index++) {
                if(wordsOfTvShow[index] === guess) {
                      underscores[index] = guess;  // replacing the underscore with the letter
                      // filter all the underscores
                      let underscoresLeft = underscores.filter(underscore => underscore === "_");
                    if(underscoresLeft.length == 0){ // if there is no more underscores, the game is finished
                        displayFinishGame.innerText = "CONGRATULATIONS! YOU WON!";
                        finishGameColor(displayFinishGame);
                        // the letter-buttons are disabled until the user clicks play again
                        for (let iterator of letters) {
                            iterator.disabled = true;
                        }
                    }
                }
            }
            displayAnswer.textContent = underscores.join(" "); // printing the replaced underscores with letters
            displayClue.innerText = "";
        } else{
            totalLives--; // decreasing the amount of lives
            livesLeft = totalLives;
            displayLivesLeft.textContent = `You have ${livesLeft} lives left!`; // printing the amount of lives left

            if(livesLeft == 0){ // if there is no more lives the game is over and the buttons are disabled until play again is clicked
                for (let iterator of letters) {
                    iterator.disabled = true;
                }
                displayLivesLeft.textContent = `You have no more remaining lives!`;
                displayFinishGame.innerText = `GAME OVER!`
                finishGameColor(displayFinishGame);
            }
        }
    })
}

hintBtn.addEventListener("click", function(){
    maxHint--; // decreasing the amount of hints
    if(maxHint >= 0){
        // filter the letters to be displayed as hints, instead of empty spaces, and choosing a random letter
        let onlyLetters = wordsOfTvShow.filter(hintLetter => hintLetter !== " ");
        let hint = onlyLetters[Math.floor(Math.random() * onlyLetters.length)];
        displayClue.textContent = `Clue: ${hint}`;
    } else{ // if there are no more hints available, display a message and disable the hint button
        displayClue.textContent = `Sorry, no more clues are available!`;
        hintBtn.disabled = true;
    }
})

// reseting all the displayed messages and starting a new game after clicking the new game button
playAgainBtn.addEventListener("click", function(){
    displayAnswer.innerHTML = "";
    displayLivesLeft.innerHTML = "";
    displayClue.innerHTML = "";
    displayFinishGame.innerHTML = "";
    underscores = [];
    maxHint = 2;
    totalLives = 6;
    newGame();
})

function finishGameColor(content){
    if(content.innerText == "CONGRATULATIONS! YOU WON!"){
        content.style.color = "green";
    } else{
        content.style.color = "red";
    }
}



