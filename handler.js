'use strict';

module.exports.generateRandomNumber = event => {
  const randomNumber = parseInt(Math.random() * 100);
  console.log("The random generated integer is: ", randomNumber);
  console.log("hello!!!")
  console.log("hello again")
  return randomNumber;
};
