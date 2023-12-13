const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (numbers) => {
  return numbers.every((num) => num > 2);
};

const isEveryWordShorterThan7 = (word) => {
  return word.every((w) => w.length < 7);
  
};

// Filter

const arrayLessThan5 = (arr) => {
  return arr.filter(x => x < 5);
  //
};

const arrayOddLengthWords = (arr) => {
  return arr.filter((el) => el.length % 2 !== 0)
  //
};

// Find

const firstValDivisibleBy4 = (val) => {
  const result = val.find((n) => n % 4 === 0);
  return result
  //
};

const firstWordLongerThan4Char = (word) => {
  return word.find((w) => w.length > 4);
  //
};

// Find Index

const firstNumIndexDivisibleBy3 = (index) => {
  return index.findIndex((i) => i % 3 === 0);
  //
};

const firstWordIndexLessThan2Char = (index) => {
return index.findIndex((i)=>i<2===0)

  //
};

// For Each

const logValuesTimes3 = (val) => {
   val.forEach((num)=>{
    console.log(num*3)
  });
  }

  //


const logWordsWithExclamation = (words) => {
words.forEach((excl)=>{
  console.log(`${excl}!`)
})
};

// Map

const arrayValuesSquaredTimesIndex = (arr) => {
  return arr.map((value, index) => value * value * index );

  //
};

const arrayWordsUpcased = (arr) => {
  return arr.map((word) => word.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some((n) => n % 7 === 0);

};

const doSomeWordsHaveAnA = (words) => {
  return words.some((w) => w.includes("a"));

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
