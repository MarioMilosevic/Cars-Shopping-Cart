"use strict";
import { displayCars } from "./helpers";
import { displayOptions } from "./helpers";
import { filter } from "./helpers";
import { sort } from "./helpers";
import { data } from "./constants";
import { cars } from "./constants";

const {
  root,
  filterBtn,
  clearBtn,
  sortBtn,
  filterOptions,
  sortOptions,
  available,
  unavailable,
  ascending,
  decending,
} = data();
displayCars(app, cars);

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
