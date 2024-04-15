// find the maximum element in an array
function findMaximum(numbers: number[]) {
    let maximum: number = numbers[0];
    for (let value of numbers) {
        if (value > maximum) {
            maximum = value;
        }
    }
    return maximum;
}

const maxResult = findMaximum([1, 2, 3, 4, 5])
console.log(maxResult) // 5
