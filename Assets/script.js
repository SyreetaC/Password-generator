// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowercaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const uppercaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const specialCharactersArray = ["/", "^", "?", "!", "*", "+", "-", "."];

const numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

let passwordLength;
let isLowerCase;
let isUpperCase;
let isNumbers;
let isSpecial;

//pushing getOptionsArray from options array.
function getOptionsArray() {
  const optionsArray = [];
  if (isLowerCase) {
    optionsArray.push(lowercaseArray);
  }
  if (isUpperCase) {
    optionsArray.push(uppercaseArray);
  }
  if (isNumbers) {
    optionsArray.push(numbersArray);
  }
  if (isSpecial) {
    optionsArray.push(specialCharactersArray);
  }
  return optionsArray;
}

//for loop to go through options array
function collectPassword(optionsArray) {
  const passwordArray = [];
  for (let i = 0; i < passwordLength; i++) {
    // get random choice
    const choiceArray = getRandomChoiceArray(optionsArray);
    console.log(choiceArray);
    // get random character from random choice array
    const character = getRandomCharacterFromChoiceArray(choiceArray);

    passwordArray.push(character);
  }
  return passwordArray;
}

function getRandomChoiceArray(optionsArray) {
  const randomChoiceIndex = Math.floor(Math.random() * optionsArray.length);

  return optionsArray[randomChoiceIndex];
}

//choosing random characters
function getRandomCharacterFromChoiceArray(choiceArray) {
  const randomIndex = Math.floor(Math.random() * choiceArray.length);
  return choiceArray[randomIndex];
}

function confirmChoices() {
  isSpecial = confirm("Do you want to include any special characters?");
  console.log(isSpecial);

  isUpperCase = confirm("Do you want to include any upper case characters?");
  console.log(isUpperCase);

  isLowerCase = confirm("Do you want to include any lower case characters?");
  console.log(isLowerCase);

  isNumbers = confirm("Do you want to include any numbers?");
  console.log(isNumbers);
}

const generatePassword = function () {
  passwordLength = prompt("What length do you want your password to be?");
  // Validates the length of the password.
  console.log(typeof passwordLength);
  passwordLength = parseInt(passwordLength, 10);
  console.log(typeof passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128) {
    // Confirms for character types.

    confirmChoices();

    const optionsArray = getOptionsArray();

    const passwordArray = collectPassword(optionsArray);

    console.log(passwordArray);

    return passwordArray.join("");
  } else {
    alert("Choose a length between 8 and 128 characters.");
  }
};

// return password;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
