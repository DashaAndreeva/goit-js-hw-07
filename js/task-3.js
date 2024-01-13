"use strict";

const inputElem = document.querySelector("#name-input");
const spanElem = document.querySelector("#name-output");

inputElem.addEventListener("input", onInputChange);

function onInputChange() {
  const inputValue = inputElem.value.trim();

  spanElem.textContent = inputValue || "Anonymous";
}
