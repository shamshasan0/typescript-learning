// find the maximum element in an array
function findMaximum(numbers: number[]) {
    let maximum: number = 0;
    for (let values of numbers) {
        if (numbers[values] > maximum) {
            maximum = numbers[values];
        }
    }
    return maximum;
}

const maxResult = findMaximum([1, 2, 3, 4, 5])
console.log(maxResult) // 5
