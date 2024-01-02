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

let currentStateCopy = [...carManager.arrayCurrentState()]

clearBtn.addEventListener("click", function () {
  carManager.setState(data1);
  carDivs.innerHTML = "";
  displayCars(carDivs, carManager.arrayCurrentState());
});

filterBtn.addEventListener("change", function () {
  sortBtn.value = "";
  let selectedOption = this.value;
  if (selectedOption === "available") {
    currentStateCopy = carManager.arrayCurrentState()
    carManager.availableCars(currentStateCopy);
    carDivs.innerHTML = "";
    currentStateCopy = carManager.availableCars(currentStateCopy)
    displayCars(carDivs, carManager.availableCars(currentStateCopy));
    console.log(currentStateCopy);

  } else if (selectedOption === "unavailable") {
    currentStateCopy = carManager.arrayCurrentState()
    carManager.unavailableCars(carManager.arrayCurrentState(currentStateCopy));
    currentStateCopy = carManager.unavailableCars(currentStateCopy)
    carDivs.innerHTML = "";
    displayCars(carDivs, carManager.unavailableCars(currentStateCopy));
    console.log(currentStateCopy);
  } else {
    carDivs.innerHTML = "";
    displayCars(carDivs, carManager.arrayCurrentState());
  }
});

sortBtn.addEventListener("change", function () {

  filterBtn.value = "";
  let selectedOption = this.value;
  // const currentStateCopy = carManager.arrayCurrentState();
  if (selectedOption === "decending") {

    currentStateCopy = carManager.decending(currentStateCopy);
    carDivs.innerHTML = "";
    displayCars(carDivs, carManager.decending(currentStateCopy));
  } else if (selectedOption === "ascending") {
    currentStateCopy = carManager.ascending(currentStateCopy);
    carDivs.innerHTML = "";
    displayCars(carDivs, carManager.ascending(currentStateCopy));
  } else {
    carDivs.innerHTML = "";
    displayCars(carDivs, currentStateCopy);
  }
});
