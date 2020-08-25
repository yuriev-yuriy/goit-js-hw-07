"use strict";

const inputRef = document.querySelector("#name-input");
console.log(inputRef);
const spanRef = document.querySelector("#name-output");
console.log(spanRef);

const changeText = () => {
  return spanRef.textContent.length > 1
    ? (spanRef.textContent = inputRef.value)
    : (spanRef.textContent = "незнакомец");
};

inputRef.addEventListener("input", changeText);
