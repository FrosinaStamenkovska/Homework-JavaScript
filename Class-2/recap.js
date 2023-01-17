console.log("*** Exercise 1 ***");

function searchIndex(item, arrayOfItems) {
    for (let i = 0; i < arrayOfItems.length; i++) {
        if (arrayOfItems[i] === item) {
            return `${item} is on index ${i}.`
        }
    }
    return -1
}

let someArray = ["Frosina", "Stamenkovska", 33];
console.log(searchIndex(33, someArray));
console.log(searchIndex(15, someArray));

console.log("*** Exercise 2 ***");

arrayOfNumbers = [5, 10, 15, 20, 25, 30, 35, 40, "50", false, true];

function oddAndEvenNumbers(array) {
    if (array.length === 0) {
        return false;
    }
    let newArrayOfNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === "number") {
            if (array[i] % 2 === 0) {
                array[i] -= 1;
                newArrayOfNumbers.push(array[i]);
            } else {
                array[i] += 1;
                newArrayOfNumbers.push(array[i]);
            }
        }
    }
    return newArrayOfNumbers;
}

console.log(oddAndEvenNumbers(arrayOfNumbers));

console.log("*** Exercise 3 ***");

let arrayOfStudents = [
    { studentName: "Bob", studentLastName: "Bobski", studentGrades: [10, 10, 10, 10, 7, 9, 6, 10, 6, 9] },
    { studentName: "John", studentLastName: "Doe", studentGrades: [6, 6, 6, 10, 6, 7, 7, 7, 7, 6] }
];

function calculateAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length

}

console.log(arrayOfStudents)

function studentsThatPassed(array) {
    let newStudentsArray = []
    for (let i = 0; i < array.length; i++) {
        if (calculateAverage(array[i].studentGrades) >= 8) {
            newStudentsArray.push(`${array[i].studentName} ${array[i].studentLastName}`);
        }
    }
    return newStudentsArray;
}

console.log(studentsThatPassed(arrayOfStudents));


console.log("*** Exercise 4 ***");

let movieInputs = document.getElementsByClassName("movieInputs");
let movieName = movieInputs[0];
let movieDirector = movieInputs[1];
let movieGenre = movieInputs[2];
let movieCoverImg = movieInputs[3];
let movieReleaseDate = movieInputs[4];

let addMovieBtn = document.getElementById("addMovieBtn");
let results = document.getElementById("results");

let editBtnValue;

function Movie(name, director, genre, coverImg, releaseDate) {
    this.movieName = name;
    this.movieDirector = director;
    this.movieGenre = genre;
    this.movieCoverImg = coverImg;
    this.movieReleaseDate = releaseDate;

}

let moviesDB = [];

addMovieBtn.addEventListener("click", function (event) {

    if(movieName.value == "" || movieDirector.value  == "" || movieGenre.value == "" || movieCoverImg.value == "" || movieReleaseDate.value == ""){
        alert("You need to fill all the inputs!");
        return;
    }

    let movie = new Movie(movieName.value, movieDirector.value, movieGenre.value, movieCoverImg.value, movieReleaseDate.value);

    if(addMovieBtn.innerText == "Add Movie") {
        for (let index = 0; index < moviesDB.length; index++) {
            if(movie.movieName == moviesDB[index].movieName 
                 || movie.movieCoverImg == moviesDB[index].movieCoverImg
                 || movie.movieDirector == moviesDB[index].movieDirector 
                 || movie.movieGenre == moviesDB[index].movieGenre 
                 || movie.movieReleaseDate == moviesDB[index].movieReleaseDate
                ){
                alert("You cannot add the same movie twice!");
                clearInputs();
                return;
            }
        }

        moviesDB.push(movie);
    } else {
        updateMovie();
    }
    
    printMovies(moviesDB, results);
    clearInputs();
})

function printMovies(movies, elementToPrintIn){
    elementToPrintIn.innerHTML = "";

    for(let i = 0; i < movies.length; i++){
        console.log(movies[i]) //element of current iteration, that is movie object
        elementToPrintIn.innerHTML +=
        `
        <div class="movieCard">
          <h3>${movies[i].movieName}</h3>
          <img width="300" height="350" src="${movies[i].movieCoverImg}" alt=${movies[i].movieName} />
          <ul>
                <li>By ${movies[i].movieDirector}</li>
                <li>Genre: ${movies[i].movieGenre}</li>
                <li>Release date: ${movies[i].movieReleaseDate}</li>
          </ul>
          <button value="${movies[i].movieName}" onclick="removeFromList(this, moviesDB)"> Remove Movie </button>
          <button value="${movies[i].movieName}" onclick="editMovie(this, moviesDB)"> Edit Movie </button>
      </div>
        `
    }
}

function updateMovie(){
    for (let index = 0; index < moviesDB.length; index++) {
        if(moviesDB[index].movieName == editBtnValue){
            moviesDB[index].movieName = movieName.value;
            moviesDB[index].movieDirector = movieDirector.value;
            moviesDB[index].movieGenre = movieGenre.value;
            moviesDB[index].movieCoverImg = movieCoverImg.value;
            moviesDB[index].movieReleaseDate = movieReleaseDate.value;

            editBtnValue = moviesDB[index].movieName;
        }
    }
    addMovieBtn.textContent = "Add Movie";
}

function editMovie(target, movies){
     editBtnValue = target.value;

    for (let i = 0; i < movies.length; i++) {
        if(movies[i].movieName == editBtnValue){
            movieName.value = movies[i].movieName;
            movieDirector.value = movies[i].movieDirector;
            movieGenre.value = movies[i].movieGenre;
            movieCoverImg.value = movies[i].movieCoverImg;
            movieReleaseDate.value = movies[i].movieReleaseDate;

            addMovieBtn.textContent = "Update";
        }
    }
}

function removeFromList(target,  movies){
    let movieName = target.value;
    let listOfRemaningMovies = [];
  
    for(let i = 0; i < movies.length; i++){
      if(movies[i].movieName !== movieName){
        listOfRemaningMovies.push(movies[i])
      }
    }
  
    moviesDB = listOfRemaningMovies;
    printMovies(moviesDB, results);
}

function clearInputs(){
    movieName.value = ""
    movieDirector.value = ""
    movieGenre.value = ""
    movieCoverImg.value = ""
    movieReleaseDate.value = ""
}