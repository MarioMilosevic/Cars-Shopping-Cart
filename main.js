"use strict";
import { appendElement } from "./helpers";
import { cars, data } from "./constants";
import { Car, carManager, UI } from "./classes";
const { filterBtn, clearBtn, carDivs } = data();

const data1 = [...cars];

data1.forEach((el) => {
  const car = new Car(el);
  carManager.add(car);
});

let currentStateCopy = [...carManager.arrayCurrentState()];

const displayCars = (root, arr) => {
  arr.forEach((el) => {
    const cars = document.createElement("div");
    cars.innerHTML = "";
    cars.innerHTML = `<div class="carDiv">
   <p class="carText">Name: ${el.name}, ${el.brand}, ${el.manufacturedYear}, ${
      el.doors
    }, price: ${el.price}$.</p> 
    <div class ="carAvailability">
    ${el.available === true ? "✅" : "❌"}
    </div>
   <button data-carId=${el.id} class="carBtn">X</button>
   </div>`;
    appendElement(root, cars);
  });

  const carBtn = document.querySelectorAll(".carBtn");
  carBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      carManager.remove(btn.dataset.carid);
      console.log('real state',carManager.arrayCurrentState());
      root.innerHTML = "";
      console.log('current copy', currentStateCopy);
      displayCars(root, currentStateCopy);
    });
  });
};



displayCars(carDivs, currentStateCopy);

clearBtn.addEventListener("click", function () {
  carManager.setState(data1);
  carDivs.innerHTML = "";
  filterBtn.value = "";
  sortBtn.value = "";
  displayCars(carDivs, carManager.arrayCurrentState());
});

filterBtn.addEventListener("change", function () {
  // sortBtn.value = "";
  let selectedOption = this.value;
  if (selectedOption === "available") {
    currentStateCopy = carManager.arrayCurrentState();
    // carManager.availableCars(currentStateCopy);
    carDivs.innerHTML = "";
    currentStateCopy = carManager.availableCars(currentStateCopy);
    displayCars(carDivs, carManager.availableCars(currentStateCopy));
    console.log(currentStateCopy);
  } else if (selectedOption === "unavailable") {
    currentStateCopy = carManager.arrayCurrentState();
    // carManager.unavailableCars(carManager.arrayCurrentState(currentStateCopy));
    currentStateCopy = carManager.unavailableCars(currentStateCopy);
    carDivs.innerHTML = "";
    displayCars(carDivs, carManager.unavailableCars(currentStateCopy));
    console.log(currentStateCopy);
  } else {
    carDivs.innerHTML = "";
    sortBtn.value = "";
    displayCars(carDivs, carManager.arrayCurrentState());
  }
});
console.log(filterBtn.value);

sortBtn.addEventListener("change", function () {
  // filterBtn.value = "";
  let selectedOption = this.value;
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
    if(filterBtn.value === 'filterBy'){
      currentStateCopy = carManager.arrayCurrentState()
      displayCars(carDivs, currentStateCopy);
    } else if (filterBtn.value === 'available'){
      currentStateCopy = carManager.availableCars(currentStateCopy)
      displayCars(carDivs, currentStateCopy)
    } else if (filterBtn.value === 'unavailable'){
      currentStateCopy = carManager.unavailableCars(currentStateCopy)
      displayCars(carDivs, currentStateCopy);
    }
  }
});
