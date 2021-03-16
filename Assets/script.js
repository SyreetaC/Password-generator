// Assignment Code
var generateBtn = document.querySelector("#generate");

// const lowercaseArray = [
//   a,
//   b,
//   c,
//   d,
//   e,
//   f,
//   g,
//   h,
//   i,
//   j,
//   k,
//   l,
//   m,
//   n,
//   o,
//   p,
//   q,
//   r,
//   s,
//   t,
//   u,
//   v,
//   w,
//   x,
//   y,
//   z,
// ];
// const uppercaseArray = [
//   A,
//   B,
//   C,
//   D,
//   E,
//   F,
//   G,
//   H,
//   I,
//   J,
//   K,
//   L,
//   M,
//   N,
//   O,
//   P,
//   Q,
//   R,
//   S,
//   T,
//   U,
//   V,
//   W,
//   X,
//   Y,
//   Z,
// ];
// const specialCharactersArray = ["[ ]  ^ $ . | ? * + ( )"];

function generatePassword() {
  var password = "";
  const passwordLength = prompt("What length do you want your password to be?");
  // Validates the length of the password.
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("correct"); // Confirms for number of characters in password.
    const isSpecial = confirm("Do you want to include any special characters?");
  } else {
    const tryAgain = alert("Choose a length between 8 and 128 characters.");
  }
  if ((isSpecial = confirm)) {
    const isUpperCase = confirm(
      "Do you want to include any UPPER CASE letters?"
    );
    const isLowerCase = confirm(
      "Do you want to include any lower case letters?"
    );
    const isNumbers = confirm("Do you want any numbers?");
  }
  console.log("all correct");
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
