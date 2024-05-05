// define a type
type Person = {
    name:string;
    age:number;
    isValidated:boolean;
};

let person:Person // person variable is now of type Person

// make an object 
person = {
    name: "Patrick",
    age: 50,
    isValidated:true
};

// define people to store an array of person(s)
let people: Person[];
// array object
people = [{
    name:"eddy",
    age:22,
    isValidated:true
},
{
    name:"frank",
    age:15,
    isValidated:false
}];

people.push(person); // adds patrick to the array of objects

console.log(people);// prints the array of objects



