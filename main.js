"use strict";
import { appendElement } from "./helpers";
import { cars, data } from "./constants";
import { Car, carManager, UI } from "./classes";
const { filterBtn, clearBtn, carDivs } = data();

const data1 = [...cars];

// data1.forEach((el) => {
//   const car = new Car(el);
//   carManager.add(car);
// });

let currentStateCopy = [...carManager.arrayCurrentState()];

const displayCars = (root, arr) => {
  arr.forEach((el) => {
    const cars = document.createElement("div");
    cars.innerHTML = "";
    cars.innerHTML = `<div class="carDiv">
   <p class="carText">Name: ${el.name}, ${el.brand}, ${el.manufacturedYear}, ${el.doors}, price: ${el.price}$.</p> 
    
   <button data-carId=${el.id} class="carBtn">X</button>
   </div>`;
    appendElement(root, cars);
  });

  // <div class ="carAvailability">
  // ${el.available === true ? "✅" : "❌"}
  // </div>
  const carBtn = document.querySelectorAll(".carBtn");
  carBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      carManager.remove(btn.dataset.carid);
      const currentState = carManager.arrayCurrentState();
      console.log("real state", carManager.arrayCurrentState());
      root.innerHTML = "";
      console.log("current copy", currentStateCopy);
      displayCars(root, currentState);
    });
  });
};

displayCars(carDivs, currentStateCopy);

clearBtn.addEventListener("click", function () {
  carManager.setState(data1);
  carDivs.innerHTML = "";
  filterBtn.value = "";
  sortBtn.value = "";
  currentStateCopy = carManager.arrayCurrentState();
  displayCars(carDivs, currentStateCopy);
});

filterBtn.addEventListener("change", function (e) {
  // carManager.currentFilter = e.target.value
  // const currentFilter = e.target.value === 'available' ? true : false
  // carManager.filter(currentFilter)
  carDivs.innerHTML = "";
  const [, value] = e.target.value.split("-");
  displayCars(carDivs, carManager.filter(value));
  // carManager.filter(value)
  // console.log(!!value);
  // let selectedOption = this.value;
  // if (selectedOption === "available") {
  //   currentStateCopy = carManager.arrayCurrentState();
  //   carDivs.innerHTML = "";
  //   currentStateCopy = carManager.availableCars(currentStateCopy);
  //   displayCars(carDivs, carManager.availableCars(currentStateCopy));
  //   console.log('kopija',currentStateCopy);
  //   console.log('stejt' ,carManager.arrayCurrentState());
  // } else if (selectedOption === "unavailable") {
  //   currentStateCopy = carManager.arrayCurrentState();
  //   currentStateCopy = carManager.unavailableCars(currentStateCopy);
  //   carDivs.innerHTML = "";
  //   displayCars(carDivs, carManager.unavailableCars(currentStateCopy));
  //   console.log('kopija',currentStateCopy);
  //   console.log('stejt' ,carManager.arrayCurrentState());
  // } else {
  //   carDivs.innerHTML = "";
  //   sortBtn.value = "";
  //   displayCars(carDivs, carManager.arrayCurrentState());
  //   console.log('kopija',currentStateCopy);
  //   console.log('stejt' ,carManager.arrayCurrentState());
  // }
});

sortBtn.addEventListener("change", function (e) {
  const target = e.target.value
  console.log('target', target);
  target === 'decending' ? 'decending' : "ascending";
  // const [, value] = e.target.value.split("-");
  // console.log(value);
  carManager.sort(target);
  carDivs.innerHTML = "";
  displayCars(carDivs, carManager.sort(target));

  // let selectedOption = this.value;
  // if (selectedOption === "decending") {
  //   currentStateCopy = carManager.decending(currentStateCopy);
  //   carDivs.innerHTML = "";
  //   displayCars(carDivs, carManager.decending(currentStateCopy));
  // } else if (selectedOption === "ascending") {
  //   currentStateCopy = carManager.ascending(currentStateCopy);
  //   carDivs.innerHTML = "";
  //   displayCars(carDivs, carManager.ascending(currentStateCopy));
  // } else {
  //   carDivs.innerHTML = "";
  //   if (!filterBtn.value) {
  //     currentStateCopy = carManager.arrayCurrentState();
  //     displayCars(carDivs, currentStateCopy);
  //   } else if (filterBtn.value === "available") {
  //     currentStateCopy = carManager.availableCars(currentStateCopy);
  //     displayCars(carDivs, currentStateCopy);
  //   } else if (filterBtn.value === "unavailable") {
  //     currentStateCopy = carManager.unavailableCars(currentStateCopy);
  //     displayCars(carDivs, currentStateCopy);
  //   }
  // }
});
