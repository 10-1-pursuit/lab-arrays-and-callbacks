const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  const numsEvery = nums.every(num => num > 2)
  return numsEvery
};


const isEveryWordShorterThan7 = () => {
  const wordsEvery = words.every(word => word.length < 7)
  return wordsEvery
};

// Filter

const arrayLessThan5 = () => {
  const filteredNums = nums.filter(num => num < 5)
  return filteredNums
};

const arrayOddLengthWords = () => {
  const filteredWords = words.filter(word => word.length % 2 === 1)
  return filteredWords
};

// Find

const firstValDivisibleBy4 = () => {
  const numToFind = nums.find(num => num % 4 === 0)
  return numToFind
};

const firstWordLongerThan4Char = () => {
  const wordToFind = words.find(word => word.length > 4)
  return wordToFind
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  const findIndexOfNum = nums.findIndex(num => num % 3 === 0)
  return findIndexOfNum
};

const firstWordIndexLessThan2Char = () => {
  const findIndexOfWord = words.findIndex(word => word.length < 2)
  return findIndexOfWord
};

// For Each

const logValuesTimes3 = () => {
  const numsForEachTimes3 = nums.forEach(num => num * 3)
  console.log(numsForEachTimes3)
};

const logWordsWithExclamation = () => {
  const wordsForEachWithExclamation = words.forEach(word => word + "!")
  console.log(wordsForEachWithExclamation)
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  const newArrOfNumsMappedTimesIndex = []
  const numsSquared = (nums)=> nums * nums
  const numsMap = nums.map(numsSquared)
    // console.log(numsMap)
  for (let x = 0; x < numsMap.length; x++){
    const numsMappedTimesIndex = numsMap[x] * x
    newArrOfNumsMappedTimesIndex.push(numsMappedTimesIndex)
    // console.log(numsMappedTimesIndex)
  }
  return newArrOfNumsMappedTimesIndex
};

const arrayWordsUpcased = () => {
  const upperCaseWords = words.map(word => word.toUpperCase())
  return upperCaseWords
  
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  const someNums = nums.some(num => num % 7 === 0)
  return someNums
};

const doSomeWordsHaveAnA = () => {
  const someWords = words.some(word => word = "a")
  return someWords
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
