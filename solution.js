const { nums, words } = require("./data/data.js");

// Every
// Determine if every number is greater than or equal to 2
const isEveryNumGreaterThan2 = () => {
  const greaterThanEqualTwo = nums.every((num) => num >= 2);
  return greaterThanEqualTwo;
};

// determine if every word shorter than 7 characters
const isEveryWordShorterThan7 = () => {
  const shorterThanSeven = words.every((word) => word.length < 7);
  return shorterThanSeven;
};

// Filter
// filter the array for numbers less than 5
const arrayLessThan5 = () => {
  const numsLessThan5 = nums.filter((num) => num < 5);
  return numsLessThan5;
};

// filter words that have an odd length
const arrayOddLengthWords = () => {
  const oddLengthWords = words.filter((word) => word.length % 2 === 1);
  return oddLengthWords;
};

// Find
// Find the first value divisible by 4
const firstValDivisibleBy4 = () => {
  const divisibleBy4 = nums.find((num) => num % 4 === 0);
  return divisibleBy4;
};

// find the first word that is longer than 4 characters
const firstWordLongerThan4Char = () => {
  const longerThan4 = words.find((word) => word.length > 4);
  return longerThan4;
};

// Find Index
// find the index of the first number that is divisible by 3
const firstNumIndexDivisibleBy3 = () => {
  const divisibleByThree = nums.findIndex((num) => num % 3 === 0);
  return divisibleByThree;
};

// find the index of the first word that is less than 2 characters long
const firstWordIndexLessThan2Char = () => {
  const lessThanTwo = words.findIndex((word) => word.length < 2);
  return lessThanTwo;
};

// For Each
// console.log each value of the nums array multiplied by 3
const logValuesTimes3 = () => {
  const multipliedByThree = [];

  nums.forEach((num) => {
    let timesThree = num * 3;
    multipliedByThree.push(timesThree);
  });

  console.log(multipliedByThree);
};

// console.log each word with an exclamation point at the end of it
const logWordsWithExclamation = () => {
  //
};

// Thought Questions: What happened to the original array?  |  Can you store the values from a forEach method in a new array?

// Map
// Make a new array of each number squared and then multiplied by their index number
const arrayValuesSquaredTimesIndex = () => {
  //
};

// Make a new array of all the words in all uppercase
const arrayWordsUpcased = () => {
  //
};

// Thought Questions: What happened to the original array? | Can you store the values from a map method in a new array?

// Some
// Find out if some numbers are divisible by 7
const areSomeNumsDivisibleBy7 = () => {
  //
};

// Find out if some words have the letter a in them
const doSomeWordsHaveAnA = () => {
  //
};

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
