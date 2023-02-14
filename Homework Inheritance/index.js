console.log("Exercise 1");

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = () => {
        console.log(`Full name: ${this.firstName} ${this.lastName}`);
    }
}

function Student(firstName, lastName, age, academyName, studentId) {

    Object.setPrototypeOf(this, new Person(firstName, lastName, age));

    this.academyName = academyName;
    this.studentId = studentId;

    this.study = () => {
        console.log(`The student ${this.firstName} is studying in the ${this.academyName} `)
    }
}

let studentOne = new Student("Frosina", "Stamenkovska", 33, "Academy SEDC", 8);
let studentTwo = new Student("Bob", "Bobski", 30, "Code Academy", 10);



console.log("Exercise 2");

Person.prototype.getAcademyName = function () {
    console.log(this.academyName);
}

studentOne.getAcademyName();
studentTwo.getAcademyName();

function DesignStudent(firstName, lastName, age, studentId, isStudentOfTheMonth) {

    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName = "Academy for Design", studentId));

    this.isStudentOfTheMonth = isStudentOfTheMonth;

    this.attendAdobeExam = () => console.log(`The student ${this.firstName} is doing an Adobe exam!`)
}

function CodeStudent(firstName, lastName, age, studentId) {

    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName = "Code Academy", studentId));

    this.hasIndividualProjects = false;
    this.hasGroupProjects = false;

    this.doProjectType = (individualOrGroup) => {
        if (individualOrGroup.toLowerCase() === "individual") {
            this.hasIndividualProjects = true;
        } else if (individualOrGroup.toLowerCase() === "group") {
            this.hasGroupProjects = true;
        } else {
            alert("You have invalid entery!")
        }
    }
}

function NetworkStudent(firstName, lastName, age, studentId, academyPart) {

    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName = "Academy for Network", studentId));

    this.academyPart = academyPart;

    this.attendCiscoExam = () => console.log(`The student ${this.firstName} is doing a cisco exam!`)

}

let student1 = new DesignStudent("Tosho", "Malerot", 40, 1, true);
console.log(student1);
student1.getFullName();
student1.study();
student1.getAcademyName();
student1.attendAdobeExam();


let student2 = new CodeStudent("Mile", "Panika", 45, 2);
console.log(student2);
student2.getFullName();
student2.study();
student2.getAcademyName();
student2.doProjectType("Group");
console.log("Has group projects:", student2.hasGroupProjects);
console.log("Has individual projects:", student2.hasIndividualProjects);


let student3 = new NetworkStudent("Cacko", "Konopishki", 50, 3, 2);
console.log(student3)
student3.getFullName();
student3.study();
student3.getAcademyName();
student3.attendCiscoExam();