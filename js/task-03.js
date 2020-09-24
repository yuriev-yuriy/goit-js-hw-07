"use strict";

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector("#gallery");
const createGallery = (obj) => {
  list.insertAdjacentHTML("afterbegin", "<li></li>");
  const listItemRef = document.querySelector("#gallery > li");
  const imgRef = document.createElement("img");
  imgRef.classList.add("img-flex");

  imgRef.src = obj.url;
  imgRef.alt = obj.alt;
  imgRef.width = "200";
  listItemRef.appendChild(imgRef);
  return listItemRef;
};
const imageList = images.reverse().map((image) => createGallery(image));

list.append(...imageList);
