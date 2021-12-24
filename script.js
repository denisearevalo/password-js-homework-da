// Assignment Code
var generateBtn = document.querySelector("#generate");
const lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const digit = '123456789'.split('');
const symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~\\".split('');

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
    var generatePw = ""
    var charAvail = []
    var pwLength = parseInt(window.prompt("How many characters do you want your new code to be? Note: has to be between 8 and 128."))
    // var input = ""

    while (isNaN(pwLength) || (pwLength <8) || (pwLength >128)) (
        pwLength = parseInt(window.prompt ("Error! Entry should be between 8 and 128. Try again!"))
    )
    while (charAvail.length === 0) {
        if (window.confirm("Do you want it to have lowercase letters?"))
            charAvail = charAvail.concat(lower);
        if (window.confirm("Do you want it to have uppercase letters?"))
            charAvail = charAvail.concat(upper);
        if (window.confirm("Do you want it to have numbers?"))
            charAvail = charAvail.concat(digit);
        if (window.confirm("Do you want it to have symbols?"))
            charAvail = charAvail.concat(symbol);
        if (charAvail.length ===0) {
            window.alert("Error! Based on the selections a password cannot be created. Try again!")
        // if (input === null){
        //     return;
        }
    }
    
    for(var i = 0; i < pwLength; i++){

        generatePw += charAvail[Math.floor(Math.random() * charAvail.length)]
    }
    return generatePw;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var pwValid =true;
// var pwlength =prompt("Would you like the password to be between 8 and 128?");


// while (pwValid = false); {
//     if ((pwlength >= 8) && (pwlength <= 128))
//     pwValid = true;
// }
// if ((pwlength < 8) || (pwlength > 128)) {
//     pwValid = false;
// }
//     if ((pwlength < 8) ||(pwlenth > 128))