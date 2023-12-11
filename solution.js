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
  //
};

// Filter

const arrayLessThan5 = (nums) => {
  let resultArray = nums.filter(num => num < 5);
  return resultArray;
};

const arrayOddLengthWords = (words) => {
  let oddLengthWords = words.filter(word => word.length % 2 !== 0);
  return oddLengthWords;
  //
};

// Find

const firstValDivisibleBy4 = (nums) => {
  let result = nums.find(num => num % 4 === 0)
  return result;
};

const firstWordLongerThan4Char = (words) => {
  let result= words.find(word => word.length > 4);
  return result;
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  let resultIndex = nums.findIndex(num => num % 3 === 0);
  return resultIndex;
};

const firstWordIndexLessThan2Char = (words) => {
  let resultIndex = words.findIndex(word => word.length < 2);
  return resultIndex;
};

// For Each

const logValuesTimes3 = (nums) => {
  nums.forEach(num => {
    const multipledValue = num * 3;
    console.log(multipledValue);
  });
};

const logWordsWithExclamation = (words) => {
  words.forEach(word => {
    const wordWithExclamation = `${word}!`;
    console.log(wordWithExclamation)
  })
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  let squaredTimesIndex = nums.map((num, index) => num ** 2 * index);
  return squaredTimesIndex;
};

const arrayWordsUpcased = (words) => {
  let upcasedWords = words.map(word => word.toUpperCase());
  return upcasedWords
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  let isDivisible = nums.some(num => num % 7 === 0);
  return isDivisible;
};

const doSomeWordsHaveAnA = (words) => {
return words.some(word => word.toLowerCase().includes('a'));
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
