// INTERFACES

interface Faculty {
    firstName: string;
    lastName: string;
    age: number;
    responsibilities: string[];
}

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    program: string;
}

// each student will have a name and a grade in the class
type student = {
    name: string;
    grade: number;
}

let students: student[];

// students in the class
students = [{
    name: "Michael Jordan",
    grade: 93
},
{
    name: "Lebron James",
    grade: 92
},

{
    name: "Dirk Nowitzki",
    grade: 90
}]


class Professor implements Faculty {
    firstName: string;
    lastName: string;
    age: number;
    responsibilities: string[];

    gradePapers() {

    }

    updateGrades() {

    }

    giveFeedback(): void {

    }

    overRideGrades() {

    }
}

class TeachingAssistant implements Student {

    firstName: string;
    lastName: string;
    age: number;
    program: string;

    gradePapers() {

    }

    updateGrades() {

    }

    giveFeedback(): void {

    }

    overRideGrades(): void {
        throw new Error("You do not have permissions to override grades.");
    }

}


