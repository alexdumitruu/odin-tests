// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;

function capitalize(str) {
    firstLetter = str.slice(0, 1).toUpperCase();
    rest = str.substring(1)
    return firstLetter + rest;
}

function reverseString(str) {
    let newStr = "";
    letterArr = str.split("");
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += letterArr[i];
    }
    return newStr;
}

function calculator() {
    function add(first, second) { return first + second; }
    function subtract(first, second) { return first - second; }
    function multiply(first, second) { return first * second; }
    function divide(first, second) { return first / second; }

    return {
        add,
        subtract,
        multiply,
        divide
    }
}

function caesarCipher(str, shiftFactor) {
    shiftFactor = shiftFactor % 26;
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        if (char >= 65 && char <= 90) {
            const base = 65;
            const newChar = (char - base + shiftFactor) % 26 + base;
            newStr += String.fromCharCode(newChar);
        }
        else if (char >= 97 && char <= 122) {
            const base = 97;
            const newChar = (char - base + shiftFactor) % 26 + base;
            newStr += String.fromCharCode(newChar);
        } else newStr += str[i];
    }
    return newStr;
}

function analyzeArray() {

}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
};
