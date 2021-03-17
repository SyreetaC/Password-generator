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

let optionsArray = [];

let isLowerCase;
let isUpperCase;
let isNumbers;
let isSpecial;

//pushing arrays from options array.
const arrays = () => {
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
  console.log(optionsArray);
  return optionsArray;
};

//for loop to go through options array
const collectPassword = (arrays) => {
  const passwordArray = [];
  for (let i = 0; i < passwordLength; i++) {
    const characters = passwordArray.push(characters);
  }
  return collectPassword;
};

//choosing random characters
const getCharacters = (arrays) => {
  const characters = arrays[Math.floor(Math.random() * arrays.length)];
  return getCharacters;
};

const generatePassword = function () {
  var password = "";
  let passwordLength = prompt("What length do you want your password to be?");
  // Validates the length of the password.
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(typeof passwordLength);
    passwordLength = parseInt(passwordLength, 10);
    console.log(typeof passwordLength);
    passwordLength;

    // Confirm for number of characters in password.
  } else {
    const tryAgain = alert("Choose a length between 8 and 128 characters.");
  }

  // Confirms for character types.
  if (passwordLength) {
    isSpecial = confirm("Do you want to include any special characters?");
    console.log(isSpecial);

    isUpperCase = confirm("Do you want to include any upper case characters?");
    console.log(isUpperCase);

    isLowerCase = confirm("Do you want to include any lower case characters?");
    console.log(isLowerCase);

    isNumbers = confirm("Do you want to include any numbers?");
    console.log(isNumbers);
  }
  arrays();
};

// return password;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
