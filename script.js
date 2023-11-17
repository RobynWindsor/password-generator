// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

// Function to prompt user for password options
function getPasswordOptions() {
  var userResponse = prompt("Please choose a number between 8 and 10");
  userResponse = parseInt(userResponse);
  console.log(userResponse);
  if (!userResponse) {
    console.log(
      "Whoops! It seems you accidentally entered a letter instead. Please try and enter a number again, thanks!"
    );
    alert(
      "Whoops! It seems you accidentally entered a letter instead. Please try and enter a number again, thanks!"
    );
  } else if (userResponse >= 1 && userResponse <= 10) {
    console.log("success");
  } else {
    console.log("It is not a number between a range");
    alert('Whoops" Number not in range. Please try again :)');
  }
  return userResponse;
}
getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}
let randomUpperCase = getRandom(upperCaseCharacters);
let randomNumner = getRandom(numericCharacters);
let randomLowerCase = getRandom(LowerCaseCharacters);
let randomSpecialCharacters = getRandom(specialCharacters);

console.log({ randomLowerCase });
// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
