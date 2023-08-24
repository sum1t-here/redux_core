import { compose } from 'redux';

function removeSpaces(string) {
  return string.split(' ').join('');
}
//console.log(removeSpaces('abcd efgh')); // abcdefgh

function repeatString(string) {
  return string + string; // can also use string.repeat(2)
}
//console.log(repeatString('abcd')); // abcdabcd

function convertToUpper(string) {
  return string.toUpperCase();
}

const input = 'abc def ghi';

// const output = convertToUpper(repeatString(removeSpaces(input))); // h(g(f(x)))
// console.log(output); // ABCDEFGHIABCDEFGHI

const composedFunction = compose(removeSpaces, repeatString, convertToUpper);
console.log(composedFunction(input)); // ABCDEFGHIABCDEFGHI
