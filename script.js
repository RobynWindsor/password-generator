// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(
    prompt(
      'How many characters would you like your password to contain? (8-12)'
    )
  );

  if (isNaN(length) || length < 8 || length > 12) {
    alert('Please enter a valid number between 8 and 12.');
    return;
  }

  var includeSpecial = confirm(
    'Click OK to confirm including special characters.'
  );
  var includeNumeric = confirm(
    'Click OK to confirm including numeric characters.'
  );
  var includeUppercase = confirm(
    'Click OK to confirm including uppercase characters.'
  );
  var includeLowercase = confirm(
    'Click OK to confirm including lowercase characters.'
  );

  if (
    !(includeSpecial || includeNumeric || includeUppercase || includeLowercase)
  ) {
    alert('At least one character type must be selected.');
    return;
  }
  return {
    length: length,
    includeSpecial: includeSpecial,
    includeNumeric: includeNumeric,
    includeUppercase: includeUppercase,
    includeLowercase: includeLowercase,
  };
}
// prompt 'how many characters would you like your password to contain?
// length must be between 8 and 12
// password length must be provided as a number
// if satisfied then second prompt  - 'click okay to confirm special characters'
// if satisfied prompt - 'click okay to confirm including numeric characters'
// if satisified prompt - 'click okay to confirm including uppercase characters'
// if satisified prompt - 'click okay to confirm including lowercase characters'

// git Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// // Function to generate password with user input
// function generatePassword() {
//   var options = getPasswordOptions();
//   if (!options) {
//     return ''; // Return an empty string if options are not valid
//   }
//   var possibleCharacters = [];
//   var guaranteedCharacters = [];

//   if (options.includeSpecial) {
//     possibleCharacters = possibleCharacters.concat(specialCharacters);
//     guaranteedCharacters.push(getRandom(specialCharacters));
//   }

//   if (options.includeNumeric) {
//     possibleCharacters = possibleCharacters.concat(numericCharacters);
//     guaranteedCharacters.push(getRandom(numericCharacters));
//   }

//   if (options.includeUppercase) {
//     possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
//     guaranteedCharacters.push(getRandom(upperCasedCharacters));
//   }

//   if (options.includeLowercase) {
//     possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
//     guaranteedCharacters.push(getRandom(lowerCasedCharacters));
//   }
//   for (var i = guaranteedCharacters.length; i < options.length; i++) {
//     guaranteedCharacters.push(getRandom(possibleCharacters));
//   }

//   // shuffle the guaranteed characters array to randomize the order
//   guaranteedCharacters = guaranteedCharacters.sort(function () {
//     return Math.random() - 0.5;
//   });
//   return guaranteedCharacters.join('');
// }

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);
