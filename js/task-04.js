"use strict";

const spanRef = document.querySelector("#value");
console.dir(spanRef);
let counterValue = 0;

const dicrement = () => {
  counterValue -= 1;
  spanRef.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  spanRef.textContent = counterValue;
};

const btnDicr = document.querySelector("#counter > button");
const btnIncr = document.querySelector("#counter > button:last-child");

btnDicr.addEventListener("click", dicrement);
btnIncr.addEventListener("click", increment);
