"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const list = document.querySelector("#ingredients");

function createListItem(ingredient) {
  const li = document.createElement("li");
  li.textContent = ingredient;

  return li;
}

const addEl = ingredients.map((ingredient) => createListItem(ingredient));

list.append(...addEl);
