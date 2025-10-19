// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;

function capitalize(str) {
    firstLetter = str.slice(0, 1).toUpperCase();
    rest = str.substring(1)
    return firstLetter + rest;
}



module.exports = capitalize;
