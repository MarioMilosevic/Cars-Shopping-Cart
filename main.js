"use strict";
import { displayCars } from "./helpers";
import { displayOptions } from "./helpers";
import { filter } from "./helpers";
import { sort } from "./helpers";
import { data } from "./constants";
import { cars } from "./constants";

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
  decending
} = data();
displayCars(app, cars);
const carBtn = document.querySelectorAll('.carBtn')
clearBtn.addEventListener("click", function () {
  clearOptions();
});

filterBtn.addEventListener("click", function () {
  console.log("radi");
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

carBtn.forEach(btn => {
btn.addEventListener("click", function (e) {
  console.log(e);
  const target = e.target
  target.parentElement.remove()
});
})
  

console.log(carBtn);
