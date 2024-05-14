//  GENERICS

/* Generics allow for flexibility in TS functions. 
TS reads parameter type(s), then helps to output and return appropiate type(s) based on that. */

function insertAtBeginning<T>(array: T[], value: T) {  // both the array and the value passed in are now of Type T
    const newArray = [value, ...array]; // ... spread operator copies current array contents into the new array; the value gets inserted at the beginning of the array 
    return newArray;
}

/* function is called; parameters of string array and string are determined. 'a' has been inserted at the start of the array. */
const alphabetArray = insertAtBeginning(['b', 'c', 'd', 'e'], 'a');


console.log(alphabetArray); // Output: [ 'a', 'b', 'c', 'd', 'e' ] 



function joinArrays<T>(arr1: T[], arr2: T[]) { // two arrays of Generic type T
    const newArray = arr1.concat(arr2); // joins the two arrays
    return newArray;
}

console.log(joinArrays([1, 2, 3, 4], [5, 6, 7, 8])) //  Output:  [ 1,2,3,4,5,6,7,8 ]
