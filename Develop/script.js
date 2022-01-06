// **** Form selectors ****
const form = document.querySelector(".form")
const createBtn = document.querySelector("#create");
const generateBtn = document.querySelector("#generate");
let passwordTextBox = document.querySelector(".password")

// **** Form inputs ****
let desiredLength = document.getElementById("character-count");
let includeUpperCase = document.getElementById("upper-case");
let includeLowerCase = document.getElementById("lower-case");
let includeNumbers = document.getElementById("numbers");
let includeSpecChars = document.getElementById("spec-chars");
let selectAll = document.getElementById("select-all");

// **** Button Listeners ****
generateBtn.addEventListener("click", function () {
  reset();
  generateBtn.classList.toggle("hide");
  createBtn.classList.toggle("hide");
  form.classList.remove("hide");
  passwordTextBox.classList.remove("hide");
})

createBtn.addEventListener("click", function () {
  if (checkVals()) {
    getPassword(desiredLength.value, includeUpperCase.checked, includeLowerCase.checked, includeNumbers.checked, includeSpecChars.checked);
    generateBtn.classList.toggle("hide");
    createBtn.classList.toggle("hide");
    form.classList.add("hide");
  } else {
    alert("please select at least 1 of the provided criteria")
  }
});

selectAll.addEventListener("click", function(e) {
  if (e.target.checked === true) {
    includeUpperCase.checked = true;
    includeLowerCase.checked = true;
    includeNumbers.checked = true;
    includeSpecChars.checked = true;
  } else {
    includeUpperCase.checked = false;
    includeLowerCase.checked = false;
    includeNumbers.checked = false;
    includeSpecChars.checked = false;
  };
})

// **** Functions ****

function getPassword(length, upper, lower, nums, specs) {
  let newPasswordArray = []
  let newPassword = "";

  for (let i = 0; newPasswordArray.length < length; i++) {
    let newVal = String.fromCharCode(Math.floor((Math.random() * 95) + 32));
    if (upper === false && /[A-Z]/.test(newVal)) { }
    else if (lower === false && /[a-z]/.test(newVal)) { }
    else if (nums === false && /[\d]/.test(newVal)) { }
    else if (specs === false && /[ !"#$%&'()*+,-./:;<=>?@\\[\]^_`{|}~]/.test(newVal)) { }
    else {
      newPasswordArray.push(newVal);
    }
  }
  newPassword = newPasswordArray.join("");
  passwordTextBox.textContent = newPassword;

  console.log(newPassword);
  console.log(typeof newPassword);
}

function reset() {
  includeUpperCase.checked = false;
  includeLowerCase.checked = false;
  includeNumbers.checked = false;
  includeSpecChars.checked = false;
  selectAll.checked = false;
  passwordTextBox.textContent = "";
}

function checkVals() {
  if (
    includeUpperCase.checked === false &&
    includeLowerCase.checked === false &&
    includeNumbers.checked === false &&
    includeSpecChars.checked === false
  ) {
    return false;
  } else {
    return true;
  }
}

function massSelect() {
  if (selectAll.checked === true) {
    includeUpperCase.checked = false;
    includeLowerCase.checked = false;
    includeNumbers.checked = false;
    includeSpecChars.checked = false;
  }
}


