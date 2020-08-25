"use strict";
console.log(
  `В списке ${document.querySelector("ul").children.length} категории`
);

const headerRef = document.querySelectorAll(".item");
headerRef.forEach.call(headerRef, (element) => {
  console.log(`Категория: ${element.querySelector("h2").textContent}`);
  console.log(`Количество элементов: ${element.querySelectorAll("li").length}`);
});
