// find the maximum element in an array
function findMaximum(numbers: number[]) {

    let maximum: number = -Infinity; // set maximum equal to the lowest possible negative value
    for (let value of numbers) { // go through all elements in the numbers array
        if (value > maximum) { // check if that element is bigger than the current maximum
            maximum = value; // if so, set maximum equal to that element
        }
    }
    return maximum;
}

//tests
const test1 = findMaximum([-20, -52, -5, -32, -90]);
const test2 = findMaximum([10, 9, 4, 19, 12]);

console.log(test1); // -5
console.log(test2); // 19

