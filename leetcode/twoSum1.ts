// return the indices of the two numbers in array that add up to target
// O(n^2) solution

function twoSum(array: number[], target: number) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[i] + array[j] == target) {
                return [i, j]
            }
        }
    }
}