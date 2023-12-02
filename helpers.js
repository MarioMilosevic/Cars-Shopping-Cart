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

const removeDivs = (arr) => {
  arr.forEach((el) => el.remove());
};

const getCars = (root) => {
  const currentDivsNodeList = root.querySelectorAll(".car");
  const currentDivs = [...currentDivsNodeList];
  return currentDivs;
  //   getCars(app);
};

export const filter = (arr, condition, root) => {
  const currentDivsNodeList = root.querySelectorAll(".car");
  const currentDivs = [...currentDivsNodeList];
  removeDivs(currentDivs);
  const result = arr.filter((el) => el.available === condition);
  displayCars(root, result);
};

export const sort = (arr, condition, root) => {
  const currentDivsNodeList = root.querySelectorAll(".car");
  console.log(currentDivsNodeList);
  const currentDivs = [...currentDivsNodeList];
  console.log(currentDivs);
  removeDivs(currentDivs);
  const result = arr.sort((a, b) => {
    if (condition === "ascending") {
        return b.price - a.price;
    } else if(condition === 'decending'){
        return a.price - b.price;
    }
  });
  displayCars(root, result);
};
