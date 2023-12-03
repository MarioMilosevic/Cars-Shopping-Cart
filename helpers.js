"use strict";
import { data } from "./constants";
const {divBtnHtml} = data()
export const displayCars = (root, arr) => {
  arr.forEach((el) => {
    let fragment = document.createDocumentFragment()
    const carDiv = document.createElement('div')
    carDiv.classList.add('car')
    const carBtn = document.createElement('button')
    carBtn.textContent= 'X'
    carBtn.classList.add('carBtn')
    carDiv.textContent = `Name: ${el.name}, ${el.brand}, ${
        el.manufacturedYear
    }, ${el.doors} doors, price:${el.price}$. ${
        el.available === true ? "✅" : "❌"
    }`;
    carDiv.appendChild(carBtn)
    fragment.appendChild(carDiv)
    root.appendChild(fragment)
    // const carDiv = document.createElement("div").
    // const carButton = document.createElement("button");
    // carDiv.classList.add("car");
    // carButton.classList.add('carBtn')
    // carButton.textContent = "X";
    // carDiv.appendChild(document.createElement('button'));
    // console.log(carDiv);
    // root.appendChild(carDiv)
    // root.appendChild(carButton);
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

export const clearOptions = () => {
console.log('tek treba da se uradi');
}