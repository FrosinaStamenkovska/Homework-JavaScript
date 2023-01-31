function getStudentInfo(){
    $.ajax({
        url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
        method: "GET",
        success: function(response){
            let parsedResponse = JSON.parse(response)
            higherThanThree(parsedResponse);
            femaleWithFive(parsedResponse);
            maleAdultFromSkopje(parsedResponse);
            averageGradesFemaleOver24(parsedResponse);
            maleNameStartingWithB(parsedResponse);
        },
        error: function(error){
            console.log(error)
        }
    })
}

getStudentInfo();

function higherThanThree (response){
    let gradeHigherThanThree = response.filter(student => student.averageGrade > 3)
    console.log("* Students with average grade higher than 3: ", gradeHigherThanThree);
}

function femaleWithFive (response){
    console.log("* Female students names with an average grade of 5:")
    let femaleFive = response.filter(student => student.gender === "Female" && student.averageGrade === 5);
    femaleFive.forEach(female => console.log(`${female.firstName} has an average grade of ${female.averageGrade}`));
}

function maleAdultFromSkopje (response){
    console.log("* Male students full names who live in Skopje and are over 18 years old:")
    let maleAdult = response.filter(student => student.gender === "Male" && student.age > 18 && student.city === "Skopje");
    maleAdult.forEach(male => console.log(`${male.firstName} ${male.lastName} is ${male.age} years old from ${male.city}.`));
}

function averageGradesFemaleOver24 (response){
    console.log("* The average grades of all female students over the age of 24:")
    let femaleStudents = response.filter(student => student.gender === "Female" && student.age > 24)
    femaleStudents.forEach(female => console.log(`${female.averageGrade} is ${female.firstName}'s average grade.`))
}

function maleNameStartingWithB (response){
    console.log("* Male students with a name starting with B and average grade over 2:");
    let maleOver2 = response.filter(student => student.averageGrade > 2 && student.gender === "Male" && student.firstName.charAt(0) === "B")
    console.log(maleOver2);
}
