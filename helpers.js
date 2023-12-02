"use strict";

export const displayCars = (root, arr) => {
  arr.forEach((el) => {
    const carDiv = document.createElement("div");
    const carButton = document.createElement("button");
    carDiv.classList.add("car");
    carDiv.appendChild(carButton);
    carButton.textContent = "X";
    carDiv.textContent = `Name: ${el.name}, ${el.brand}, ${
      el.manufacturedYear
    }, ${el.doors} doors, price:${el.price}$. Is available? ${
      el.available === true ? "✅" : "❌"
    }`;
    root.appendChild(carDiv);
  });
};

export const displayOptions = (el) => {
  el.style.visibility === "visible"
    ? (el.style.visibility = "hidden")
    : (el.style.visibility = "visible");
};

export const filter = (arr, condition, root) => {
  console.log(root);
  const currentDivsNodeList = root.querySelectorAll(".car");
  const currentDivs = [...currentDivsNodeList];
  console.log(currentDivs);
  currentDivs.forEach((div) => {
    div.remove();
  });
  const result = arr.filter((el) => el.available === condition);
  displayCars(root, result);
  console.log(result);
};
