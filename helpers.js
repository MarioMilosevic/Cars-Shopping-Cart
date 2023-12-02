"use strict";

export const displayCars = (root, arr) => {
  arr.forEach((el) => {
    const carDiv = document.createElement("div");
    const carButton = document.createElement("button");
    carDiv.classList.add("car");
    carDiv.appendChild(carButton);
    carButton.textContent = "X";
    carDiv.textContent = `${el.name}: ${el.brand}, ${el.manufacturedYear}, ${
      el.doors
    } doors, price:${el.price}$. Is available? ${
      el.available === true ? "✅" : "❌"
    }`;
    root.appendChild(carDiv);
  });
};

export const displayOptions = (el) => {
    el.style.opacity === '1' ? el.style.opacity = '0' : el.style.opacity = "1"
};
