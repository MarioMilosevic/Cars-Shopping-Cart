"use strict";
import { cars } from "./constants";
export class Car {
  constructor(info) {
    this.info = info;
    this.id = info.id;
    this.name = info.name;
    this.brand = info.brand;
    this.manufacturedYear = info.manufacturedYear;
    this.doors = info.doors;
    this.price = info.price;
    this.available = info.available;
  }
  returnCar = () => info;
}

export class CarManager {
  constructor() {
    this.carArray = [...cars];
    this.customArr = [];
    this.currentFilter = "";
  }

  add(car) {
    this.carArray.push(car);
  }

  filter(value) {
    this.customArr = [...this.carArray];
    this.customArr = this.customArr.filter((el) => el.available === value);
    return this.customArr;
  }

  resetCustomArr(){
    this.customArr = [...this.carArray]
  }

  setCustomArr() {
    this.customArr.length === 0
      ? this.customArr.push(...this.carArray)
      : this.customArr;
  }

  sort(value) {
    this.setCustomArr();
    this.customArr = this.customArr.sort((a, b) =>
      value === "decending" ? b.price - a.price : a.price - b.price
    );
    return this.customArr;
  }

  remove(carId) {
    this.setCustomArr();
    const carIdNumber = Number(carId);
    this.customArr = this.customArr.filter((el) => el.id !== carIdNumber);
  }

  setState(arr) {
    this.carArray = arr;
  }

  arrayCurrentState = () => this.carArray;
}
export const carManager = new CarManager();

export class UI {}
