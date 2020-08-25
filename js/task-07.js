"use strict";

const inputRef = document.querySelector("#font-size-control");

const spanRef = document.querySelector("#text");

inputRef.min = "0";
inputRef.max = "100";
inputRef.step = "10";
inputRef.value = "10";

const changeTextSize = (event) => {
  const {
    target: { valueAsNumber },
  } = event;
  spanRef.style["font-size"] = `${valueAsNumber}px`;
};
inputRef.addEventListener("input", changeTextSize);
