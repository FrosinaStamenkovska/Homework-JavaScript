function Academy(name, students, subjects, start, end) {
    this.name = name;
    this.students = students || [];
    this.subjects = subjects || [];
    this.start = start;
    this.end = end;
    this.numberOfClasses = this.subjects.length * 10;

    this.printStudents = () => {
        console.log("The students from Academy SEDC are: ")
        for (let student of this.students) {
            console.log(student.firstName + " " + student.lastName);
        }
    }

    this.printSubjects = () => {
        console.log("The subjects from Academy SEDC are: ");
        for (let subject of this.subjects) {
            console.log(subject);
        }
    }
}

function Subject(title, isElective, academy, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;

    this.overrideClasses = (overrideClasses) => {
        if (overrideClasses >= 3) {
            this.numberOfClasses = overrideClasses;
        }
    }
}

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;

    this.startAcademy = (academyObject) => {
        if (typeof (academyObject) === "object") {
            this.academy = academyObject;
            academyObject.students.push(this);
        }
    }

    this.startSubject = (subject) => {
        if (this.academy !== null
            && this.academy !== undefined
            && this.academy !== ""
            && this.academy.subjects.includes(subject.title)) {

            if (this.currentSubject !== null) {
                this.completedSubjects.push(this.currentSubject)
            }

            subject.students.push(this)
            this.currentSubject = subject;
        } else {
            console.log("Error! You haven't set an Academy or the subject doesn't exist in the Academy!")
        }
    }
}

let academySEDC = new Academy("SEDC", [], ["HTML", "CSS", "Javascript Basic", "Javascript Advanced"], new Date(2022, 9, 18).toDateString(), new Date(2023, 9, 17).toDateString());

let subjectHTML = new Subject("HTML", false, academySEDC, []);
let subjectCSS = new Subject("CSS", false, academySEDC, []);
let subjectNodeJS = new Subject("NodeJS", true, academySEDC, []);

let studentOne = new Student("Frosina", "Stamenkovska", 33);
let studentTwo = new Student("Bob", "Bobski", 30);
let studentThree = new Student("John", "Doe", 25);
let studentFour = new Student("David", "Shtergiski", 29);

console.log(academySEDC);
console.log(subjectHTML);
console.log(studentOne);

// Calling the method overrideClasses from the Subject-objects
subjectHTML.overrideClasses(6);
subjectCSS.overrideClasses(8);
subjectNodeJS.overrideClasses(2);
console.log(`The default 10 classes of subject HTML are rewriten to ${subjectHTML.numberOfClasses} classes.`)
console.log(`The default ${subjectNodeJS.numberOfClasses} classes of subject NodeJS are not rewriten, because it has less than 3 classes.`)

// Calling the method startAcademy and asigning academy to the Student-Objects
studentOne.startAcademy(academySEDC);
studentTwo.startAcademy(academySEDC);
studentThree.startAcademy(academySEDC);

// Calling the method start subject and asigning subjects to the student objects
studentOne.startSubject(subjectHTML);
studentTwo.startSubject(subjectHTML);
console.log(`Current subject is ${studentOne.currentSubject.title}`);
studentOne.startSubject(subjectCSS);
console.log(`After adding new subject, current subject is: ${studentOne.currentSubject.title} and completed subject is: ${studentOne.completedSubjects[0].title}`)

// Case 1 - Error while asigning a subject
console.log(`The subject ${subjectNodeJS.title} cannot be asigned to the student because it doesn't exist in SEDC Academy:`)
studentThree.startSubject(subjectNodeJS);

// Case 2 - Error while asigning a subject
studentFour.startAcademy();
console.log(`The subject ${subjectCSS.title} cannot be asigned to the student because there is no Academy asigned:`)
studentFour.startSubject(subjectCSS);

// Dynamicly added students to the students property of the ACADEMY - object
// Calling the methods from Academy Object and printing the students and the subjects
academySEDC.printStudents();
academySEDC.printSubjects();

// Dynamicly added students to the students property of the SUBJECT - object
console.log(subjectHTML.students);