// check if a string is a palindrome


// return the reversed order of the inputted string
function printReverse(str: string) {
    let index: number = str.length - 1;
    let reversedString: string = "";

    while (index >= 0) {
        reversedString += str[index];
        index--;
    }

    return reversedString;
}

const reversed = printReverse("racecar")
console.log(reversed); // racecar

// utilize previous function to check str against its reverse
function checkIfPalindrome(str: string) {
    if (printReverse(str) === str) {
        return true;
    }
    return false;
}

const palindromeResult = checkIfPalindrome("dinosaur"); // false
const palindromeResult2 = checkIfPalindrome("bob");
console.log(palindromeResult) // false
console.log(palindromeResult2) // true