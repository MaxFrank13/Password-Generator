window.addEventListener("DOMContentLoaded", function () {

  // **** Form selectors ****
  const form = document.querySelector(".form")
  const formHeader = document.querySelector(".form-header");
  const createBtn = document.querySelector("#create");
  const generateBtn = document.querySelector("#generate");
  const passwordTextBox = document.querySelector(".password")
  const numberDisplay = document.querySelector("#number-display");

  // **** Form inputs ****
  const desiredLength = document.getElementById("character-count");
  const includeUpperCase = document.getElementById("upper-case");
  const includeLowerCase = document.getElementById("lower-case");
  const includeNumbers = document.getElementById("numbers");
  const includeSpecChars = document.getElementById("spec-chars");
  const selectAll = document.getElementById("select-all");

  // **** Form Listeners ****
  generateBtn.addEventListener("click", function () {
    if (passwordTextBox.textContent !== "") {
      let answer = confirm("If you generate another password, the current one will disappear (all generated passwords have been logged to the console)");
      if (answer) {
        formSetup();
      }
    } else {
      formSetup();
    }
  })

  createBtn.addEventListener("click", function () {
    if (checkVals()) {
      getPassword(desiredLength.value, includeUpperCase.checked, includeLowerCase.checked, includeNumbers.checked, includeSpecChars.checked);
      generateBtn.classList.toggle("hide");
      createBtn.classList.toggle("hide");
      form.classList.add("hide");
      passwordTextBox.classList.remove("hide");
    } else {
      alert("please select at least 1 of the provided criteria")
    }
  });

  // default display
  numberDisplay.textContent = desiredLength.value;

  desiredLength.addEventListener("click", function () {
    numberDisplay.textContent = desiredLength.value;
  })

  // arrowkey listeners

  window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      desiredLength.value++;
    }
    if (e.key === "ArrowLeft") {
      desiredLength.value--;
    }
    numberDisplay.textContent = desiredLength.value;
  })

  // select all listener
  selectAll.addEventListener("click", function (e) {
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
      if (
        upper === false && /[A-Z]/.test(newVal) ||
        lower === false && /[a-z]/.test(newVal) ||
        nums === false && /[\d]/.test(newVal) ||
        specs === false && /[/s!"#$%&'()*+,-./:;<=>?@\\[\]^_`{|}~]/.test(newVal)
      ) { }
      else if (specs === true && /\s/.test(newVal)) {
        newPasswordArray.push("\xa0");
      }
      else {
        newPasswordArray.push(newVal);
      }
    }
    newPassword = newPasswordArray.join("");
    passwordTextBox.textContent = newPassword;

    console.log(newPassword);
  }

  function formSetup() {
    valueReset();
    generateBtn.classList.toggle("hide");
    createBtn.classList.toggle("hide");
    form.classList.remove("hide");
    passwordTextBox.classList.add("hide");
    formHeader.style.opacity = "0.7";
  }

  function valueReset() {
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

})
// end of window listener