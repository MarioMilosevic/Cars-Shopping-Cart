"use strict";

export const displayCars = (root, arr) => {
  arr.forEach((el) => {
    let fragment = document.createDocumentFragment();
    const carDiv = document.createElement("div");
    carDiv.classList.add("car");
    const carBtn = document.createElement("button");
    carBtn.textContent = "X";
    carBtn.classList.add("carBtn");
    carDiv.textContent = `Name: ${el.name}, ${el.brand}, ${
      el.manufacturedYear
    }, ${el.doors} doors, price:${el.price}$. ${
      el.available === true ? "✅" : "❌"
    }`;
    carDiv.appendChild(carBtn);
    fragment.appendChild(carDiv);
    root.appendChild(fragment);
  });
};

export const clearFilters = (root) => {
  // const currentDivs = getCurrentDivsList(root);
  // removeDivs(currentDivs);

  const currentDivs = getCurrentDivsList(root)
  removeDivs(currentDivs);
};

export const displayOptions = (el) => {
  const [child1, child2] = el.children;
  if (
    el.style.visibility === "visible" &&
    child1.style.visibility === "visible" &&
    child2.style.visibility === "visible"
  ) {
    el.style.visibility = "hidden";
    child1.style.visibility = "hidden";
    child2.style.visibility = "hidden";
  } else {
    el.style.visibility = "visible";
    child1.style.visibility = "visible";
    child2.style.visibility = "visible";
  }
};

export const removeDivs = (arr) => {
  arr.forEach((el) => el.remove());
};

const getCurrentDivsList = (root) => {
  const currentDivsNodeList = root.querySelectorAll(".car");
  const currentDivs = [...currentDivsNodeList];
  return currentDivs;
};

export const filter = (arr, condition, root) => {
  const currentDivs = getCurrentDivsList(root);
  removeDivs(currentDivs);
  const result = arr.filter((el) => el.available === condition);
  // result.forEach(car => )
  console.log(result);
  displayCars(root, result);
};

export const sort = (arr, condition, root) => {
  const currentDivs = getCurrentDivsList(root);
  removeDivs(currentDivs);
  const result = arr.sort((a, b) => {
    if (condition === "ascending") {
      return b.price - a.price;
    } else if (condition === "decending") {
      return a.price - b.price;
    }
  });
  displayCars(root, result);
};


export const deleteDiv = (e) => {
  const target = e.target;
  target.parentElement.remove();
};

export const focusHandler = (event, a, b, arr) => {
  if (event.target === a || event.target === b) {
    return;
  } else {
    arr.forEach((element) => {
      element.style.visibility = "hidden";
    });
  }
};
