// Assignment Code
const generateBtn = document.querySelector("#generate");


let desiredLength = 128; // change to range input listener for number between 8 and 128
let includeUpperCase = true; // radio button listener
let includeLowerCase = true; // radio button listener
let includeNumbers = true; // radio button listener
let includeSpecChars = true; // radio button listener
let newPassword = "";

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  getPassword(desiredLength, includeUpperCase, includeLowerCase, includeNumbers, includeSpecChars);
});


function getPassword(length, upper, lower, nums, specs) {
  let newPasswordArray = []

  for (let i = 0; newPasswordArray.length < length; i++) {
    let newVal = String.fromCharCode(Math.floor((Math.random() * 95) + 32));
    if (upper === false && /[A-Z]/.test(newVal)) {}
    else if (lower === false && /[a-z]/.test(newVal)) {}
    else if (nums === false && /[\d]/.test(newVal)) {}
    else if (specs === false && /[ !"#$%&'()*+,-./:;<=>?@\\[\]^_`{|}~]/.test(newVal)) {}
    else {
    newPasswordArray.push(newVal);
    }
  }
  newPassword = newPasswordArray.join('');
  console.log(newPassword);
}


