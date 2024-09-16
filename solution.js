const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  const allAreGreater = nums.every((num) => {
    return num > 2;
  });
  return allAreGreater;
};

const isEveryWordShorterThan7 = (word) => {
  const isItShorter = words.every((word) => {
    return word.length < 7;
  });
  return isItShorter;
};

// Filter

const arrayLessThan5 = (nums) => {
  return nums.filter((num) => {
    return num < 5;
  });
};

const arrayOddLengthWords = (words) => {
  return words.filter((word) => {
    return word.length % 2 !== 0;
  });
};

// Find

const firstValDivisibleBy4 = (nums) => {
  return nums.find((num) => {
    return num % 4 === 0;
  });
};

const firstWordLongerThan4Char = (words) => {
  const greaterThanFour = words.find((word) => {
    return word.length > 4;
  });
  return greaterThanFour;
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  const numDivisibleByThree = nums.findIndex((num) => {
    return num % 3 === 0;
  });
  return numDivisibleByThree;
};

const firstWordIndexLessThan2Char = (words) => {
  const oneCharWord = words.findIndex((word) => {
    return word.length < 2;
  });
  return oneCharWord;
};

// For Each

const logValuesTimes3 = (nums) => {
  nums.forEach((num) => {
    const valueTimesThree = num * 3;
    console.log(valueTimesThree);
  });
};

// Example 2: Log words with exclamation
const logWordsWithExclamation = (words) => {
  words.forEach((word) => {
    const emphasizedWord = `${word}!`;
    console.log(emphasizedWord);
  });
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  const numsTimesIndex = nums.map((num, index) => {
    return num * num * index;
  });
  return numsTimesIndex;
};

const arrayWordsUpcased = (words) => {
  const upperCaseWords = words.map((word) => {
    return word.toUpperCase();
  });
  return upperCaseWords;
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some((num) => {
    return num % 7 === 0;
  });
};

const doSomeWordsHaveAnA = (words) => {
  return words.some((word) => {
    return word.includes("A") || word.includes("a");
  });
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
