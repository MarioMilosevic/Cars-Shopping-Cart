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

// console.log(carManager);

displayCars(carDivs, carManager.arrayCurrentState());

// const carDivs = document.querySelectorAll('.carDiv')

  

// Uzimam auta i dugmad jer ih pravim programatski nakon pozivanja funkcije Displaycars()
// const carDiv = document.querySelectorAll(".car");
// const carDivArr = [...carDiv];
// // const carBtnArr = [...carBtn];

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

// Ocisti filter i sort (vrati prvobitne podatke)
clearBtn.addEventListener("click", function () {
  carManager.setState(data1)
  carDivs.innerHTML = ''
  displayCars(carDivs, carManager.arrayCurrentState());
});
// Prikazi opcije filtera
// filterBtn.addEventListener("click", function () {
//   displayOptions(filterOptions);
// });
// // Prikazi opcije sorta
// sortBtn.addEventListener("click", function () {
//   displayOptions(sortOptions);
// });
// Dostupni
available.addEventListener("click", function () {
  console.log("available");
  filter(cars, true, app);
});
// Nedostupni
unavailable.addEventListener("click", function () {
  filter(cars, false, app);
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
