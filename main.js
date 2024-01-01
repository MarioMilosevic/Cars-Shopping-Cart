"use strict";
import { displayCars, filter } from "./helpers";
import { cars, data } from "./constants";
import { Car, carManager, UI } from "./classes";
const { filterBtn, clearBtn, carDivs } = data();

const data1 = [...cars];

data1.forEach((el) => {
  const car = new Car(el);
  carManager.add(car);
});

displayCars(carDivs, carManager.arrayCurrentState());

clearBtn.addEventListener("click", function () {
  carManager.setState(data1);
  carDivs.innerHTML = "";
  displayCars(carDivs, carManager.arrayCurrentState());
});

filterBtn.addEventListener("change", function () {
  sortBtn.value = "";
  let selectedOption = this.value;
  const currentState = carManager.arrayCurrentState();
  if (selectedOption === "available") {
    carManager.availableCars(currentState);
    carDivs.innerHTML = "";
    displayCars(carDivs, carManager.availableCars(currentState));
    console.log(currentState);
  } else if (selectedOption === "unavailable") {
    carManager.unavailableCars(carManager.arrayCurrentState(currentState));
    carDivs.innerHTML = "";
    displayCars(carDivs, carManager.unavailableCars(currentState));
  }
});

sortBtn.addEventListener("change", function () {
  filterBtn.value = "";
  let selectedOption = this.value;
  const currentState = carManager.arrayCurrentState();
  if (selectedOption === "decending") {
    const decending = carManager.decending(currentState);
    carDivs.innerHTML = "";
    displayCars(carDivs, carManager.decending(decending));
  } else if (selectedOption === "ascending") {
    const ascending = carManager.ascending(currentState);
    carDivs.innerHTML = "";
    displayCars(carDivs, carManager.ascending(ascending));
  }
});
