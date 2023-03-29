// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = parseInt
  prompt("Choose a number between 8 and 128");

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt
    prompt("Please choose a number between 8 and 128"); 
  }
  
  // Character types
  var lowercase = confirm("Include lowercase letters?");
  var uppercase = confirm("Include uppercase letters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");

  while (!lowercase &&!uppercase &&!numeric &&!special) {
    alert("You must choose at least one character type.");
  }
    var password = "";
    var possibleCharacters = "";
    var characterTypes = "";

    if (lowercase) {
      possibleCharacters += "abcdefghijklmnopqrstuvwxyz";
      characterTypes += "lowercase";
    }
    if (uppercase) {
      possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      characterTypes += "uppercase";
    }
    if (numeric) {
      possibleCharacters += "0123456789";
      characterTypes += "numeric";
    }
    if (special) {
      possibleCharacters += "!@#$%^&*()_+";
      characterTypes += "special";
    }
    alert("You have selected: " + characterTypes + ".");

    for (var i = 0; i < passwordLength; i++) {
      password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }
      console.log(password);
      return password;

}
  function writePassword() {
    var passwordLength = generatePassword(); 
    var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
