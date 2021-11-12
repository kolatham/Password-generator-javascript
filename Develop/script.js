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
  for (let i = 0; i < 8; i++) {
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
  }

  var includeNumbers = confirm("Include numbers in password.")
  console.log(includeNumbers)
  if(includeNumbers = true) then (userChoiceArray).concat(number_char_codes)

  var includeLowercase = confirm("Include lowercase in password.")
  console.log(includeLowercase)
  if(includeLowercase = true) then (userChoiceArray).concat(lowercase_char_codes)
  
  var includeSymbols = confirm( "Include symbols in password.")
  console.log(includeSymbols)
  if(includeSymbols = true) then (userChoiceArray).concat(symbol_char_codes)
  
  var includeUppercase = confirm ("Include uppercase characters.")
  console.log(includeUppercase)
  if (includeUppercase = true ) then (userChoiceArray).concat(
    uppercase_char_codes) 
    
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
