"use strict";

const formElem = document.querySelector(".login-form");

formElem.addEventListener("submit", onFormSumbit);

function onFormSumbit(e) {
  e.preventDefault();

  const userEmail = formElem.elements.email.value.trim();
  const userPassword = formElem.elements.password.value.trim();

  const userObject = {
    email: userEmail,
    password: userPassword,
  };

  if (userEmail === "" || userPassword === "") {
    alert("All form fields must be filled in");
  } else {
    console.log(userObject);
    formElem.reset();
  }
}
