"use strict";
import { carManager } from "./classes";

export const displayCars = (root, arr) => {
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
    // root.appendChild(cars);
  });

  const carBtn = document.querySelectorAll(".carBtn");
  carBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      carManager.remove(btn.dataset.carid);
      root.innerHTML = "";
      const currentState = carManager.arrayCurrentState();
      displayCars(root, currentState);
    });
  });
};

const appendElement = (root, child) => {
  root.append(child);
};
