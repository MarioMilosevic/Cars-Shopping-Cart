"use strict";
import { displayCars } from "./helpers";
import { displayOptions } from "./helpers";
import { filter } from "./helpers";
import { sort } from "./helpers";
import { deleteDiv } from "./helpers";
import { focusHandler } from "./helpers";
import { cars } from "./constants";
import { data } from "./constants";

const {
  app,
  filterBtn,
  clearBtn,
  sortBtn,
  filterOptions,
  sortOptions,
  available,
  unavailable,
  ascending,
  decending,
  optionsArray,
} = data();

displayCars(app, cars);
const carBtn = document.querySelectorAll(".carBtn");
clearBtn.addEventListener("click", function () {
  clearOptions();
});

filterBtn.addEventListener("click", function () {
  displayOptions(filterOptions);
});

sortBtn.addEventListener("click", function () {
  displayOptions(sortOptions);
});

available.addEventListener("click", function () {
  filter(cars, true, app);
});

unavailable.addEventListener("click", function () {
  filter(cars, false, app);
});

ascending.addEventListener("click", function () {
  sort(cars, "ascending", app);
});

decending.addEventListener("click", function () {
  sort(cars, "decending", app);
});

carBtn.forEach((btn) => {
  btn.addEventListener("click", deleteDiv);
});

document.body.addEventListener("click", function (e) {
  focusHandler(e, filterBtn, sortBtn, optionsArray);
});
