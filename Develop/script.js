// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  const lowercase_char_codes = arrayFromLowToHigh(65,90)
  const uppercase_char_codes = arrayFromLowToHigh(97,122)
  const number_char_codes = arrayFromLowToHigh(48, 57)
  const symbol_char_codes = arrayFromLowToHigh(33,47).concat(
    arrayFromLowToHigh(58,64)
  ).concat(
    arrayFromLowToHigh(91,96)
  ).concat(
    arrayFromLowToHigh(123, 126)
  )
  console.log(lowercase_char_codes)
  console.log(uppercase_char_codes)
  console.log(number_char_codes)
  console.log(symbol_char_codes)

  function generatePassword (includeUppercase, includeNumbers, includeSymbols, includeLowercase) {
  const passwordCharacters = []
  for (let i = 0; i = passwordCharacters;) {
    let character = lowercase_char_codes[Math.floor(Math.random() * lowercase_char_codes.length)]
    console.log(character)
    character = String.fromCharCode(character)
    console.log(character) 
    passwordCharacters.push(character) }
    console.log(passwordCharacters)
  
  
}

function userPrompts () {
  var passwordLength = prompt ( "length of password")
  if (passwordLength < 8 || passwordLength > 128) {
    alert( "Password must have more than 8 and less than 128 characters")
    return
    generatePassword();
  }

  var includeNumbers = confirm("Would you like to include numbers in password? Cancel for no.")
  console.log(includeNumbers)
  if(includeNumbers === true) {
    charCodes = charCodes.concat(number_char_codes)
  }

  var includeLowercase = confirm("Would you like to include lowercase in password? Cancel for no.")
  console.log(includeLowercase)
  if(includeLowercase === true) {
    charCodes = charCodes.concat(lowercase_char_codes)
  }

  
  var includeSymbols = confirm( "Would you like to include symbols in password? Cancel for no.")
  console.log(includeSymbols)
  if(includeSymbols === true) {
    charCodes = charCodes.concat(symbol_char_codes)
  }

  
  var includeUppercase = confirm ("Would you like to include uppercase characters? Cancel for no.")
  console.log(includeUppercase)
  if (includeUppercase === true ) { 
    charCodes = charCodes.concat( uppercase_char_codes) 
  }
    
}

function writePassword () {
  userPrompts()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function arrayFromLowToHigh (low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
