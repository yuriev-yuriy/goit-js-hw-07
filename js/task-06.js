"use strict";

const inputRef = document.querySelector("#validation-input[data-length]");
const inputLengthRef = inputRef.dataset.length;
const numInputLengthRef = Number(inputLengthRef);

const colorValidation = () => {
  inputRef.value.length !== numInputLengthRef
    ? inputRef.classList.add("invalid")
    : inputRef.classList.replace("invalid", "valid");
};

inputRef.addEventListener("change", colorValidation);
