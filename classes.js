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
    this.filteredArr = []
    this.currentFilter = ''
  }


  add(car) {
    this.carArray.push(car);
  }

  filter(value) {
    console.log(this.carArray);
    let filteredArr = [...this.carArray]
    filteredArr = filteredArr.filter((el) => el.available === value);
    console.log(filteredArr);
    return filteredArr
  }

  // availableCars(cars) {
  //   const availableCars = cars.filter((car) => car.available === true);
  //   return availableCars;
  // }

  // unavailableCars(cars) {
  //   const unavailableCars = cars.filter((car) => car.available === false);
  //   return unavailableCars;
  // }

  setState(arr) {
    this.carArray = arr;
  }

  sort(value){
    let sortArr = [...this.carArray]
    sortArr = sortArr.sort((a,b) => value === "decending" ? b.price - a.price : a.price - b.price)
    return sortArr
  }


  // decending(arr) {
  //   const decendingArr = arr.toSorted((a, b) => a.price - b.price);
  //   console.log(decendingArr);
  //   return decendingArr;
  // }

  // ascending(arr) {
  //   const ascendingArr = arr.toSorted((a, b) => b.price - a.price);
  //   console.log(ascendingArr);
  //   return ascendingArr;
  // }

  arrayCurrentState = () => this.carArray;
}
export const carManager = new CarManager();

export class UI {}
