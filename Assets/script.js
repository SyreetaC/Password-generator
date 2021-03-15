// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  const passwordLength = prompt("What length do you want your password to be?");
  // console.log(passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("Correct");
    return password;
  } else {
    const tryAgain = alert("Choose a length between 8 and 128 characters.");
    console.log("Try again");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
