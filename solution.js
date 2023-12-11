const { nums, words } = require("./data/data.js");

// Every
// 1. Determine if every number is greater than or equal to 2
// 1. determine if every word shorter than 7 characters
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every((num)=> num >= 2)
};

const isEveryWordShorterThan7 = (words) => {
  return words.every((word)=> word.length < 7)
};

// Filter
// 1. filter the array for numbers less than 5
// 1. filter words that have an odd length
const arrayLessThan5 = (words) => {
 return nums.filter((num)=> num < 5 )
};

const arrayOddLengthWords = (words) => {
return words.filter((word)=>word.length % 2 === 1)
};

// Find
// 1. Find the first value divisible by 4
// 1. find the first word that is longer than 4 characters

const firstValDivisibleBy4 = (nums) => {
return nums.find((num)=> num % 4 === 0)
};

const firstWordLongerThan4Char = (words) => {
 return words.find((word)=>word.length > 4)
};

// Find Index
// 1. find the index of the first number that is divisible by 3
// 1. find the index of the first word that is less than 2 characters long
const firstNumIndexDivisibleBy3 = (nums) => {
  return nums.findIndex((num)=> num % 3 === 0)
};

const firstWordIndexLessThan2Char = (words) => {
 return words.findIndex((word)=> word.length < 2)
};

// For Each
// 1. console.log each value of the nums array multiplied by 3
// 1. console.log each word with an exclamation point at the end of it

const logValuesTimes3 = (nums) => {
 console.log(nums.forEach((num)=> num * 3))
};

const logWordsWithExclamation = (words) => {
  console.log(words.forEach((word)=> `${word}!`))
};

// Map

// 1. Make a new array of each number squared and then multiplied by their index number
// 1. Make a new array of all the words in all uppercase
const arrayValuesSquaredTimesIndex = (nums) => {

  return nums.map((num, index)=> (num ** 2) * index   )
};

const arrayWordsUpcased = (words) => {
return words.map((word)=> word.toUpperCase())
};

// Some
// - Find out if some numbers are divisible by 7
// - Find out if some words have the letter `a` in them
const areSomeNumsDivisibleBy7 = (nums) => {
return nums.some((num)=>num % 7 === 0)
};

const doSomeWordsHaveAnA = (words) => {
letter = ["a","A"]
 return words.some((word)=> word.includes("a"))
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
