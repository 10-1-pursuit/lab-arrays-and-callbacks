const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  //


return nums.every((element) => {
   return element > 2

})

};


   



const isEveryWordShorterThan7 = () => {
  //
  return words.every(element => element.length < 7);
}

  


// Filter

const arrayLessThan5 = () => {
  //
  
  return nums.filter(element => element < 5);

     }
  

  


const arrayOddLengthWords = () => {
  //

  return words.filter(element => element.length % 2 === 1);
};

// Find

const firstValDivisibleBy4 = () => {
  //

  return nums.find(element => element % 4 === 0);

}
const firstWordLongerThan4Char = () => {
  return words.find(element => element.length > 4);
}
  //


// Find Index

const firstNumIndexDivisibleBy3 = () => {

  return nums.findIndex(element => element % 3 === 0);
  //
};

const firstWordIndexLessThan2Char = () => {

  return words.findIndex(element => element.length < 2);
  //
};

// For Each

const logValuesTimes3 = () => {
  //
  nums.forEach(element => console.log(element * 3));
};

const logWordsWithExclamation = () => {

   words.forEach(element => console.log(`${element}!`));
  //
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  //

  return nums.map((element, index) => element ** 2 * index);
};

const arrayWordsUpcased = () => {

  return words.map(element => element.toUpperCase());
  //
};

// Some

const areSomeNumsDivisibleBy7 = () => {

  return nums.some(element => element % 7 === 0);
  //
};

const doSomeWordsHaveAnA = () => {

  return words.some(element => element.includes('a'));
  
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
