const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  const numsEvery = nums.every(num => num >= 2)
  return numsEvery;
  
};

const isEveryWordShorterThan7 = (words) => {
  const everyWord = words.every(word => word.length < 7)
  return everyWord;
  
};

// Filter

const arrayLessThan5 = (nums) => {
  const filteredNums = nums.filter(num => num < 5)
  return filteredNums;
};

const arrayOddLengthWords = (words) => {
  const oddLength = words.filter(word => word.length % 2 === 1)
  return oddLength;
  
};

// Find

const firstValDivisibleBy4 = (nums) => {
  const firstVal = nums.find(num => num % 4 === 0)
  return firstVal;
};

const firstWordLongerThan4Char = (words) => {
  const firstWord = words.find(word => word.length > 4)
  return firstWord
  
};


// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  const firstNum = nums.findIndex(num => num % 3 === 0)
  return firstNum;
};

const firstWordIndexLessThan2Char = (words) => {
  const firstWord = words.findIndex(word => word.length < 2)
  return firstWord;
};

// For Each

const logValuesTimes3 = (nums) => {
  const valueTimes3 = nums.forEach(num => num * 3)
  console.log(valueTimes3);
};

const logWordsWithExclamation = (words) => {
  const wordsWithExclamation = words.forEach(word => word + "!")
  console.log(wordsWithExclamation)
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  const values = nums.map(num => num ** 2 * nums.indexOf(num))
    return values;
};

const arrayWordsUpcased = (words) => {
  const uppercaseWord = words.map(word => word.toUpperCase())
return uppercaseWord;
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  const numsDivisibleBy7 = nums.some(num => num % 7 === 0)
  return numsDivisibleBy7;
};

const doSomeWordsHaveAnA = (words) => {
  const someWordsHaveAnA = words.some(word => word.includes("a"))
  return someWordsHaveAnA;
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
