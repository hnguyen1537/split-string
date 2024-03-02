const prompCreator = require('prompt-sync');

const prompt = prompCreator();

// DO NOT CHANGE THE LINE BELOW.
const str = prompt('Enter a string:');

/**
 * Create an array of substrings given a delimiter.
 * For example, if str = 'Hello World!' and delimiter = ' ', it should return ['Hello', 'World!']
 */

let result = str.split(" ");

// when str = "Hello World!"
// when str = ""
//when str = "Welcome to CIS 171!"
//when str=" "




// DO NOT CHANGE THE LINES BELOW.
console.log(result);

module.exports = {
  result,
};
