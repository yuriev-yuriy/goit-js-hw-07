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

ingredients.forEach((ingredient) => {
  const newItem = createListItem(ingredient);
  console.log(newItem);
  list.appendChild(newItem);
});

function createListItem(text) {
  const li = document.createElement("li");

  li.textContent = text;
  return li;
}
