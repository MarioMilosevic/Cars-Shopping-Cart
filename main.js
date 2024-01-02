"use strict";
import { displayCars } from "./helpers";
import { cars, data } from "./constants";
import { Car, carManager, UI } from "./classes";
const { filterBtn, clearBtn, carDivs } = data();

const data1 = [...cars];

data1.forEach((el) => {
  const car = new Car(el);
  carManager.add(car);
});

displayCars(carDivs, carManager.arrayCurrentState());

const currentStateCopy = carManager.makeFakeArr()
console.log(currentStateCopy);

clearBtn.addEventListener("click", function () {
  carManager.setState(data1);
  carDivs.innerHTML = "";
  displayCars(carDivs, carManager.arrayCurrentState());
});

filterBtn.addEventListener("change", function () {
  sortBtn.value = "";
  let selectedOption = this.value;
  if (selectedOption === "available") {
    carManager.availableCars(currentStateCopy);
    carDivs.innerHTML = "";
    displayCars(carDivs, carManager.availableCars(currentStateCopy));
  } else if (selectedOption === "unavailable") {
    carManager.unavailableCars(carManager.arrayCurrentState(currentStateCopy));
    carDivs.innerHTML = "";
    displayCars(carDivs, carManager.unavailableCars(currentStateCopy));
  } else {
    carDivs.innerHTML = "";
    displayCars(carDivs, carManager.arrayCurrentState());
  }
});

sortBtn.addEventListener("change", function () {
  filterBtn.value = "";
  let selectedOption = this.value;
  const currentStateCopy = carManager.arrayCurrentState();
  if (selectedOption === "decending") {
    const decending = carManager.decending(currentStateCopy);
    carDivs.innerHTML = "";
    displayCars(carDivs, carManager.decending(decending));
  } else if (selectedOption === "ascending") {
    const ascending = carManager.ascending(currentStateCopy);
    carDivs.innerHTML = "";
    displayCars(carDivs, carManager.ascending(ascending));
  } else {
    carDivs.innerHTML = "";
    displayCars(carDivs, currentStateCopy);
  }
});
