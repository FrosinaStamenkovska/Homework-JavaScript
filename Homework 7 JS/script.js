// Exercise 4 - Car object
console.log("--- Exercise 4 ---");

let car = {
    model: "Opel",
    color: "Silver",
    year: 2008,
    fuel: 45,
    fuelConsumption: 7,

    fuelCalculator: function(distance){
        let averageDistance = 100;
        let result = (distance / averageDistance) * this.fuelConsumption
        return `The car is ${this.model} and you will need ${result} liters of fuel to pass ${distance} km.`
    }
}

console.log(car.fuelCalculator(200));
console.log(car.fuelCalculator(500));

// Exercise 5 - student registry form
console.log("--- Exercise 5 ---");

let inputs = document.getElementsByClassName("inputs");
let saveBtn = document.getElementById("saveBtn");
let printStudents = document.getElementById("printStudents")
let arrayOfStudents = [];

function createStudentObject(input){
    let studentObject = {}
    studentObject.firstName = input[0].value,
    studentObject.lastName = input[1].value,
    studentObject.age = input[2].value
    return studentObject
}

saveBtn.addEventListener("click", function(){
    let studentObject = createStudentObject(inputs);
    if(studentObject.firstName == "" || studentObject.lastName == "" || studentObject.age == ""){
        return alert("You need to enter all the information!")
    }
    arrayOfStudents.push(studentObject);
    console.log(arrayOfStudents);

    printStudents.innerHTML = ""

    for(let student of arrayOfStudents){
        printStudents.innerHTML += `<li> Fullname: ${student.firstName} ${student.lastName} Age: ${student.age} </li>` 
    }
    
    for(i=0; i < inputs.length; i++){
        inputs[i].value = "";
    }
})


// HOMEWORK PART 1 - OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD

console.log("---  HOMEWORK PART 1  ---");

function Animal(nameOfAnimal, kindOfAnimal){
    this.name = nameOfAnimal;
    this.kind = kindOfAnimal;

    this.speak = function(saySomething){
        return `The ${this.kind} ${this.name} says: ${saySomething}!`
    }
}

// Bonus: enter the values from prompt or from HTML inputs
let animalKind = prompt("What kind of animal do you have?");
let animalName = prompt("What's your animal's name?");
let animalSpeak = prompt("If you were your animal, what would you say?")

let animalOne = new Animal(animalName, animalKind,)
console.log(animalOne);
console.log(animalOne.speak(animalSpeak));


// HOMEWORK PART 2
console.log("---  HOMEWORK PART 2  ---");

function Book(title, author, readingStatus){
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;

    this.bookInfo = function(){
        if(readingStatus === true){
            return `Already read "${this.title}" by ${this.author}.`
        }
        else{
            return `You still need to read "${this.title}" by ${this.author}.`
        }
    }
}

let firstBook = new Book("The Notebook", "Nicholas Sparks", false);
console.log(firstBook.bookInfo())
let secondBook = new Book ("The Alchemist", "Paulo Coelho", true);
console.log(secondBook.bookInfo())

// Bonus

let bookInputs = $(".bookInputs");
let addBookBtn = $("#addBookBtn");
let printBooks = $("#printBooks");
let inputTitle = bookInputs.eq(0);
let inputAuthor = bookInputs.eq(1);

let allBooks = [];

addBookBtn.click(function(event){
    event.preventDefault();
    let checkedRadioButton = $(":radio:checked");

    let isFormValid = validateForm(inputTitle.val(),inputAuthor.val(), checkedRadioButton.length);

    if(isFormValid){
        let book = new Book(inputTitle.val(), inputAuthor.val(), checkedRadioButton.val());
        let isBookAlreadyAdded = false;
            for (let iterator of allBooks) {
                if(iterator.title == book.title){
                    isBookAlreadyAdded = true;
                    inputTitle.val("");
                    inputAuthor.val("");
                    $(":radio:checked").prop("checked",false);
                    alert("You cannot add the same book twice.");
                    return;
                } 
            }
         if(!isBookAlreadyAdded) {
            allBooks.push(book);
            displayBooks(allBooks);
         }   
        inputTitle.val("");
        inputAuthor.val("");
        $(":radio:checked").prop("checked",false);
    }
})

function validateForm(inputTitle, inputAuthor, readingStatusRadio){
    if(inputTitle === "" || inputAuthor === "" || readingStatusRadio === 0){
        alert("Please don't leave empty field!");
        return;
    }
    return true;
}

function displayBooks(arrayOfBooks){
    printBooks.html("")
    for(let i = 0; i < arrayOfBooks.length; i++){
        printBooks.append(
        `<div>Title: ${arrayOfBooks[i].title}</div>
        <div>Author: ${arrayOfBooks[i].author}</div>
        <div>Reading status: ${arrayOfBooks[i].readingStatus}</div>
        <br/>`
        )
    }
}
