// Assignment Code
var generateBtn = document.querySelector("#generate");

function passwordLength() {

  var length = prompt("Choose a number between 8 and 128");
}
  if (length < 8 || length > 128) {
    alert("Please choose a number between 8 and 128");
    return;
  }
    else { return length
    }

    // Write password to the #password input
    function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    }

  // Character types
  var lowercase = confirm("Include lowercase letters?");
  var uppercase = confirm("Include uppercase letters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");

  if (!lowercase &&!uppercase &&!numeric &&!special) {

    alert("You must choose at least one character type.");
    return;
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
    alert("You have selected: " + length + ".");

    for (var i = 0; i < length; i++) {
      password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
      
      console.log(password);
      return password;
    }
  
    passwordText.value = password;
  }
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
