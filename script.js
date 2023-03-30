// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = parseInt(
  prompt("Choose a number between 8 and 128"));

    if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8 and 128"); 
    return;
  }
  
  // Character types
  var lowercase = confirm("Include lowercase letters?");
  var uppercase = confirm("Include uppercase letters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");

    if (!lowercase &&!uppercase &&!numeric &&!special) {
    alert("You must choose at least one character type.");
    return;
  }
    var password = "";
    //var possibleCharacters = "";
    var characterTypes = "";

    if (lowercase) {
      characterTypes += "abcdefghijklmnopqrstuvwxyz";
       //possibleCharacters += "lowercase";
    }
    if (uppercase) {
      characterTypes += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      //possibleCharacters += "uppercase";
    }
    if (numeric) {
      characterTypes += "0123456789";
      //possibleCharacters += "numeric";
    }
    if (special) {
      characterTypes += "!@#$%^&*()_+";
      //possibleCharacters += "special";
    }
    alert("You have selected: " + characterTypes + ".");

    for (var i = 0; i < passwordLength; i++) {
      password += characterTypes[Math.floor(Math.random() * characterTypes.length)];
    }
      console.log(password);
      return password;

}
  function writePassword() {
    var password= generatePassword(); 
    var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
