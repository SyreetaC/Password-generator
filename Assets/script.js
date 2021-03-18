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

let passwordLength;
let isLowerCase;
let isUpperCase;
let isNumbers;
let isSpecial;

let password = [];

//pushing getOptionsArray from options array.
function getOptionsArray() {
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
}

//for loop to go through options array
function collectPassword() {
  const passwordArray = [];
  for (let i = 0; i < passwordLength; i++) {
    const characters = passwordArray.push(characters);
  }
}

//choosing random characters
function getCharacters() {
  const characters =
    getOptionsArray[Math.floor(Math.random() * getOptionsArray.length)];
  return getCharacters;
}

const generatePassword = function () {
  let password = "";
  let passwordLength = prompt("What length do you want your password to be?");
  // Validates the length of the password.
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(typeof passwordLength);
    passwordLength = parseInt(passwordLength, 10);
    console.log(typeof passwordLength);
    passwordLength;
    // Confirms for character types.
    if (passwordLength) {
      isSpecial = confirm("Do you want to include any special characters?");
      console.log(isSpecial);

      isUpperCase = confirm(
        "Do you want to include any upper case characters?"
      );
      console.log(isUpperCase);

      isLowerCase = confirm(
        "Do you want to include any lower case characters?"
      );
      console.log(isLowerCase);

      isNumbers = confirm("Do you want to include any numbers?");
      console.log(isNumbers);
    }

    getOptionsArray();
    console.log("hello");

    //alert for character numbers
  } else {
    const tryAgain = alert("Choose a length between 8 and 128 characters.");
  }

  // getOptionsArray();
  // collectPassword();
  // getCharacters();

  // console.log(password);
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
