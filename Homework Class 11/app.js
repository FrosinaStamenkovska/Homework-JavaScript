console.log("--- Exercise 4 ---")

function closerTo100(firstInt, secondInt){
    if(firstInt < 0 || secondInt < 0){
        return "The entered value is a negative number, please enter a positive number"
    }

    if(firstInt === secondInt){
        return `We are comparing the same number.`
    }
    let firstResult = firstInt - 100;
    let secondResult = secondInt - 100;

    if(firstResult < 0){
       firstResult = firstResult * (-1);
    }
    if (secondResult < 0){
       secondResult = secondResult * (-1);
    }

    if(firstResult < secondResult){
        return `${firstInt} is closer to 100 than ${secondInt}.`
    } else if (firstResult == secondResult){
        return ` ${firstInt} and ${secondInt} are equally close to 100.`
    } else {
        return `${secondInt} is closer to 100 than ${firstInt}`
    }
}

// Different combinations of numbers for checking all IF-statements
console.log(closerTo100(70, 80));
console.log(closerTo100(110, 70));
console.log(closerTo100(70, 130));
console.log(closerTo100(-50, 50));
console.log(closerTo100(70, 70));

console.log("--- Exercise 9 ---")
/*
EXERCISE 9
Write a JavaScript programm called PhoneBook. 
You should have three input fields in the html, one for firstName, lastName and phoneNumber.
After entering the values into each of them, on clicking on a “Save” button, 
you should display the newly added contact in a table below the inputs. 
Make sure the user is entering an appropriate values in the fields!

Bonus: Add column with delete and edit button so that you can edit or delete a contact! 
Try to save the newly added contact as an object (literal or construcotr function its up to you) and add it to an array! 
*/
let inputs = document.getElementsByTagName("input")
let inputFirstName = inputs[0];
let inputLastName = inputs[1];
let inputPhoneNumber = inputs[2];
let saveContactBtn = document.getElementById("saveContactBtn");
let tableBody = document.getElementById("tableBody");
let phoneBook = [];
let index;

function Contact (firstName, lastName, phoneNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

function validateContact (firstName, lastName, phoneNumber){
    let convertPhoneNumber = parseFloat(phoneNumber);

    if(firstName === "" || lastName === "" || phoneNumber === ""){
        alert (`You need to fill all the contact information!`)
        return;
    }
    let allLetters = /^[A-Za-z]+$/;

    if(!firstName.match(allLetters) || !lastName.match(allLetters)){
        alert (`You need to enter only letters in the fields for First Name and Last Name!`)
        return;
    }

    if(Number.isNaN(convertPhoneNumber)){
        alert(`You need to enter a number in the field for Phone Number!`)
        return;
    }
    return true;
}

function displayContacts(phoneBookArray){
    tableBody.innerHTML = "";
    for( let i = 0; i < phoneBookArray.length; i++){
        let tr = document.createElement("tr");
        tableBody.appendChild(tr);
        tr.innerHTML += `
            <td>${phoneBookArray[i].firstName}</td>
            <td>${phoneBookArray[i].lastName}</td>
            <td>${phoneBookArray[i].phoneNumber}</td>
            <td> <button class="editBtn" data-index="${i}">Edit</button> <button class="deleteBtn" data-index="${i}">Delete</button> </td>
            `
    }
}

function editContact(){
    for (let i = 0; i < phoneBook.length; i++){
        if(phoneBook[i] == phoneBook[index]){
            phoneBook[i].firstName = inputFirstName.value;
            phoneBook[i].lastName = inputLastName.value;
            phoneBook[i].phoneNumber = inputPhoneNumber.value;
            saveContactBtn.textContent = "Save";
        }
    }
}

tableBody.addEventListener("click", function(event){
    index = event.target.dataset.index;

    if(event.target.classList.contains("editBtn")){
        let editedContact = phoneBook[index];
        inputFirstName.value = editedContact.firstName;
        inputLastName.value = editedContact.lastName;
        inputPhoneNumber.value = editedContact.phoneNumber;

        saveContactBtn.textContent = "Update";


        saveContactBtn.setAttribute("data-index", index);
    } else if (event.target.classList.contains("deleteBtn")){
        phoneBook.splice(index, 1);
        event.target.parentNode.parentNode.remove();
        saveContactBtn.removeAttribute("data-index");
        
        let deleteButton = document.getElementsByClassName("deleteBtn");

        for (let i = 0; i < deleteButton.length; i++){
            deleteButton[i].setAttribute("data-index", i)
        }
    }
})


saveContactBtn.addEventListener("click", function(){
    
    let isContactValid = validateContact(inputFirstName.value, inputLastName.value, inputPhoneNumber.value)

    if(isContactValid){
        let contact = new Contact(inputFirstName.value, inputLastName.value, inputPhoneNumber.value);
        let isContactAlreadyAdded = false;
        for(let iterator of phoneBook){
            if (iterator.firstName === contact.firstName && iterator.lastName === contact.lastName && iterator.phoneNumber === contact.phoneNumber){
                isContactAlreadyAdded = true;
                inputFirstName.value = "";
                inputLastName.value = "";
                inputPhoneNumber.value = "";
                alert("This contact already exists in the PhoneBook!")
                return;
            }
        }
        if(!isContactAlreadyAdded){
            if(saveContactBtn.textContent != "Update"){
                phoneBook.push(contact);
            } else {
                editContact();
            }
            displayContacts(phoneBook)
        }

        inputFirstName.value = "";
        inputLastName.value = "";
        inputPhoneNumber.value = "";
    }
})

// if(phoneBook.length < 1){
// $("#displayTable").hide()
// } else if (phoneBook.length >= 1){
//     $("#displayTable").show()
// }


console.log("--- Exercise 10 ---")
/*
Make a TODO app for yourself. You should have only one input and “Add” button. After clicking on the Add button, 
display the newly added task that you need to do in an unordered list. Each new todo should be saved into an array.
Bonus: Add checkbox to each of the tasks in the unordered list, and after checking a task, it should cross trough the text!
Try making the ToDo an object that needs to have two properties: Name and isCompleted properties
*/

let toDoInput = inputs[3];
let addToDoBtn = document.getElementById("addToDoBtn");
let toDoList = document.getElementById("toDoList")
let toDoArray = [];

function Todo(name, isCompleted){
    this.name = name;
    this.isCompleted = isCompleted;
}

function displayToDo(array){
    toDoList.innerHTML = "";
    for (let i = 0; i < array.length; i++){
        toDoList.innerHTML += `
        <li class="toDoLi"> <input type="checkbox" class="checkbox" data-index="${i}">${array[i].name}</li>`;
    }
}

function validateToDoInput(toDoName){
    if(toDoName === ""){
        alert("You didn't enter anything in the to Do List!")
        return;
    }
    return true;
}

addToDoBtn.addEventListener("click", function(){
    let isToDoValid = validateToDoInput(toDoInput.value);

    if(isToDoValid){
        let toDoActivity = new Todo(toDoInput.value, false);
        toDoArray.push(toDoActivity);
        displayToDo(toDoArray);
    }
    toDoInput.value = "";
})


toDoList.addEventListener("click", function(event){
    if(event.target.type === "checkbox"){
        if(event.target.checked){
            let listItem = event.target.parentElement;
            listItem.style.textDecoration = "line-through";
        } else {
            listItem.style.textDecoration = "none";
        }
    }
})

