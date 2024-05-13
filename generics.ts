// Generics


function insertAtBeginning<T>(array: T[], value:T){ // setting Generics lets TS consider which types are in the array at runtime; both the array and the value passed in are now of Type T
    const newArray = [value,...array]; // spread operator copies current array contents into the new array, and then the value gets inserted at the beginning

    return newArray;
}

const stringArr = insertAtBeginning(['b', 'c', 'd', 'e'], 'a'); // inserts 'a' at the beginning of the array 

console.log(stringArr); // [ 'a', 'b', 'c', 'd', 'e' ]



function joinArrays<Numbers>(arr1: Numbers[], arr2: Numbers[]){ // two arrays of Generic type Numbers
    const newArray = arr1.concat(arr2); // joins the two arrays
    return newArray;
}

console.log(joinArrays([1,2,3,4], [5,6,7,8])) // [ 1,2,3,4,5,6,7,8 ]