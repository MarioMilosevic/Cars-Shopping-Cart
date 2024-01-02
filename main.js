"use strict";
import { appendElement } from "./helpers";
import { cars, data } from "./constants";
import { Car, carManager, UI } from "./classes";
const { filterBtn, clearBtn, carDivs } = data();

const displayCars = (root, arr) => {
  arr.forEach((el) => {
    const cars = document.createElement("div");
    cars.innerHTML = "";
    cars.innerHTML = `<div class="carDiv">
   <p class="carText">Name: ${el.name}, ${el.brand}, ${el.manufacturedYear}, ${
      el.doors
    }, price: ${el.price}$.</p> 
    <div class ="carAvailability">
    ${el.available === "true" ? "✅" : "❌"}
    </div>
    
   <button data-carId=${el.id} class="carBtn">X</button>
   </div>`;
    appendElement(root, cars);
  });

  const carBtn = document.querySelectorAll(".carBtn");
  carBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      carManager.remove(btn.dataset.carid);
      const currentState = carManager.getCurrentState();
      root.innerHTML = "";
      displayCars(root, carManager.customArr);
    });
  });
};

displayCars(carDivs, carManager.getCurrentState());

clearBtn.addEventListener("click", function () {
  carManager.resetCustomArr()
  console.log(carManager.customArr);
  carDivs.innerHTML = "";
  filterBtn.value = "";
  sortBtn.value = "";
  displayCars(carDivs, carManager.getCurrentState());
});

filterBtn.addEventListener("change", function (e) {
  carDivs.innerHTML = "";
  const [key, value] = e.target.value.split("-");
  // console.log(key);
  // console.log(value);
   console.log(carManager.getCurrentState());
  displayCars(carDivs, carManager.filter(key,value));
});

sortBtn.addEventListener("change", function (e) {
  const target = e.target.value;
  target === "decending" ? "decending" : "ascending";
  carManager.sort(target);
  carDivs.innerHTML = "";
  displayCars(carDivs, carManager.sort(target));
});
