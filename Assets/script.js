// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  const passwordLength = prompt("What length do you want your password to be?");
  console.log(passwordLength);

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
