// CLASSES

class Student {
    firstName: string;
    lastName: string;
    age: number;
    courses: string[];


    constructor(fName: string, lName: string, age: number, courses: string[]) {
        this.firstName = fName;
        this.lastName = lName
        this.age = age;
        this.courses = courses;
    }


    enrollCourse(courseName: string) {
        this.courses.push(courseName);
    }

    dropCourse(courseName: string) {
        this.courses = this.courses.filter(course => course !== courseName);
    }
}


const student1 = new Student("James", "Smith", 20, ["Calculus I", "Operating Systems", "Biology II"]);
const student2 = new Student("Will", "Tesch", 23, ["Statistics", "Database Systems", "Geology I", "Geology I Lab"]);

student1.enrollCourse("Biology II Lab") // James is now enrolled in Biology II Lab
student2.dropCourse("Database Systems"); // Will has dropped his Database Systems class

console.log(student1.courses); // [ 'Calculus I', 'Operating Systems', 'Biology II', 'Biology II Lab' ]

console.log(student2.courses); // [ 'Statistics', 'Geology I', 'Geology I Lab' ]


