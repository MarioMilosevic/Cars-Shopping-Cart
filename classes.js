"use strict";

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
    this.carArray = [];
    this.fakeArray = [];
  }

  makeFakeArr() {
    this.fakeArray = [...this.carArray];
    return this.fakeArray;
  }

  setFakeArr(value) {
    this.fakeArray = value;
  }


  add(car) {
    this.carArray.push(car);
  }

  remove(carId) {
    const carIdNumber = Number(carId);
    const filteredArr = this.carArray.filter((el) => el.id !== carIdNumber);
    this.carArray = filteredArr;
    return this.carArray;
  }

  availableCars(cars) {
    const availableCars = cars.filter((car) => car.available === true);
    return availableCars;
  }

  unavailableCars(cars) {
    const unavailableCars = cars.filter((car) => car.available === false);
    return unavailableCars;
  }

  setState(arr) {
    this.carArray = arr;
  }

  decending(arr) {
    const decendingArr = arr.toSorted((a, b) => a.price - b.price);
    console.log(decendingArr);
    return decendingArr;
  }

  ascending(arr) {
    const ascendingArr = arr.toSorted((a, b) => b.price - a.price);
    console.log(ascendingArr);
    return ascendingArr;
  }

  arrayCurrentState = () => this.carArray;
}
export const carManager = new CarManager();

export class UI {}
