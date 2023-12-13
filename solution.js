const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  let numsEvery = nums.every(num => num >= 2)
  return numsEvery;
};

const isEveryWordShorterThan7 = (words) => {
  let wordsShorterThan7 = words.every(word => word.length <= 7)
  return wordsShorterThan7;
};

// Filter

const arrayLessThan5 = (nums) => {
  let numsLessThan5 = nums.filter(num => num < 5)
  return numsLessThan5;
};

const arrayOddLengthWords = (words) => {
  let oddLengthWords = words.filter(word => word.length % 2 === 1)
  return oddLengthWords;
};

// Find

const firstValDivisibleBy4 = (nums) => {
  let firstNumDivisibleBy4 = nums.find(num => num % 4 === 0)
  return firstNumDivisibleBy4;
};

const firstWordLongerThan4Char = (words) => {
  let firstWordLongerThan4Letters = words.find(word => word.length > 4)
  return firstWordLongerThan4Letters;
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  let numIndexDivisibleBy3 = nums.findIndex(num => num % 3 === 0)
  return numIndexDivisibleBy3;
};

const firstWordIndexLessThan2Char = (words) => {
  let firstWordLessThan2 = words.findIndex(word => word < 2)
  return firstWordLessThan2;
};

// For Each

const logValuesTimes3 = (nums) => {
  let valuesMultipliedByThree = nums.forEach(num => num * 3)
  return valuesMultipliedByThree;
};

const logWordsWithExclamation = (words) => {
  let wordsWithExclamation = words.forEach(word => word === "!")
  return wordsWithExclamation;
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  let numsSquaredAndTimes = nums.map((num, index) => (num ** 2) * index)
  return numsSquaredAndTimes;
};

const arrayWordsUpcased = (words) => {
  let wordsUpperCased = words.map(word => word.toUpperCase())
  return wordsUpperCased;
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  let numsDivisibleBy7 = nums.some(num => num % 7 === 0)
  return numsDivisibleBy7;
};

const doSomeWordsHaveAnA = (words) => {
  let wordsWithA = words.some(word => word.includes('a'))
  return wordsWithA;
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
