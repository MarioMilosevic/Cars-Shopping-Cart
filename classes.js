'use strict'

export class Car {
constructor(info){
    this.info = info
this.id = info.id
this.name = info.name
this.brand = info.brand
this.manufacturedYear = info.manufacturedYear
this.doors = info.doors
this.price = info.price
this.available = info.available
}
returnCar = () => info
}

export class CarManager{
constructor(){
this.carArray = []
}

add(car){
this.carArray.push(car)
}

remove(carId) {
    const carIdNumber = Number(carId)
    const filteredArr = this.carArray.filter(el => el.id !== carIdNumber)
    console.log(filteredArr);
    this.carArray = filteredArr
    return this.carArray
// console.log(carId);
   }

arrayCurrentState = () => this.carArray


}
export const carManager = new CarManager();

export class UI {

}