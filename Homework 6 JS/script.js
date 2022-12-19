// Exercise 1 - Register User

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submitButton = document.getElementById("submitButton");
let myDiv = document.getElementById("myDiv");

function addValuesToString(firstName, lastName, email, password){
    return `Full name: ${firstName} ${lastName}, email: ${email}, password: ${password}`;
}

submitButton.addEventListener("click", function(){
    let valueOfFirstName = firstName.value;
    let valueOfLastName = lastName.value;
    let valueOfEmail = email.value;
    let valueOfPassword = password.value;

    let valueResult = addValuesToString(valueOfFirstName, valueOfLastName, valueOfEmail, valueOfPassword);
    myDiv.innerHTML += `<p> ${valueResult} </p>`;
})



//Exercise 2 - Dynamic table

let tableBtn = document.getElementById("tableBtn");
let table = document.getElementById("table");

function dynamicTable(){
    let rows = document.getElementById("rows").value;
    let columns = document.getElementById("columns").value;

    for(let indexRow = 0; indexRow < rows; indexRow++){
        let tr = document.createElement("tr");

        for(let indexColumn = 0; indexColumn < columns; indexColumn++){
            let td = document.createElement("td");
            let text = document.createTextNode(`Row ${(indexRow + 1)} Column ${(indexColumn + 1)}`)
        
            td.appendChild(text);
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}

tableBtn.addEventListener("click", function(){
    if(table.textContent){
        table.textContent = "";
    }
    dynamicTable();
    rows.value = "";
    columns.value = "";
})



