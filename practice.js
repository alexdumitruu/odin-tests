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

module.exports = {
    capitalize,
    reverseString,
    calculator,
};
