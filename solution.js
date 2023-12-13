const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
 return nums.every(num => num > 2)
 //checks if every element is greater than 2
 // the function returns result of every method
};

const isEveryWordShorterThan7 = (words) => {
  let wordsShorterThan7 = words.every(word => word.length<=7)
return wordsShorterThan7  
  //The code is trying to find all the words that are shorter than 7 characters.
//  It does this by using a for loop and then checking if each word is in the list of words that are shorter than 7 characters.
//  The code is attempting to return an array of words shorter than 7 characters.
//  The code does not explicitly check if the word is a number, so it will return true for all words in the list.
};

// Filter

const arrayLessThan5 = (nums) => {
  let resultArray = nums.filter(num => num < 5);
  return resultArray;
  // The code returns an array of numbers that are less than 5.
  //  The input code is too short to provide a detailed and accurate answer. To gain deeper insight, try again using a longer piece of code.
};

const arrayOddLengthWords = (words) => {
  let oddLengthWords = words.filter(word => word.length % 2 !== 0);
  return oddLengthWords;
};
// The code is iterating over the array of words and filtering out all the words that are not even length.
// The code is returning an array of odd length words.
// The code is a simple method that takes an array of words and returns the odd length words.
// This code will return an array with all the words that have a length which is not evenly divisible by two.

// Find

const firstValDivisibleBy4 = (nums) => {
  let result = nums.find(num => num % 4 === 0)
  return result;
};
//The code will return the first value in the list that is divisible by 4.
//  The input code is too short to provide a detailed and accurate answer. To gain deeper insight, try again using a longer piece of code.

const firstWordLongerThan4Char = (words) => {
  let result= words.find(word => word.length > 4);
  return result;
};
//  The code finds the first word that is longer than 4 characters.
 //The code returns a string with the first word that is longer than 4 characters.

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  let resultIndex = nums.findIndex(num => num % 3 === 0);
  return resultIndex;
  //The code is trying to find the index of the first number in an array that is divisible by 3.
//  The code starts by creating a function called "firstNumIndexDivisibleBy3" which takes one argument, nums, and returns an integer.
//  Then it calls this function on each element in the array to see if any of them are divisible by 3.
//  If so, then it returns the index where they were found.
//  The code attempts to find the index of the first number in a list that is divisible by 3.
//  The resultIndex variable will be set to the index of the first number in a list that is divisible by 3.
};

const firstWordIndexLessThan2Char = (words) => {
  let resultIndex = words.findIndex(word => word.length < 2);
  return resultIndex;
};
//The code finds the index of the first word in a list that is less than 2 characters long.
 //The code will return the index of the first word that has a length less than or equal to 2.

// For Each

const logValuesTimes3 = (nums) => {
  nums.forEach(num => {
    const multipledValue = num * 3;
    console.log(multipledValue);
  });
};
// The code has a function that takes in an array of numbers and returns the product of each number multiplied by 3.
//  The code has a forEach loop which iterates through the list, multiplying each value by 3.
//  The code attempts to log the values of nums multiplied by 3.

const logWordsWithExclamation = (words) => {
  words.forEach(word => {
    const wordWithExclamation = `${word}!`;
    console.log(wordWithExclamation)
  })
};
//The code iterates over the words array and prints each word with an exclamation point.
 //The code attempts to log the words with exclamation in a list.

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  let squaredTimesIndex = nums.map((num, index) => num ** 2 * index);
  return squaredTimesIndex;
};
// The code is a function that takes an array of numbers and returns the index of the squared times.
//  The code starts by creating an empty array called nums, which is then filled with values from 1 to 10.
//  Next, it creates a new variable called squaredTimesIndex and fills it with all the squares of each number in nums.
//  Finally, it returns this value as its output.
//  The first line creates an empty array called "nums" that will be used to store values from 1 to 10 for later use in calculating their squares.
//  Next, on line 2, we create a new variable named "squaredTimesIndex", which is initialized with all the squares of each number in "nums".
//  Finally on line 3 we return this value as our output
//  The code creates an array of numbers and squares them.
//  The code then returns the index of the first value in the array, which is squaredTimesIndex.

const arrayWordsUpcased = (words) => {
  let upcasedWords = words.map(word => word.toUpperCase());
  return upcasedWords
};
// The code is iterating through the words array and converting each word to uppercase.
//  The code creates an array of string objects, then it iterates through each word in the list and converts them to uppercase.

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  let isDivisible = nums.some(num => num % 7 === 0);
  return isDivisible;
};
// The code is trying to check if some of the numbers are divisible by 7.
//  It does this by using a function called isDivisible, which takes in an array and returns true or false depending on whether or not it's divisible.
//  The code tests whether some numbers are divisible by 7.
//  SomeNumsDivisibleBy7 is a function that takes an array of numbers as its input and returns true if the array contains at least one number that is divisible by 7, otherwise it returns false.

const doSomeWordsHaveAnA = (words) => {
return words.some(word => word.toLowerCase().includes('a'));
};
// The code will return true if any of the words in the list has an a in its lowercase form.
//  The input code is too short to provide a detailed and accurate answer. To gain deeper insight, try again using a longer piece of code.
module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  firstNumIndexDivisibleBy3,
  firstWordIndexLessThan2Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
