const errorName = document.querySelector(".invalid-name");
const errorEmail = document.querySelector(".invalid-email");
const errorText = document.querySelector(".invalid-text");

const name = document.getElementById("name");
const email = document.getElementById("email");
const text = document.getElementById("message");
const form = document.getElementById("form-area");
const submitBtn = document.querySelector(".submit_btn");
const msgSent = document.getElementById("valid-msg");
const msgError = document.getElementById("error-msg-all");

msgSent.style.display = "none";
msgError.style.display = "none";

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patterMatches = regEx.test(email);
  return patterMatches;
}

function nameValidation() {
  event.preventDefault();

  if (name.value.length < 3) {
    errorName.style.display = "block";
  } else {
    errorName.style.display = "none";
  }

  if (validateEmail(email.value)) {
    errorEmail.style.display = "none";
  } else {
    errorEmail.style.display = "block";
  }

  if (text.value.length < 25) {
    errorText.style.display = "block";
  } else {
    errorText.style.display = "none";
  }

  if (
    errorName.style.display === "none" &&
    errorEmail.style.display === "none" &&
    errorText.style.display === "none"
  ) {
    console.log("working");
    msgSent.style.display = "block";
    msgError.style.display = "none";
  } else {
    console.log("no");
    msgSent.style.display = "none";
    msgError.style.display = "block";
  }
}

submitBtn.addEventListener("click", nameValidation);
