// list of lowercase letters, uppercase letters, numbers, and special characters that can be used in password.
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '"', '#', '$', '%', '&', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'];

//function to prompt for length and type of characters
function promptPasswordChoices() {
    const length =
        prompt('Please enter your desired password length. Must be between 8 and 128 characters');

    if (length > 128 || length < 8) {
        alert("Password must be less than 8 and and no greater than 128 characters.")
        return;
    }

    if (isNaN(length) === true) {
        alert('Password length must be provided as a number');
        return;

    }

    const hasLowerCase = confirm(
        'Click OK to include lowercase characters.'
    );

    const hasUpperCase = confirm(
        'Click OK to include uppercase characters.'
    );

    const hasNumbers = confirm(
        'Click OK to include numbers.'
    );

    const hasSpecialCharacters = confirm(
        'Click OK to include special characters.'
    );

    if (
        hasLowerCase === false &&
        hasUpperCase === false &&
        hasNumbers === false &&
        hasSpecialCharacters === false
    ) {
        alert('At least one character type must be selected');
        return;
    }

    const passwordChoices = {
        length: length,
        hasLowerCase: hasLowerCase,
        hasUpperCase: hasUpperCase,
        hasNumbers: hasNumbers,
        hasSpecialCharacters: hasSpecialCharacters
    };

    return passwordChoices;
}


//function to get random element
function randomNumber(array) {
    var index = Math.floor(Math.random() * array.length);
    return array[index];
}

//function to generate password
function generatePassword() {

    const choices = promptPasswordChoices();
    const password = [];
    const possibleOptions = [];
    const guaranteedOptions = [];


    //conditionals to add character arrays into possible options array and push new random characters to guaranteed options
    if (choices.hasLowerCase) {
        possibleOptions = possibleOptions.concat(lowerCase);
        guaranteedOptions.push(randomNumber(lowerCase));
    }

    if (choices.hasUpperCase) {
        possibleOptions = possibleOptions.concat(upperCase);
        guaranteedOptions.push(randomNumber(upperCase));
    }

    if (choices.hasNumbers) {
        possibleOptions = possibleOptions.concat(numbers);
        guaranteedOptions.push(randomNumber(numbers));
    }

    if (choices.hasSpecialCharacters) {
        possibleOptions = possibleOptions.concat(specialCharacters);
        guaranteedOptions.push(randomNumber(specialCharacters));
    }
}

// Assignment Code
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