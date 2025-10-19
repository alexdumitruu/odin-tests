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

module.exports = {
    capitalize,
    reverseString
};
