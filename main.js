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
  divBtnHtml
} = data();
displayCars(root, cars);
console.log(root);
clearBtn.addEventListener('click', function(){
    clearOptions()
})

filterBtn.addEventListener("click", function () {
  displayOptions(filterOptions);
});

sortBtn.addEventListener("click", function () {
  displayOptions(sortOptions);
});

available.addEventListener("click", function () {
  filter(cars, true, root);
});

unavailable.addEventListener("click", function () {
  filter(cars, false, root);
});

ascending.addEventListener("click", function () {
  sort(cars, "ascending", root);
});

decending.addEventListener("click", function () {
  sort(cars, "decending", root);
});

