// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Character types
  var lowercase = confirm("Include lowercase letters?");
  var uppercase = confirm("Include uppercase letters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");
  if (!lowercase &&!uppercase &&!numeric &&!special) {
    alert("You must choose at least one character type.");
    return;

    passwordText.value = password;
  }
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
