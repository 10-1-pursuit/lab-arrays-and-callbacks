// The first question is for the numbers array. The second question is for the words array.
const { nums, words } = require("./data/data.js");

// Every - Determine if every number is greater than or equal to 2
const isEveryNumGreaterThan2 = (numbers) => {
  console.log(numbers);
  return numbers.every((num) => num >= 2);
};

console.log(isEveryNumGreaterThan2(nums));

// Determine if every word is shorter than 7 characters
const isEveryWordShorterThan7 = (theWords) => {
  const isShorterThanSeven = (currentValue) => currentValue.length < 7;
  console.log(theWords);
  return theWords.every(isShorterThanSeven);
};

console.log(isEveryWordShorterThan7(words));

// Filter - Filter the array for numbers less than 5
const arrayLessThan5 = (numbers) => {
  // console.log(numbers);
  const result = numbers.filter((num) => num < 5);
  return result;
};

console.log(arrayLessThan5(nums))

// Filter words that have an odd length
const arrayOddLengthWords = (str) => {
  console.log(str);
  const result = str.filter((word) => word.length % 2 !== 0);
  return result;
};

console.log(arrayOddLengthWords(words))

// Find - Find the first value divisible by 4
const firstValDivisibleBy4 = (numbers) => {
  console.log(numbers);
  return numbers.find((num) => num % 4 === 0);
};

console.log(firstValDivisibleBy4(nums))

// Find the first word that is longer than 4 characters
const firstWordLongerThan4Char = (str) => {
  console.log(str);
  return str.find((word) => word.length > 4);
};

console.log(firstWordLongerThan4Char(words))

// Find Index - Find the index of the first number that is divisible by 3
const firstNumIndexDivisibleBy3 = (numbers) => {
  console.log(numbers);
  return numbers.findIndex((num) => num % 3 === 0);
};

console.log(firstNumIndexDivisibleBy3(nums))

// Find the index of the first word that is less than 2 characters long
const firstWordIndexLessThan2Char = (str) => {
  return str.findIndex((word) => word.length < 2);
};

console.log(firstWordIndexLessThan2Char(words))

// For Each - Console.log each value of the nums array multiplied by 3
const logValuesTimes3 = (numbers) => {
  numbers.forEach((num, index, array) => {
    array[index] = num * 3;
  });
  console.log(numbers);
};

console.log(logValuesTimes3(nums))

// Console.log each word with an exclamation point at the end of it
const logWordsWithExclamation = (str) => {
  str.forEach((word) => {
    console.log(`${word}!`);
  });
};

console.log(logWordsWithExclamation(words))

// Map - Make a new array of each number squared and then multiplied by their index number
const arrayValuesSquaredTimesIndex = (numbers) => {
  const mappedNums = numbers.map((num, index) => {
    return num * num * index;
  });
  return mappedNums;
};

console.log(arrayValuesSquaredTimesIndex(nums));

// Make a new array of all the words in all uppercase
const arrayWordsUpcased = (str) => {
  const upperCaseWords = str.map((word)=>{
    return word.toUpperCase();
  })
  return upperCaseWords;
};

console.log(arrayWordsUpcased(words))

// Some - Find out if some numbers are divisible by 7
const areSomeNumsDivisibleBy7 = (numbers) => {
  return numbers.some(num => num % 7 === 0);
};

console.log(areSomeNumsDivisibleBy7(nums))

// Find out if some words have the letter a in them
const doSomeWordsHaveAnA = (str) => {
  return str.some((word) => {
    return word.includes('a')
  })
};

console.log(doSomeWordsHaveAnA(words))

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
