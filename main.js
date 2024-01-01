"use strict";
import {
  displayCars,
  filter,
  sort,
  deleteDiv,
  displayOptions,
  clearFilters,
} from "./helpers";
import { cars, data } from "./constants";
import { Car, carManager, UI } from "./classes";
const {
  app,
  filterBtn,
  clearBtn,
  available,
  unavailable,
  ascending,
  decending,
  carDivs
} = data();

const data1 = [...cars];

data1.forEach((el) => {
  const car = new Car(el);
  carManager.add(car);
});


displayCars(carDivs, carManager.arrayCurrentState());



clearBtn.addEventListener("click", function () {
  carManager.setState(data1)
  carDivs.innerHTML = ''
  displayCars(carDivs, carManager.arrayCurrentState());
});

filterBtn.addEventListener("change", function () {
  let selectedOption = this.value;
  const currentState = carManager.arrayCurrentState()
  console.log('pravo stanje arraya',currentState);
  if (selectedOption === "available") {
    carManager.availableCars(currentState)
    carDivs.innerHTML = ''
    displayCars(carDivs, carManager.availableCars(currentState))
    console.log(currentState);
  } else if (selectedOption === "unavailable") {
    carManager.unavailableCars(carManager.arrayCurrentState(currentState))
    carDivs.innerHTML = ''
    displayCars(carDivs, carManager.unavailableCars(currentState))
    console.log(currentState);
  }
});


sortBtn.addEventListener("change", function () {
  let selectedOption = this.value;
  const currentState = carManager.arrayCurrentState()
  console.log('pravo stanje arraya',currentState);
  if (selectedOption === "decending") {
 const decending = carManager.decending(currentState)
  carDivs.innerHTML = ''
  displayCars(carDivs, carManager.decending(decending))
} else if (selectedOption === "ascending") {
  const ascending = carManager.ascending(currentState)
  carDivs.innerHTML = ''
  displayCars(carDivs, carManager.ascending(ascending))
  console.log('ascending');
  }
});



// Sortiranje rastuce
ascending.addEventListener("click", function () {
  sort(cars, "ascending", app);
});
// Sortiranje opadajuce
decending.addEventListener("click", function () {
  sort(cars, "decending", app);
});

// carBtn.forEach((btn) => {
//   btn.addEventListener("click", deleteDiv);
// });

// Na klik van filter ili sort, oni postaju nevidljivi
// document.body.addEventListener("click", function (e) {
//   focusHandler(e, filterBtn, sortBtn, optionsArray);
// });
