// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  const passwordLength = prompt("What length do you want your password to be?");
  // Validates the length of the password.
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("correct"); // Confirms for characters in password.
    const specialChar = confirm(
      "Do you want to include any special characters?"
    );
    const upperCase = confirm("Do you want to include any UPPER CASE letters?");
    const lowerCase = confirm("Do you want to include any lower case letters?");
    const numerical = confirm("Do you want to include any numbers?");
  } else {
    const tryAgain = alert("Choose a length between 8 and 128 characters.");
  }
  // return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
